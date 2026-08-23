#!/usr/bin/env node

/**
 * Writes public/sitemap.xml so that crawlers and agents can enumerate every
 * page on the site rather than having to discover them by following links.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const fs = require("fs");
const path = require("path");

const {
  DOMAIN,
  getStaticRoutes,
  getChangelogPosts,
  getIntegrations,
} = require("./routes");

const OUTPUT_PATH = path.join(__dirname, "..", "public", "sitemap.xml");

const escapeXML = (unsafe) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// lastmod is only set for changelog entries, the one place where a genuine
// publication date is known. Guessing it for everything else, from file
// timestamps that change on every checkout, would be worse than omitting it.
const toURL = ({ loc, lastmod }) =>
  [
    "  <url>",
    `    <loc>${escapeXML(DOMAIN + loc)}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    "  </url>",
  ].join("\n");

function main() {
  const posts = getChangelogPosts();
  const integrations = getIntegrations();

  const urls = [
    ...getStaticRoutes().map((loc) => ({ loc })),
    ...integrations.map(({ slug }) => ({ loc: `/integrations/${slug}` })),
    ...posts.map(({ slug, date }) => ({
      loc: `/changelog/${slug}`,
      lastmod: date,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(toURL).join("\n")}
</urlset>
`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);

  console.log(
    `Wrote ${urls.length} URLs to public/sitemap.xml (${
      urls.length - posts.length - integrations.length
    } pages, ${integrations.length} integrations, ${posts.length} changelog)`
  );
}

main();
