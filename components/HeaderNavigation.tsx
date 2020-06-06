import Link from "next/link";
import { ExpandedIcon } from "outline-icons";

export default function HeaderNavigation() {
  return (
    <nav role="navigation">
      <ul>
        <li>
          <Link href="/features">
            <a className="menu-with-icon" aria-haspopup="true">
              Product <ExpandedIcon color="currentColor" />
            </a>
          </Link>
          <ul className="dropdown">
            <li>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/integrations">
                <a>Integrations</a>
              </Link>
            </li>
            <li>
              <Link href="/developers">
                <a>API</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a>Company</a>
          </Link>
        </li>
        <li>
          <Link href="//app.getoutline.com">
            <a>Log in | Sign up</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: flex-end;
          }

          ul {
            display: flex;
            margin: 0;
            padding: 0;
          }

          li {
            display: block;
            transition-duration: 0.5s;
            position: relative;
          }

          li a {
            display: flex;
            align-items: center;
            padding: 8px;
            margin: 0 16px;
            color: rgba(0, 0, 0, 0.75);
            text-decoration: none;
            white-space: nowrap;
            min-height: 40px;
          }

          li ul li a {
            display: block;
          }

          li:hover {
            cursor: pointer;
          }

          ul li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            transition: all 0.5s ease;
            margin-top: 0.1rem;
            left: 0;
            display: none;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(10px);
          }

          ul li:hover > ul,
          ul li:focus-within > ul,
          ul li ul:hover,
          ul li ul:focus {
            visibility: visible;
            opacity: 1;
            display: block;
          }

          ul li ul li {
            clear: both;
            width: 100%;
          }
        `}
      </style>
    </nav>
  );
}
