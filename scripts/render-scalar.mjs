#!/usr/bin/env node

/**
 * Prerenders the Scalar API Reference for the /developers page.
 *
 * Scalar's renderer is a Vue application, so it cannot be rendered by Next's
 * own React SSR. Instead this script renders it to an HTML string at build
 * time, which pages/developers.tsx embeds and the standalone Scalar bundle
 * hydrates on the client.
 *
 * Runs automatically before `yarn dev` and `yarn build`, after the OpenAPI
 * spec has been downloaded by scripts/fetch-openapi.js.
 */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import {
  renderApiReferenceToString,
  generateBodyScript,
} from "@scalar/server-side-rendering";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const scalarConfiguration = require("../lib/scalarConfiguration");

const SPEC_PATH = path.join(__dirname, "..", "public", "openapi.json");
const OUTPUT_PATH = path.join(__dirname, "..", ".generated", "developers.json");
const CSS_PATH = path.join(__dirname, "..", "public", "scalar.css");

async function main() {
  if (!fs.existsSync(SPEC_PATH)) {
    throw new Error(
      "public/openapi.json is missing, run `yarn openapi` to download it"
    );
  }

  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));
  const configuration = { ...scalarConfiguration, content: spec };

  const html = await renderApiReferenceToString(configuration);

  // The full component stylesheet, published as a static file and linked from
  // the page head so the prerendered markup is styled before the JS bundle
  // loads. A file rather than a prop so it isn't duplicated into __NEXT_DATA__.
  fs.copyFileSync(
    require.resolve("@scalar/api-reference/style.css"),
    CSS_PATH
  );

  // Sets the dark-mode/light-mode class on <body> before first paint. The
  // <script> wrapper is stripped as the page embeds it via its own tag.
  const colorModeScript = generateBodyScript(configuration)
    .replace(/^<script>/, "")
    .replace(/<\/script>$/, "");

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ html, colorModeScript }));

  console.log(
    `Prerendered Scalar API Reference to ${path.relative(
      process.cwd(),
      OUTPUT_PATH
    )} (${Math.round(html.length / 1024)}KB HTML) and public/scalar.css`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
