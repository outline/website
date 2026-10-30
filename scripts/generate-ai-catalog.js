#!/usr/bin/env node

/**
 * Writes public/.well-known/ai-catalog.json, an AI Catalog
 * (https://github.com/Agent-Card/ai-catalog) that lets agents discover the
 * Outline MCP server and API from the website's domain.
 *
 * The MCP Server Card is included inline rather than linked, as the website is
 * a static export and the card's version is only known at build time.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const fs = require("fs");
const path = require("path");

const { DOMAIN } = require("./routes");

// The MCP server reports the application's version, see server/mcp/index.ts in
// the main repository.
const PACKAGE_URL =
  "https://raw.githubusercontent.com/outline/outline/main/package.json";

const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "public",
  ".well-known",
  "ai-catalog.json"
);

async function getVersion() {
  const res = await fetch(PACKAGE_URL);

  if (!res.ok) {
    throw new Error(
      `Failed to download ${PACKAGE_URL} (${res.status} ${res.statusText})`
    );
  }

  const { version } = await res.json();

  if (!version) {
    throw new Error(`${PACKAGE_URL} does not contain a version`);
  }

  return version;
}

async function main() {
  const version = await getVersion();

  // https://github.com/modelcontextprotocol/experimental-ext-server-card
  const serverCard = {
    $schema:
      "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
    name: "com.getoutline/outline",
    version,
    title: "Outline",
    description:
      "Search, read, create, and edit documents, collections, and comments in an Outline workspace.",
    websiteUrl: DOMAIN,
    repository: {
      url: "https://github.com/outline/outline",
      source: "github",
      subfolder: "server/mcp",
    },
    icons: [
      {
        src: "https://app.getoutline.com/images/icon-192.png",
        mimeType: "image/png",
        sizes: ["192x192"],
      },
      {
        src: "https://app.getoutline.com/images/icon-512.png",
        mimeType: "image/png",
        sizes: ["512x512"],
      },
    ],
    remotes: [
      {
        type: "streamable-http",
        url: "https://app.getoutline.com/mcp",
      },
      {
        type: "streamable-http",
        url: "https://{domain}/mcp",
        variables: {
          domain: {
            description: "The domain of a self-hosted Outline installation",
            isRequired: true,
            placeholder: "docs.example.com",
          },
        },
      },
    ],
  };

  const catalog = {
    specVersion: "1.0",
    host: {
      displayName: "Outline",
      identifier: "www.getoutline.com",
      documentationUrl: `${DOMAIN}/developers`,
      logoUrl: "https://app.getoutline.com/images/icon-512.png",
    },
    entries: [
      {
        identifier: "urn:air:getoutline.com:mcp:outline",
        displayName: "Outline MCP server",
        type: "application/mcp-server-card+json",
        data: serverCard,
        representativeQueries: [
          "search our team wiki for the onboarding process",
          "summarize the documents in the engineering collection",
          "save these meeting notes as a new document",
          "find unresolved comments on the product roadmap",
        ],
      },
      {
        identifier: "urn:air:getoutline.com:api:outline",
        displayName: "Outline API",
        type: "application/vnd.oai.openapi+json",
        url: `${DOMAIN}/openapi.json`,
        representativeQueries: [
          "create a document in Outline with the API",
          "export a collection from Outline",
          "list the users in an Outline workspace",
        ],
      },
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(catalog, null, 2)}\n`);

  console.log(
    `Wrote ${catalog.entries.length} entries to public/.well-known/ai-catalog.json (MCP server ${version})`
  );
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
