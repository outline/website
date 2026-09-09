import * as React from "react";
import { spacing } from "theme";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import IntegrationIcon from "components/IntegrationIcon";
import {
  categoryId,
  groupByCategory,
  Integration,
  pageHref,
} from "lib/integrations";

type Props = {
  integrations: Integration[];
};

/**
 * Sidebar for the integrations directory. Integrations are listed by category
 * with a link to each page, embeds are summarised as links to their section on
 * the directory since there are too many to list individually.
 */
export default function IntegrationsMenu({ integrations }: Props) {
  const groups = groupByCategory(
    integrations.filter((item) => item.type === "integration")
  );
  const embedGroups = groupByCategory(
    integrations.filter((item) => item.type === "embed")
  );

  return (
    <>
      {groups.map(({ category, items }) => (
        <SidebarMenu title={category} key={category}>
          {items.map((item) => (
            <SidebarMenuItem key={item.slug} href={pageHref(item)}>
              <span className="icon">
                <IntegrationIcon integration={item} size={20} />
              </span>
              {item.name}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      ))}

      <SidebarMenu title="Embeds">
        {embedGroups.map(({ category, items }) => (
          <SidebarMenuItem
            key={category}
            href={`/integrations#${categoryId("embed", category)}`}
          >
            {category}
            <span className="count">{items.length}</span>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <style jsx>
        {`
          .icon {
            display: inline-flex;
            margin-right: ${spacing.small};
          }

          .count {
            margin-left: ${spacing.small};
            font-size: 12px;
            opacity: 0.5;
          }
        `}
      </style>
    </>
  );
}
