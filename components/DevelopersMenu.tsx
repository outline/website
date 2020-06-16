import * as React from "react";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";

const resources = [
  "Auth",
  "Document",
  "Collection",
  "Events",
  "Group",
  "User",
  "Share",
  "Team",
  "View",
];

export default function DevelopersMenu() {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem href={`/developers`}>Introduction</SidebarMenuItem>
        <SidebarMenuItem href={`/developers#requests`}>
          Making requests
            </SidebarMenuItem>
        <SidebarMenuItem href={`/developers#authentication`}>
          Authentication
            </SidebarMenuItem>
        <SidebarMenuItem href={`/developers#errors`}>
          Errors
            </SidebarMenuItem>
        <SidebarMenuItem href={`/developers#pagination`}>
          Pagination
            </SidebarMenuItem>
        <SidebarMenuItem href={`/developers#policies`}>
          Policies
            </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu title="API Resources">
        {resources.map((page) => (
          <SidebarMenuItem href={`/developers/resources#${page}`}>
            {page}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
