#!/usr/bin/env node

/**
 * Downloads the Outline OpenAPI specification into public/openapi.json.
 *
 * This publishes the spec at https://www.getoutline.com/openapi.json, a
 * conventional location where API clients and agents look for it, and is also
 * the copy rendered by the /developers page.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const fs = require("fs");
const path = require("path");

// Keep in sync with the spec referenced in .github/workflows/deploy.yml, which
// schedules a deploy when the upstream specification changes.
const SPEC_URL =
  "https://raw.githubusercontent.com/outline/openapi/main/spec3.json";

const OUTPUT_PATH = path.join(__dirname, "..", "public", "openapi.json");

async function main() {
  const res = await fetch(SPEC_URL);

  if (!res.ok) {
    throw new Error(
      `Failed to download ${SPEC_URL} (${res.status} ${res.statusText})`
    );
  }

  // Written through unchanged so the published document is byte-for-byte the
  // upstream one, but parsed first so that a truncated or unexpected response
  // fails the build instead of being published.
  const spec = await res.text();
  const parsed = JSON.parse(spec);

  if (!parsed.openapi || !parsed.paths) {
    throw new Error(`${SPEC_URL} does not look like an OpenAPI document`);
  }

  fs.writeFileSync(OUTPUT_PATH, spec);

  console.log(
    `Wrote OpenAPI ${parsed.openapi} spec with ${
      Object.keys(parsed.paths).length
    } paths to public/openapi.json`
  );
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
