import Link from "next/link";
import Logo from "components/Logo";
import { spacing } from "theme";

export default function Footer() {
  return (
    <footer>
      <div className="pure-g container">
        <div className="pure-u-1 pure-u-md-2-5">
          <Logo />
        </div>
        <div role="navigation" className="pure-u-1 pure-u-md-1-5">
          <h3>Product</h3>
          <ul>
            <li>
              <Link href="/changelog">
                <a>Changelog</a>
              </Link>
            </li>
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
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1 pure-u-md-1-5">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="mailto:hello@getoutline.com">Contact Us</a>
            </li>
            <li>
              <a href="https://github.com/outline" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://github.com/outline/outline/discussions" target="_blank">Discuss</a>
            </li>
            <li>
              <a href="https://twitter.com/outlinewiki" target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1 pure-u-md-1-5">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} General Outline, Inc.</p>
        </div>
      </div>
      <style jsx>
        {`
          .copy {
            font-size: 14px;
            background: #F2F2F2;
            padding: 2px 4px;
            margin-top: ${spacing.large};
          }

          h3 {
            margin-top: 0;
          }

          ul,
          li {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          li {
            margin: 8px 0;
          }

          li a {
            color: #5E6573;
            text-decoration: none;
            line-height: 1.4em;
          }
        `}
      </style>
    </footer>
  );
}
