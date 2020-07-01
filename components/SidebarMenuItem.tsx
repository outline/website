import Link from "next/link";
import { spacing } from "theme";

export default function SidebarMenuItem({ children, href }) {
  return (
    <>
      <li className="integration">
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </li>

      <style jsx>
        {`
          li {
            list-style: none;
            padding: 0;
            margin: ${spacing.medium} 0;
          }

          li a {
            display: flex;
            align-items: center;
            color: inherit;
          }
        `}
      </style>
    </>
  );
}
