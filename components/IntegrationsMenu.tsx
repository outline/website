import * as React from "react";
import Link from "next/link";
import { groupBy } from "lodash";
import { spacing } from "theme";
import content from "data/integrations.json";

export default function IntegrationsMenu() {
  return (
    <>
      {Object.entries(groupBy(content, "category")).map(
        ([category, items]: [string, Record<string, any>]) => {
          return (
            <React.Fragment key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li className="integration" key={item.slug}>
                    <Link href={`/integrations/${item.slug}`}>
                      <a>
                        <img src={`/images/integrations/${item.slug}.png`} />
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          );
        }
      )}

      <style jsx>
        {`
          ul {
            margin: 0 0 2.5em;
            padding: 0;
          }

          .integration {
            list-style: none;
            padding: 0;
            margin: ${spacing.medium} 0;
          }

          .integration a {
            display: flex;
            align-items: center;
          }

          .integration img {
            width: 24px;
            height: 24px;
            margin-right: ${spacing.small};
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      content,
    },
  };
}
