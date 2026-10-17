import fs from "fs";
import path from "path";
import type { Comparison, ComparisonSummary } from "./comparisons";

const COMPARISONS_DIR = path.join(process.cwd(), "comparisons");

/**
 * Every comparison page, in listing order. Only for use in getStaticProps and
 * getStaticPaths.
 */
export function getComparisons(): ComparisonSummary[] {
  return JSON.parse(
    fs.readFileSync(path.join(COMPARISONS_DIR, "index.json"), "utf8")
  );
}

export function getComparison(slug: string): Comparison {
  const summary = getComparisons().find((item) => item.slug === slug);
  const content = JSON.parse(
    fs.readFileSync(path.join(COMPARISONS_DIR, `${slug}.json`), "utf8")
  );

  return { ...summary, ...content };
}
