#!/usr/bin/env node

/**
 * Publishes the skills that ship with Outline's MCP server as an Agent Skills
 * discovery index (https://github.com/cloudflare/agent-skills-discovery-rfc),
 * so that agents can find and install them from the website:
 *
 *   /.well-known/agent-skills/index.json
 *   /.well-known/agent-skills/find-and-cite/SKILL.md
 *
 * The skills are authored alongside the MCP server in the main repository and
 * downloaded from there, rather than copied, so that they can't drift apart.
 *
 * Runs automatically before `yarn dev` and `yarn build`.
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const REPO = "outline/outline";
const SKILLS_PATH = "server/mcp/skills";

// Written entirely by this script, so it can be emptied first and never
// accumulate skills that have since been renamed or removed upstream.
const OUTPUT_DIR = path.join(
  __dirname,
  "..",
  "public",
  ".well-known",
  "agent-skills"
);

async function get(url, headers = {}) {
  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(
      `Failed to download ${url} (${res.status} ${res.statusText})`
    );
  }

  return res;
}

/** Names of the skill directories in the main repository. */
async function listSkills() {
  // The token is optional, it only raises the API rate limit which shared CI
  // runners can otherwise exhaust.
  const headers = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};
  const res = await get(
    `https://api.github.com/repos/${REPO}/contents/${SKILLS_PATH}`,
    headers
  );

  return (await res.json())
    .filter((entry) => entry.type === "dir")
    .map((entry) => entry.name)
    .sort();
}

async function main() {
  const names = await listSkills();
  const skills = [];

  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });

  for (const name of names) {
    const res = await get(
      `https://raw.githubusercontent.com/${REPO}/main/${SKILLS_PATH}/${name}/SKILL.md`
    );

    // Hashed and written as the exact bytes downloaded, as clients verify the
    // published file against this digest.
    const contents = Buffer.from(await res.arrayBuffer());
    const { data } = matter(contents.toString("utf8"));

    if (!data.name || !data.description) {
      throw new Error(`${name}/SKILL.md is missing a name or description`);
    }

    fs.mkdirSync(path.join(OUTPUT_DIR, name), { recursive: true });
    fs.writeFileSync(path.join(OUTPUT_DIR, name, "SKILL.md"), contents);

    skills.push({
      name: data.name,
      type: "skill-md",
      description: data.description,
      url: `/.well-known/agent-skills/${name}/SKILL.md`,
      digest: `sha256:${crypto
        .createHash("sha256")
        .update(contents)
        .digest("hex")}`,
    });
  }

  const index = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills,
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "index.json"),
    `${JSON.stringify(index, null, 2)}\n`
  );

  console.log(
    `Wrote ${
      skills.length
    } skills to public/.well-known/agent-skills (${skills
      .map((skill) => skill.name)
      .join(", ")})`
  );
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
