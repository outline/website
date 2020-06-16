import Link from "next/link";
import { ExpandedIcon } from "outline-icons";
import { spacing } from "theme";

export default function HeaderNavigation() {
  return (
    <nav role="navigation">
      <ul>
        <li>
          <a className="menu-with-icon" aria-haspopup="true">
            Product <ExpandedIcon color="currentColor" />
          </a>
          <ul>
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
                <a>Developers</a>
              </Link>
            </li>
            <li>
              <Link href="/changelog">
                <a>Changelog</a>
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
          <a className="menu-with-icon" aria-haspopup="true">
            Community <ExpandedIcon color="currentColor" />
          </a>
          <ul>
            <li>
              <a href="mailto:hello@getoutline.com">Contact Us</a>
            </li>
            <li>
              <a href="https://github.com/outline" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/outline/outline/discussions"
                target="_blank"
              >
                Discuss
              </a>
            </li>
            <li>
              <a href="https://twitter.com/outlinewiki" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
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
            margin: 0 0 0 ${spacing.medium};
            color: rgba(0, 0, 0, 0.75);
            text-decoration: none;
            white-space: nowrap;
            min-height: 40px;
          }

          li ul li a {
            display: block;
            margin: 0;
          }

          li:hover {
            cursor: pointer;
          }

          li:hover > a {
            background: rgba(255, 255, 255, 0.75);
          }

          ul li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            transition: all 0.5s ease;
            margin-top: 0;
            margin-left: ${spacing.medium};
            left: 0;
            display: none;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(10px);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            min-width: 124px;
            z-index: 1;
          }

          ul li ul a:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
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
