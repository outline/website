import * as React from "react";
import { groupBy } from "lodash";
import { spacing } from "theme";
import content from "integrations/index.json";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";

export default function IntegrationsMenu() {
  return (
    <>
      {Object.entries(groupBy(content, "category")).map(
        ([category, items]: [string, Record<string, any>]) => {
          return (
            <SidebarMenu title={category} key={category}>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.slug}
                  href={`/integrations/${item.slug}`}
                >
                  <img
                    className="integration-icon"
                    src={`/images/integrations/${item.slug}.png`}
                  />
                  {item.name}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          );
        }
      )}

      <style jsx>
        {`
          .integration-icon {
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
