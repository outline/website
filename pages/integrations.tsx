import * as React from "react";
import IntegrationCard from "components/IntegrationCard";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";
import {
  categoryId,
  Deployment,
  groupByCategory,
  Integration,
  IntegrationType,
  supportsDeployment,
} from "lib/integrations";
import { getIntegrations } from "lib/integrations.server";
import { colors, spacing } from "theme";

type Props = {
  integrations: Integration[];
};

const deploymentFilters: { value: Deployment | ""; label: string }[] = [
  { value: "", label: "All" },
  { value: "cloud", label: "Cloud" },
  { value: "self-hosted", label: "Self-hosted" },
];

const sections: {
  type: IntegrationType;
  title: string;
  lead: string;
}[] = [
  {
    type: "integration",
    title: "Integrations",
    lead:
      "Connect Outline to the tools your team already uses for sign in, notifications, live previews, analytics, and automation.",
  },
  {
    type: "embed",
    title: "Embeds",
    lead:
      "Paste a link from any of these services into a document and it becomes a live, interactive embed. No setup or configuration required.",
  },
];

export default function Integrations({ integrations }: Props) {
  const [query, setQuery] = React.useState("");
  const [deployment, setDeployment] = React.useState<Deployment | "">("");
  const normalizedQuery = query.toLowerCase().trim();

  const matches = (integration: Integration) =>
    (!deployment || supportsDeployment(integration, deployment)) &&
    (!normalizedQuery ||
      [
        integration.name,
        integration.description,
        integration.category,
      ].some((text) => text.toLowerCase().includes(normalizedQuery)));

  const results = integrations.filter(matches);

  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      description="Outline connects with the tools your team already uses, from single sign-on and Slack to GitHub, Linear, Figma, Zapier, and over 50 embeddable services."
      hero="Outline is extensible and designed to integrate with your existing workflows and tools."
      sidebar={<IntegrationsMenu integrations={integrations} />}
    >
      <div className="filters">
        <input
          type="search"
          value={query}
          placeholder="Filter…"
          aria-label="Filter integrations"
          onChange={(ev) => setQuery(ev.currentTarget.value)}
          className="search"
        />
        <div
          className="segmented"
          role="group"
          aria-label="Filter by deployment"
        >
          {deploymentFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={filter.value === deployment ? "selected" : undefined}
              onClick={() => setDeployment(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {sections.map((section) => {
        const groups = groupByCategory(
          results.filter((item) => item.type === section.type)
        );

        if (groups.length === 0) {
          return null;
        }

        return (
          <section key={section.type} id={section.type}>
            <h2>{section.title}</h2>
            <p className="lead">{section.lead}</p>

            {groups.map(({ category, items }) => (
              <div key={category} id={categoryId(section.type, category)}>
                <h3>{category}</h3>
                <div
                  className={section.type === "embed" ? "grid compact" : "grid"}
                >
                  {items.map((integration) => (
                    <IntegrationCard
                      key={integration.slug}
                      integration={integration}
                      compact={section.type === "embed"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      })}

      {results.length === 0 && (
        <div className="empty">
          <h3>
            No integrations match
            {normalizedQuery ? ` “${query}”` : " this filter"}
          </h3>
          <p>
            Know a tool we should support?{" "}
            <a href="mailto:hello@getoutline.com?subject=Integration%20Idea">
              Let us know
            </a>{" "}
            and we'll look into it.
          </p>
        </div>
      )}

      <style jsx>
        {`
          .filters {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: ${spacing.medium};
            position: sticky;
            top: 0;
            z-index: 2;
            padding: ${spacing.medium} 0;
            margin: -${spacing.medium} 0 0;
            background: ${colors.white};
          }

          .segmented {
            display: inline-flex;
            padding: 3px;
            border: 1px solid ${colors.greyDark};
            border-radius: 6px;
            background: ${colors.white};
          }

          .segmented button {
            padding: 0 12px;
            height: 32px;
            border: 0;
            border-radius: 4px;
            background: transparent;
            color: ${colors.textSecondary};
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background 150ms ease, color 150ms ease;
          }

          .segmented button:hover {
            color: ${colors.text};
          }

          .segmented button.selected {
            background: ${colors.lightGrey};
            color: ${colors.text};
          }

          .search {
            flex: 1;
            min-width: 200px;
            max-width: 360px;
            height: 40px;
            padding: 0 ${spacing.medium};
            border: 1px solid ${colors.greyDark};
            border-radius: 4px;
            background: ${colors.white};
            font-size: 15px;
            -webkit-appearance: none;
          }

          .search:focus {
            outline: none;
            border-color: ${colors.primary};
            box-shadow: 0 0 0 2px rgba(49, 65, 245, 0.2);
          }

          section {
            margin-bottom: ${spacing.xlarge};
          }

          h2 {
            margin: ${spacing.large} 0 ${spacing.small};
            scroll-margin-top: 80px;
          }

          h3 {
            margin: ${spacing.large} 0 ${spacing.medium};
            font-size: 1.15em;
            scroll-margin-top: 80px;
          }

          .lead {
            max-width: 640px;
            margin: 0;
            font-size: 1.1em;
            color: ${colors.textSecondary};
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: ${spacing.medium};
          }

          .grid.compact {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 12px;
          }

          .empty {
            padding: ${spacing.xlarge} 0;
            color: ${colors.textSecondary};
          }

          .empty h3 {
            margin: 0 0 ${spacing.small};
            color: ${colors.text};
          }

          @media (max-width: 48em) {
            .filters {
              position: static;
              margin-top: 0;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      integrations: getIntegrations(),
    },
  };
}
