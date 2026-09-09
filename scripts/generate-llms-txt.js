#!/usr/bin/env node

/**
 * Writes public/llms.txt, a short index of the site for language models and
 * agents, following the convention described at https://llmstxt.org.
 *
 * Runs automatically before `yarn dev` and `yarn build`, after the OpenAPI
 * spec has been downloaded.
 */

const fs = require("fs");
const path = require("path");

const {
  DOMAIN,
  getStaticRoutes,
  getChangelogPosts,
  getIntegrations,
} = require("./routes");

const OUTPUT_PATH = path.join(__dirname, "..", "public", "llms.txt");
const SPEC_PATH = path.join(__dirname, "..", "public", "openapi.json");

// Listing every changelog entry would crowd out the rest of the file. The
// remainder stay discoverable through /changelog and sitemap.xml.
const RECENT_POSTS = 20;

// Curated titles and descriptions for the pages discovered in pages/. Anything
// missing from here is still listed, but warns so it can be described properly.
const PAGES = {
  "/": ["Outline", "What Outline is, who it's for, and its main features"],
  "/pricing": [
    "Pricing",
    "Plans and pricing for Outline Cloud and for self-hosting on your own infrastructure",
  ],
  "/download": ["Download", "Desktop apps for macOS and Windows"],
  "/integrations": [
    "Integrations",
    "Directory of services that embed in or connect to Outline",
  ],
  "/compare/confluence-alternative": [
    "Outline vs Confluence",
    "How Outline compares to Confluence",
  ],
  "/compare/google-docs-alternative": [
    "Outline vs Google Docs",
    "How Outline compares to Google Docs",
  ],
  "/about": [
    "About",
    "Outline's approach to open source, non-profit discounts, and sponsorship",
  ],
  "/contact": ["Contact", "How to get in touch with the Outline team"],
  "/changelog": [
    "Changelog",
    "New features, improvements, and fixes, most recent first",
  ],
  "/developers": [
    "API documentation",
    "Reference for every API endpoint, rendered from the OpenAPI specification",
  ],
  "/privacy": ["Privacy policy", "How Outline handles personal data"],
  "/terms": ["Terms of service", "Terms covering use of Outline"],
};

// Which pages belong in which section, in the order they should be listed.
const SECTIONS = [
  {
    title: "Product",
    routes: [
      "/",
      "/pricing",
      "/download",
      "/integrations",
      "/compare/confluence-alternative",
      "/compare/google-docs-alternative",
      "/about",
      "/contact",
    ],
  },
  { title: "Legal", routes: ["/privacy", "/terms"] },
];

// Pages listed alongside related external links in a hand written section
// below rather than in one of the sections above.
const ROUTES_LISTED_ELSEWHERE = ["/developers", "/changelog"];

const link = (title, url, description) =>
  `- [${title}](${url})${description ? `: ${description}` : ""}`;

/** Describes the published spec, using its own contents where available. */
function getSpecDescription() {
  if (!fs.existsSync(SPEC_PATH)) {
    return "Machine readable description of the Outline API";
  }

  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));

  return `OpenAPI ${spec.openapi} description of all ${
    Object.keys(spec.paths).length
  } API endpoints, served over RPC style POST requests to ${
    spec.servers[0].url
  }`;
}

function main() {
  const posts = getChangelogPosts();
  const integrations = getIntegrations();
  const routes = getStaticRoutes();

  const described = new Set([
    ...SECTIONS.flatMap((section) => section.routes),
    ...ROUTES_LISTED_ELSEWHERE,
  ]);
  const uncategorized = routes.filter((route) => !described.has(route));

  for (const route of uncategorized) {
    console.warn(
      `Warning: ${route} has no entry in scripts/generate-llms-txt.js, listing it without a description`
    );
  }

  const sections = [
    ...SECTIONS.map(({ title, routes: sectionRoutes }) => ({
      title,
      links: sectionRoutes
        // A curated page that has since been deleted shouldn't be linked.
        .filter((route) => routes.includes(route))
        .map((route) => link(PAGES[route][0], DOMAIN + route, PAGES[route][1])),
    })),
    {
      title: "API",
      links: [
        link(
          "OpenAPI specification",
          `${DOMAIN}/openapi.json`,
          getSpecDescription()
        ),
        link(
          PAGES["/developers"][0],
          `${DOMAIN}/developers`,
          PAGES["/developers"][1]
        ),
      ],
    },
    {
      title: "Documentation and community",
      links: [
        link(
          "User guide",
          "https://docs.getoutline.com/s/guide",
          "Help documentation for using Outline"
        ),
        link(
          "Source code",
          "https://github.com/outline/outline",
          "Outline is open source, including self-hosting instructions and the issue tracker"
        ),
        link(
          "Community discussions",
          "https://github.com/outline/outline/discussions",
          "Questions and feature requests"
        ),
        link(
          "Status",
          "https://status.getoutline.com",
          "Availability and incident history for Outline Cloud"
        ),
      ],
    },
    {
      title: "Integrations",
      links: integrations
        .filter((integration) => integration.type === "integration")
        .map((integration) =>
          link(
            integration.name,
            `${DOMAIN}/integrations/${integration.slug}`,
            integration.description
          )
        ),
    },
    {
      title: "Embeds",
      links: integrations
        .filter((integration) => integration.type === "embed")
        .map((integration) =>
          link(
            integration.name,
            `${DOMAIN}/integrations/${integration.slug}`,
            integration.description
          )
        ),
    },
    {
      title: "Changelog",
      links: [
        link(
          PAGES["/changelog"][0],
          `${DOMAIN}/changelog`,
          PAGES["/changelog"][1]
        ),
        link("Changelog feed", `${DOMAIN}/rss.xml`, "RSS feed of the changelog"),
        ...posts
          .slice(0, RECENT_POSTS)
          .map((post) =>
            link(
              post.title,
              `${DOMAIN}/changelog/${post.slug}`,
              post.date.slice(0, 10)
            )
          ),
      ],
    },
    {
      title: "Other pages",
      links: uncategorized.map((route) => link(route, DOMAIN + route)),
    },
  ].filter((section) => section.links.length);

  const llms = `# Outline

> Outline is a collaborative knowledge base and wiki for growing teams, available as a hosted service or self-hosted on your own infrastructure. This file indexes the public pages of ${DOMAIN} for language models and agents.

${sections
  .map(({ title, links }) => `## ${title}\n\n${links.join("\n")}`)
  .join("\n\n")}

## Notes

- The full list of pages, including all ${posts.length} changelog entries, is in [sitemap.xml](${DOMAIN}/sitemap.xml).
- Changelog entries and integration pages are written in markdown. Appending \`.md\` to either kind of URL returns that source, without the surrounding page, for example [${DOMAIN}/changelog/${posts[0].slug}.md](${DOMAIN}/changelog/${posts[0].slug}.md).
`;

  fs.writeFileSync(OUTPUT_PATH, llms);

  console.log(
    `Wrote public/llms.txt with ${sections.reduce(
      (total, section) => total + section.links.length,
      0
    )} links, listing the ${Math.min(
      RECENT_POSTS,
      posts.length
    )} most recent of ${posts.length} changelog entries`
  );
}

main();
