import Hero from "components/Hero";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";

export default function Integrations() {
  let lastCategory: string;

  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      header={
        <>
          <h1>Integrations</h1>
        </>
      }
    >
      <div className="pure-grid container">
        <div className="pure-u-1 pure-u-md-1-5">
          <IntegrationsMenu />
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <Hero>
            Outline is extensible and designed to integrate with your existing
            workflow and tools. If you can’t find the integration you’re after,
            reach out – we are adding new ones all the time.
          </Hero>
        </div>
      </div>
    </Layout>
  );
}
