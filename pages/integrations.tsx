import Layout from "components/Layout";

export default function Integrations() {
  return (
    <Layout
      title="Integrations"
      header={
        <>
          <h1>Integrations</h1>
          <p>
            Outline is extensible and designed to integrate with your existing
            workflow and tools.
          </p>
        </>
      }
    >
      <div className="pure-grid container">
        <div className="pure-u-1 pure-u-md-1-5">
          <h3>Design</h3>
          <p>menu</p>

          <h3>Collaborate</h3>
          <p>menu</p>

          <h3>Develop</h3>
          <p>menu</p>
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <p>content</p>
        </div>
      </div>
    </Layout>
  );
}
