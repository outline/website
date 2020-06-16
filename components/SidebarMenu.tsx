import * as React from "react";
import { spacing } from "theme";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function SidebarMenu({ title, children }: Props) {
  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>{children}</ul>
      <style jsx>
        {`
          ul {
            margin: 0 0 2.5em;
            padding: 0;
          }

          ul li {
            list-style: none;
            padding: 0;
            margin: ${spacing.medium} 0;
          }

          ul li a {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
