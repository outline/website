import Card from "components/Card";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";

export default function Integrations() {
  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      hero="Outline is extensible and designed to integrate with your existing
      workflow and tools. If you can’t find the integration you’re
      after, reach out – we are adding new applications all the time."
      sidebar={<IntegrationsMenu />}
    >
      <h2>Featured</h2>
      <div className="pure-g cards">
        <div className="pure-u-1 pure-u-md-1-2">
          <Card
            title="Slack"
            description="Deeply integrated into Slack. Use /slash commands to search for documentation in Outline without ever leaving chat."
          />
        </div>
      </div>
      <style jsx>
        {`
          .cards {
            margin: 0 -1rem;
          }
        `}
      </style>
    </Layout>
  );
}
