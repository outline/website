import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { map, sortBy, groupBy } from "lodash";
import { format } from "date-fns";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Layout from "components/Layout";
import Markdown from "components/Markdown";
import { typography, colors } from "theme";

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
          New updates and improvements to Outline.{" "}
          <a href="https://twitter.com/outlinewiki">Follow us on twitter</a> to
          find out when features are released.
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
                    href={`#${format(
                      new Date(post.date),
                      "yyyy-MMMM"
                    )}`}
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
      {posts.map((post) => (
        <article key={post.slug}>
          <a id={format(new Date(post.date), "yyyy-MMMM")} />
          <a id={post.title} />
          <h2>{post.title}</h2>
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM do, yyyy")}
          </time>
          <Markdown source={post.content} />
        </article>
      ))}
      <style jsx>
        {`
          article {
            margin: 0 0 8em;
          }

          time {
            display: block;
            font-family: ${typography.fontFamilyMono};
            color: ${colors.textSecondary};
            font-size: 0.8em;
            margin-top: -1.5em;
            margin-bottom: 2em;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"));
  let posts = [];

  for (const fileName of fileNames) {
    if ([".DS_Store", "..", "."].includes(fileName)) {
      continue;
    }

    const { data, content } = matter(
      fs.readFileSync(path.join(process.cwd(), "posts", fileName), "utf8").trim()
    );

    const title = data.title;
    const slug = data.slug;
    const date = data.date.toISOString();
    posts.push({ title, slug, date, content });
  }

  return {
    props: {
      posts: sortBy(posts, post => post.date).reverse()
    },
  };
}
