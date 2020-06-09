import Card from "components/Card";
import Hero from "components/Hero";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";

export default function Integrations() {
  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      header={
        <div className="pure-grid squiggles">
          <div className="pure-u-1 pure-u-md-2-5">
            <h1>Integrations</h1>
            <Hero>
              Outline is extensible and designed to integrate with your existing
              workflow and tools. If you can’t find the integration you’re
              after, reach out – we are adding new applications all the time.
            </Hero>
          </div>
          <div className="pure-u-1 pure-u-md-3-5">
            <img src="/images/interface.png" />
          </div>
        </div>
      }
    >
      <div className="pure-grid container">
        <div className="pure-u-1 pure-u-md-1-5">
          <IntegrationsMenu />
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <h2>Featured</h2>

          <div className="pure-u-1 pure-u-md-1-2">
            <Card
              title="Slack"
              description="Deeply integrated into Slack. Use /slash commands to search for documentation in Outline without ever leaving chat."
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          img {
            height: 200px;
            float: right;
            opacity: 0.95;
          }
        `}
      </style>
    </Layout>
  );
}
