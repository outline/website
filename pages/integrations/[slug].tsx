import fs from "fs";
import path from "path";
import { find } from "lodash";
import content from "integrations/index.json";
import Markdown from "components/Markdown";
import IntegrationsMenu from "components/IntegrationsMenu";
import Layout from "components/Layout";

export default function Integration({ name, body, description }) {
  return (
    <Layout
      title={`${name} Integration`}
      background="#F4F7FA"
      hero={description}
      sidebar={<IntegrationsMenu />}
    >
      <Markdown source={body} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = content.map(
    (integration) => `/integrations/${integration.slug}`
  );

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const filePath = path.join(
    process.cwd(),
    "integrations",
    `${context.params.slug}.md`
  );
  const body = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      ...find(content, { slug: context.params.slug }),
      body,
    },
  };
}
