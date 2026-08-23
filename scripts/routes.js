/**
 * Inventory of the site's public URLs, shared by the sitemap.xml and llms.txt
 * generators so that the two can't drift apart.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const DOMAIN = "https://www.getoutline.com";

const ROOT = path.join(__dirname, "..");

// Framework and error pages, which aren't part of the public site.
const IGNORED_PAGES = new Set(["_app", "_document", "404", "500"]);

/**
 * Marketing and documentation routes, discovered from the pages directory so
 * that a newly added page is picked up without touching this file. Dynamic
 * routes are skipped here and expanded from their content below.
 */
function getStaticRoutes() {
  const routes = [];

  const walk = (dir, prefix) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), `${prefix}/${entry.name}`);
        continue;
      }

      if (!/\.tsx?$/.test(entry.name)) {
        continue;
      }

      const name = entry.name.replace(/\.tsx?$/, "");

      if (name.startsWith("[") || IGNORED_PAGES.has(name)) {
        continue;
      }

      routes.push(name === "index" ? prefix || "/" : `${prefix}/${name}`);
    }
  };

  walk(path.join(ROOT, "pages"), "");

  return routes.sort();
}

/** Changelog entries and their markdown bodies, most recently published first. */
function getChangelogPosts() {
  const dir = path.join(ROOT, "posts");

  return fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(dir, fileName), "utf8")
      );

      return {
        slug: data.slug,
        title: data.title,
        tag: data.tag || "",
        date: new Date(data.date).toISOString(),
        content: content.trim(),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Integration pages with their markdown bodies, in the order they're listed on
 * /integrations. Their metadata lives in index.json rather than in frontmatter.
 */
function getIntegrations() {
  const index = require(path.join(ROOT, "integrations", "index.json"));

  return index.map((integration) => ({
    ...integration,
    content: fs
      .readFileSync(
        path.join(ROOT, "integrations", `${integration.slug}.md`),
        "utf8"
      )
      .trim(),
  }));
}

module.exports = {
  DOMAIN,
  getStaticRoutes,
  getChangelogPosts,
  getIntegrations,
};
