import fs from "fs";
import path from "path";
import type { Integration } from "./integrations";

const INTEGRATIONS_DIR = path.join(process.cwd(), "integrations");

/**
 * Every integration and embed in the directory, in listing order, with a flag
 * for whether it has a markdown page of its own. Only for use in
 * getStaticProps and getStaticPaths.
 */
export function getIntegrations(): Integration[] {
  const entries: Omit<Integration, "hasPage">[] = JSON.parse(
    fs.readFileSync(path.join(INTEGRATIONS_DIR, "index.json"), "utf8")
  );

  return entries.map((integration) => ({
    ...integration,
    hasPage: fs.existsSync(
      path.join(INTEGRATIONS_DIR, `${integration.slug}.md`)
    ),
  }));
}

export function getIntegrationBody(slug: string) {
  return fs.readFileSync(path.join(INTEGRATIONS_DIR, `${slug}.md`), "utf8");
}
