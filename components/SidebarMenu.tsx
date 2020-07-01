import * as React from "react";
import { spacing } from "theme";
import classnames from "classnames";
import { ExpandedIcon } from "outline-icons";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function SidebarMenu({ title, children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {title && (
        <h3 className="title">
          <a onClick={() => setIsOpen(!isOpen)}>
            {title}{" "}
            <span className={classnames("toggle", { open: isOpen })}>
              <ExpandedIcon color="currentColor" />
            </span>
          </a>
        </h3>
      )}
      <ul className={isOpen && "open"}>{children}</ul>
      <style jsx>
        {`
          ul {
            margin: 0 0 2.5em;
            padding: 0;
          }

          ul.open {
            display: block;
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

          .title a {
            display: flex;
            align-items: center;
            color: inherit;
          }

          .toggle {
            display: none;
            transform: rotate(270deg);
            width: 24px;
            height: 24px;
          }

          @media (max-width: 48em) {
            ul {
              display: none;
            }

            .toggle {
              display: block;
            }

            .toggle.open {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </>
  );
}
