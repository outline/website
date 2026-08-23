#!/usr/bin/env node

/**
 * Publishes a markdown version of every page that is written in markdown, at
 * the page's own URL with a .md suffix, so that agents can read the content
 * without parsing the rendered page. This mirrors the convention already used
 * by shared documents in the Outline app itself.
 *
 * Static export has no route handlers, so the files are written into public/
 * before the build and copied into the output alongside the HTML.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const fs = require("fs");
const path = require("path");

const { DOMAIN, getChangelogPosts, getIntegrations } = require("./routes");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

/**
 * Relative links and images resolve against the page they're embedded in, so
 * they're made absolute to keep the markdown useful on its own.
 */
const absoluteURLs = (markdown) =>
  markdown.replace(/\]\((\/[^)]*)\)/g, `](${DOMAIN}$1)`);

const escapeYAML = (value) => `"${String(value).replace(/"/g, '\\"')}"`;

/**
 * Frontmatter carries the metadata that the rendered page shows around the
 * content, plus the canonical URL so the file describes where it came from.
 */
const toMarkdown = ({ title, canonical, metadata, content }) => {
  const frontmatter = Object.entries({ title, ...metadata, canonical })
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${escapeYAML(value)}`);

  return `---
${frontmatter.join("\n")}
---

# ${title}

${absoluteURLs(content)}
`;
};

function write(route, markdown) {
  const file = path.join(PUBLIC_DIR, `${route}.md`);

  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, markdown);
}

function main() {
  const posts = getChangelogPosts();
  const integrations = getIntegrations();

  for (const post of posts) {
    const route = `/changelog/${post.slug}`;

    write(
      route,
      toMarkdown({
        title: post.title,
        canonical: DOMAIN + route,
        metadata: { date: post.date, tag: post.tag },
        content: post.content,
      })
    );
  }

  for (const integration of integrations) {
    const route = `/integrations/${integration.slug}`;

    write(
      route,
      toMarkdown({
        title: `${integration.name} integration`,
        canonical: DOMAIN + route,
        metadata: {
          description: integration.description,
          category: integration.category,
          website: integration.url,
        },
        content: integration.content,
      })
    );
  }

  console.log(
    `Wrote ${posts.length} changelog and ${integrations.length} integration pages as markdown`
  );
}

main();
