import { map, groupBy } from "lodash";
import fs from "fs";
import Link from "next/link";
import { format } from "date-fns";
import { getPosts } from "lib/posts";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Layout from "components/Layout";
import Markdown from "components/Markdown";
import Metadata from "components/PostMetadata";
import { colors } from "theme";
import { generateRSS } from "lib/rss";

export default function Changelog({ posts }) {
  const months = groupBy(posts, (post) =>
    format(new Date(post.date), "MMMM, yyyy")
  );
  const years = groupBy(months, (posts) =>
    format(new Date(posts[0].date), "yyyy")
  );

  const sortedYears = Object.keys(years).reverse();

  return (
    <Layout
      title="Changelog"
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
        <>
          {map(sortedYears, (year) => (
            <SidebarMenu title={year} key={year}>
              {years[year].map((posts) => {
                const post = posts[0];
                return (
                  <SidebarMenuItem
                    key={post.slug}
                    href={`#${format(new Date(post.date), "yyyy-MMMM")}`}
                  >
                    {format(new Date(post.date), "MMMM")}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          ))}
        </>
      }
    >
      {posts.map((post, index) => (
        <article key={post.slug} className={index < 20 ? "" : "compact"}>
          <a id={format(new Date(post.date), "yyyy-MMMM")} />
          <a id={post.slug} />
          <h2>
            <Link href={`/changelog/${post.slug}`}>
              <a className="heading">{post.title}</a>
            </Link>
          </h2>
          <Metadata tag={post.tag} date={post.date} />
          {index < 20 && <Markdown source={post.content} />}
        </article>
      ))}
      <style jsx>
        {`
          .heading {
            color: ${colors.text};
          }

          .heading:hover {
            text-decoration: underline;
          }

          article {
            padding: 4em 0;
            border-bottom: 1px solid ${colors.greyMid};
          }

          article:first-child {
            padding-top: 0;
          }

          article.compact {
            padding: 0;
            border-bottom: 0;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const rss = generateRSS(posts);

  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      posts,
    },
  };
}
