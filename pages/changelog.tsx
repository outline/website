import fetch from "isomorphic-fetch";
import { map, groupBy } from "lodash";
import { format } from "date-fns";
import Hero from "components/Hero";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Layout from "components/Layout";
import Markdown from "components/Markdown";

export default function Changelog({ releases }) {
  const months = groupBy(releases, release =>
    format(new Date(release.created_at), 'MMMM, yyyy')
  );
  const years = groupBy(months, (releases) =>
    format(new Date(releases[0].created_at), 'yyyy')
  );

  const sortedYears = Object.keys(years).reverse();

  return (
    <Layout
      title="Integrations"
      background="#F4F7FA"
      header={
        <div className="pure-grid squiggles">
          <div className="pure-u-1 pure-u-md-2-5">
            <h1>Changelog</h1>
            <Hero>
              New updates and improvements to Outline.{" "}
              <a href="https://twitter.com/outlinewiki">Follow us on twitter</a>{" "}
              to find out when features are released.
            </Hero>
          </div>
          <div className="pure-u-1 pure-u-md-3-5">
            <img src="/images/flower.png" />
          </div>
        </div>
      }
    >
      <div className="pure-grid container">
        <div className="pure-u-1 pure-u-md-1-5 sticky">
          {map(sortedYears, (year) => (
            <SidebarMenu title={year} key={year}>
              {years[year].map((releases) => {
                const release = releases[0]
                return (
                  <SidebarMenuItem key={release.id} href={`#${format(new Date(release.created_at), 'yyyy-MMMM')}`}>
                    {format(new Date(release.created_at), 'MMMM')}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          ))}

        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          {releases.map((release) => (
            <article key={release.id}>
              <a id={format(new Date(release.created_at), 'yyyy-MMMM')} />
              <a id={release.name} />
              <h2>{release.name}</h2>
              <time dateTime={release.created_at}>
                {format(new Date(release.created_at), 'MMMM do, yyyy')}
              </time>
              <Markdown source={release.body} />
            </article>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          img {
            height: 200px;
            float: right;
            opacity: 0.95;
          }

          article {
            margin: 0 0 8em;
          }

          time {
            display: block;
            font-family: "Roboto Mono", "Menlo", monospace;
            font-size: 0.8em;
            margin-top: -1.5em;
            margin-bottom: 2em;
          }

          .sticky {
            position: sticky;
            top: 1em;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/repos/outline/outline/releases"
  );
  const releases = await res.json();

  return {
    props: {
      releases,
    },
  };
}
