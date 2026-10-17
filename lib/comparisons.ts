/**
 * Shared types for the competitor comparison pages. Safe to import from
 * components: anything that touches the filesystem lives in
 * lib/comparisons.server.ts instead.
 */

/** An entry in comparisons/index.json, in the order pages are listed. */
export type ComparisonSummary = {
  slug: string;
  competitor: string;
  /** Used as the meta description and in llms.txt. */
  description: string;
};

/**
 * true and false render as a check or a cross, a string is shown as written,
 * for example "Enterprise-only".
 */
export type ComparisonValue = boolean | string;

export type ComparisonRow = {
  feature: string;
  outline: ComparisonValue;
  competitor: ComparisonValue;
};

export type ComparisonGroup = {
  /** Heading for the group, omitted when the table has a single group. */
  title?: string;
  rows: ComparisonRow[];
};

export type ComparisonFeature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ComparisonHighlight = {
  title: string;
  description: string;
};

/**
 * Content for a page at /compare/[slug], from comparisons/[slug].json. Every
 * section other than the hero, table and closing is optional and is left out
 * of the page when missing.
 */
export type Comparison = ComparisonSummary & {
  pageTitle: string;
  title: string;
  intro: string;
  /** Short reasons Outline goes further, shown directly below the hero. */
  highlights?: ComparisonHighlight[];
  features?: ComparisonFeature[];
  table: ComparisonGroup[];
  migration?: {
    title: string;
    description: string;
    href?: string;
    linkText?: string;
  };
  pricing?: {
    title: string;
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  faq?: {
    question: string;
    answer: string;
  }[];
  closing: string;
  /** ISO date the comparison was last checked against the competitor. */
  updatedAt?: string;
};

export const pageHref = (comparison: Pick<ComparisonSummary, "slug">) =>
  `/compare/${comparison.slug}`;
