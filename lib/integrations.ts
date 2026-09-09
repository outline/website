/**
 * Shared types and helpers for the integrations directory. Safe to import from
 * components: anything that touches the filesystem lives in
 * lib/integrations.server.ts instead.
 */

export const APP_URL = "https://app.getoutline.com";

export type IntegrationType = "integration" | "embed";

export type Deployment = "cloud" | "self-hosted";

export type Integration = {
  slug: string;
  name: string;
  url: string;
  /**
   * "integration" for services Outline talks to (authentication, link
   * unfurling, notifications, analytics, import), "embed" for providers whose
   * links are converted into an interactive embed inside the editor.
   */
  type: IntegrationType;
  category: string;
  description: string;
  /**
   * Where the integration is available. Omitted when it works on both Outline
   * Cloud and self-hosted installations.
   */
  deployments?: Deployment[];
  /** Path within the app where the integration is configured, if any. */
  settings?: string;
  /** Self-hosting documentation for configuring the integration, if any. */
  docs?: string;
  /** Icon filename in /images/integrations, defaults to `${slug}.png`. */
  icon?: string;
  /** Whether a dedicated page exists at /integrations/[slug]. */
  hasPage: boolean;
};

/** Whether the integration is available on the given kind of deployment. */
export function supportsDeployment(
  integration: Pick<Integration, "deployments">,
  deployment: Deployment
) {
  return (
    !integration.deployments || integration.deployments.includes(deployment)
  );
}

/**
 * Label for the deployment tag, or undefined when the integration is available
 * everywhere and needs no tag.
 */
export function deploymentLabel(integration: Pick<Integration, "deployments">) {
  const { deployments } = integration;

  if (!deployments || deployments.length !== 1) {
    return undefined;
  }

  return deployments[0] === "cloud" ? "Cloud" : "Self-hosted";
}

/** Anchor id for a category heading on the /integrations page. */
export function categoryId(type: IntegrationType, category: string) {
  return `${type}-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function iconSrc(integration: Pick<Integration, "slug" | "icon">) {
  return `/images/integrations/${
    integration.icon ?? `${integration.slug}.png`
  }`;
}

export function pageHref(integration: Pick<Integration, "slug">) {
  return `/integrations/${integration.slug}`;
}

/**
 * Groups integrations by category, preserving the order categories first
 * appear in the source list.
 */
export function groupByCategory(integrations: Integration[]) {
  const groups = new Map<string, Integration[]>();

  for (const integration of integrations) {
    const group = groups.get(integration.category) ?? [];
    group.push(integration);
    groups.set(integration.category, group);
  }

  return Array.from(groups, ([category, items]) => ({ category, items }));
}
