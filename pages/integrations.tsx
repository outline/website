import * as React from "react";
import { filter, find } from "lodash";
import Card from "components/Card";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";
import content from "integrations/index.json";
import { colors, spacing } from "theme";

export default function Integrations() {
  const [query, setQuery] = React.useState("");

  const normalizedQuery = query.toLowerCase().trim();
  const results = filter(
    content,
    (integration) =>
      integration.slug.toLowerCase().includes(normalizedQuery) ||
      integration.description.toLowerCase().includes(normalizedQuery)
  );

  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      hero="Outline is extensible and designed to integrate with your existing
      workflows and tools."
      sidebar={<IntegrationsMenu />}
    >
      <input
        type="search"
        value={query}
        placeholder="Search…"
        onChange={(ev) => setQuery(ev.currentTarget.value)}
        className="search"
      />

      {query ? (
        <>
          <h2>Results</h2>
          <div className="pure-g cards">
            {query &&
              results.map((integration) => (
                <div className="pure-u-1 pure-u-md-1-2" key={integration.slug}>
                  <Card
                    title={
                      <div>
                        <img
                          className="integration-icon"
                          src={`/images/integrations/${integration.slug}.png`}
                        />
                        <div>{integration.name}</div>
                      </div>
                    }
                    description={integration.description}
                    href={`/integrations/${integration.slug}`}
                  />
                </div>
              ))}
            {results.length === 0 && (
              <div className="pure-u-1 pure-u-md-1-2">
                <Card
                  title="Not found it?"
                  href="mailto:hello@getoutline.com?subject=Integration%20Idea"
                  description={
                    <div>
                      <p>
                        Let us know which integration we are missing that you
                        would like to see…{" "}
                      </p>
                      <br />
                      <p>Email hello@getoutline.com with your suggestions</p>
                    </div>
                  }
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <h2>Featured</h2>
          <div className="pure-g cards">
            {[
              "slack",
              "google-docs",
              "alfred",
              "figma",
              "zapier",
              "airtable",
            ].map((slug) => {
              const integration = find(content, { slug });

              return (
                <div className="pure-u-1 pure-u-md-1-2" key={slug}>
                  <Card
                    title={
                      <div>
                        <img
                          className="integration-icon"
                          src={`/images/integrations/${integration.slug}.png`}
                        />
                        <div>{integration.name}</div>
                      </div>
                    }
                    description={
                      <>{integration.summary || integration.description}.</>
                    }
                    href={`/integrations/${integration.slug}`}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}

      <style jsx>
        {`
          .search {
            width: 100%;
            height: 32px;
            border-radius: 4px;
            border: 0;
            padding: 24px ${spacing.medium};
            background: ${colors.lightGrey};
            box-shadow: 0 0 0 2px ${colors.greyDark};
            font-size: 16px;
            margin: 16px 0;
          }

          .search:active,
          .search:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${colors.primary};
          }

          .cards {
            margin: 0 -1rem;
          }

          .integration-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 1em;
          }
        `}
      </style>
    </Layout>
  );
}
