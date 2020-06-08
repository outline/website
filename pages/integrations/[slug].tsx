import { find } from "lodash";
import content from "data/integrations.json";
import Hero from "components/Hero";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";

export default function Integration({ name, description }) {
  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      header={
        <>
          <h1>{name} Integration</h1>
          <p>{description}</p>
        </>
      }
    >
      <div className="pure-grid container">
        <div className="pure-u-1 pure-u-md-1-5">
          <IntegrationsMenu />
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <Hero>
            Some description here.
          </Hero>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = content.map(integration => `/integrations/${integration.slug}`)

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  return {
    props: find(content, { slug: context.params.slug }),
  }
}