import { getPost, getPosts } from "lib/posts";
import Markdown from "components/Markdown";
import Layout from "components/Layout";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Metadata from "components/PostMetadata";
import Head from "next/head";

export default function Changelog({ title, date, tag, image, content }) {
  return (
    <Layout
      title="Changelog"
      pageTitle={`${title} – Changelog`}
      background="#F4F7FA"
      hero={
        <>
          New updates and improvements to Outline.
          <br />
          <a href="https://twitter.com/intent/follow?screen_name=getoutline">
            Follow us on twitter
          </a>{" "}
          to find out when features are released.
        </>
      }
      sidebar={
        <SidebarMenu>
          <SidebarMenuItem href="/changelog">
            &larr; Back to all
          </SidebarMenuItem>
        </SidebarMenu>
      }
    >
      <Head>
        {image && <meta key="og:image" property="og:image" content={image} />}
      </Head>
      <h2>{title}</h2>
      <Metadata tag={tag} date={date} />
      <Markdown source={content} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getPosts();
  const paths = posts.map((post) => `/changelog/${post.slug}`);

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = getPost(`${context.params.slug}.md`);

  return {
    props: {
      ...post,
    },
  };
}
