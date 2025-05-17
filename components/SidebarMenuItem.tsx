import Link from "next/link";
import { spacing } from "theme";

export default function SidebarMenuItem({ children, href }) {
  return (
    <>
      <li className="integration">
        <Link href={href} className="sidebar-menu-item" legacyBehavior>
          {children}
        </Link>
      </li>
      <style jsx>
        {`
          li {
            list-style: none;
            padding: 0;
            margin: ${spacing.medium} 0;
          }

          li :global(.sidebar-menu-item) {
            display: flex;
            align-items: center;
            color: inherit;
          }
        `}
      </style>
    </>
  );
}
