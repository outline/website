/**
 * Inventory of the site's public URLs and the markdown they're authored from,
 * shared by the sitemap.xml, llms.txt and .md generators so that they can't
 * drift apart.
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

/** Changelog entries, most recently published first. */
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
        date: new Date(data.date).toISOString(),
        content: content.trim(),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Integration and embed pages, in the order they're listed on /integrations.
 * Entries in index.json without a markdown file of their own are listed on the
 * directory but have no page, so they're skipped here.
 */
function getIntegrations() {
  return require(path.join(ROOT, "integrations", "index.json"))
    .map((integration) => ({
      ...integration,
      file: path.join(ROOT, "integrations", `${integration.slug}.md`),
    }))
    .filter((integration) => fs.existsSync(integration.file))
    .map(({ file, ...integration }) => ({
      ...integration,
      content: fs.readFileSync(file, "utf8").trim(),
    }));
}

module.exports = {
  DOMAIN,
  getStaticRoutes,
  getChangelogPosts,
  getIntegrations,
};
