import Head from "next/head";
import { darken } from "polished";
import Link from "next/link";
import IntegrationIcon from "components/IntegrationIcon";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";
import Markdown from "components/Markdown";
import { APP_URL, deploymentLabel, Integration } from "lib/integrations";
import { getIntegrationBody, getIntegrations } from "lib/integrations.server";
import { colors, spacing } from "theme";

type Props = {
  integration: Integration;
  integrations: Integration[];
  body: string;
};

export default function IntegrationPage({
  integration,
  integrations,
  body,
}: Props) {
  const { slug, name, description, type, url, settings, docs } = integration;
  const isEmbed = type === "embed";
  const host = new URL(url).hostname.replace(/^www\./, "");
  const deployment = deploymentLabel(integration);

  return (
    <Layout
      pageTitle={`${name} ${isEmbed ? "Embed" : "Integration"}`}
      description={description}
      background="#F4F7FA"
      sidebar={<IntegrationsMenu integrations={integrations} />}
      header={
        <div className="integration-header">
          <Link href="/integrations" legacyBehavior>
            <a className="breadcrumb">Integrations</a>
          </Link>
          <div className="heading">
            <IntegrationIcon integration={integration} size={64} />
            <div>
              <h1>{name}</h1>
              <p className="tagline">{description}</p>
            </div>
          </div>
          <div className="actions">
            {settings && (
              <a className="badge primary" href={`${APP_URL}${settings}`}>
                Configure in Outline
              </a>
            )}
            {isEmbed && <span className="badge">No setup required</span>}
            {deployment && <span className="badge">{deployment}</span>}
            {docs && (
              <a
                className="external"
                href={docs}
                target="_blank"
                rel="noopener noreferrer"
              >
                Self-hosting guide
              </a>
            )}
            <a
              className="external"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {host}
            </a>
          </div>
          <style jsx>{`
            .integration-header {
              padding-top: ${spacing.medium};
            }

            .breadcrumb {
              display: inline-block;
              margin-bottom: ${spacing.medium};
              font-size: 14px;
              font-weight: 500;
              color: ${colors.textSecondary};
            }

            .breadcrumb::before {
              content: "‹ ";
            }

            .breadcrumb:hover {
              color: ${colors.text};
            }

            .heading {
              display: flex;
              align-items: center;
              gap: ${spacing.large};
              margin-bottom: ${spacing.large};
            }

            .heading h1 {
              margin: 0 0 ${spacing.small};
              font-size: 2.5em;
            }

            .tagline {
              max-width: 640px;
              margin: 0;
              font-size: 1.2em;
              line-height: 1.4;
            }

            .actions {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              gap: ${spacing.medium} ${spacing.large};
            }

            .badge {
              display: inline-block;
              padding: 6px 12px;
              border-radius: 6px;
              background: ${colors.white};
              border: 1px solid ${colors.greyDark};
              font-size: 14px;
              font-weight: 500;
              line-height: 1.5;
              color: ${colors.text};
            }

            .badge.primary {
              background: ${colors.primary};
              border-color: ${colors.primary};
              color: ${colors.white};
              transition: background 150ms ease;
            }

            .badge.primary:hover {
              background: ${darken(0.05, colors.primary)};
            }

            .external {
              font-size: 15px;
              font-weight: 500;
              color: ${colors.textSecondary};
            }

            .external:hover {
              color: ${colors.text};
            }

            @media (max-width: 48em) {
              .heading {
                flex-direction: column;
                align-items: flex-start;
                gap: ${spacing.medium};
              }
            }
          `}</style>
        </div>
      }
    >
      <Head>
        <link
          rel="alternate"
          type="text/markdown"
          title={`${name} integration as markdown`}
          href={`/integrations/${slug}.md`}
        />
      </Head>
      <Markdown children={body} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getIntegrations()
    .filter((integration) => integration.hasPage)
    .map((integration) => `/integrations/${integration.slug}`);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const integrations = getIntegrations();
  const slug = context.params.slug;

  return {
    props: {
      integration: integrations.find((item) => item.slug === slug),
      integrations,
      body: getIntegrationBody(slug),
    },
  };
}
