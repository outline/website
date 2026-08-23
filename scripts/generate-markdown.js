#!/usr/bin/env node

/**
 * Writes a plain markdown copy of every page that is authored in markdown, so
 * that appending ".md" to its URL returns the source text instead of a page of
 * HTML. Language models and agents can then read a changelog entry or an
 * integration page without parsing the markup around it.
 *
 *   /changelog/ai-answers    ->  /changelog/ai-answers.md
 *   /integrations/figma      ->  /integrations/figma.md
 *
 * The site is a static export, so there is no server to negotiate on content
 * type or extension; the files are generated into public/ alongside sitemap.xml
 * and llms.txt and copied into out/ by `next build`.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const fs = require("fs");
const path = require("path");

const { DOMAIN, getChangelogPosts, getIntegrations } = require("./routes");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

// Directories written entirely by this script, so they can be emptied first and
// never accumulate entries for posts that have since been renamed or removed.
const CHANGELOG_DIR = path.join(PUBLIC_DIR, "changelog");
const INTEGRATIONS_DIR = path.join(PUBLIC_DIR, "integrations");

/**
 * Points root relative links and images at the canonical domain. The markdown
 * is read away from the page it belongs to, where a relative path has nothing
 * to resolve against.
 */
const absolute = (markdown) => markdown.replace(/\]\(\//g, `](${DOMAIN}/`);

/** Replaces a generated directory with an empty one. */
function reset(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function write(dir, slug, contents) {
  fs.writeFileSync(path.join(dir, `${slug}.md`), `${contents.trim()}\n`);
}

function main() {
  const posts = getChangelogPosts();
  const integrations = getIntegrations();

  reset(CHANGELOG_DIR);
  reset(INTEGRATIONS_DIR);

  // The title and date are rendered by the page rather than being part of the
  // post body, so they're added back here to keep each file self contained.
  for (const post of posts) {
    write(
      CHANGELOG_DIR,
      post.slug,
      `# ${post.title}

${post.date.slice(0, 10)}

${absolute(post.content)}`
    );
  }

  for (const integration of integrations) {
    write(
      INTEGRATIONS_DIR,
      integration.slug,
      `# ${integration.name} integration

> ${integration.description}

${absolute(integration.content)}`
    );
  }

  console.log(
    `Wrote ${posts.length + integrations.length} markdown files to public/ (${
      posts.length
    } changelog, ${integrations.length} integrations)`
  );
}

main();
