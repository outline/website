import Link from "next/link";
import Logo from "components/Logo";
import { darken } from "polished";
import { spacing, typography, colors } from "theme";

export default function Footer() {
  return (
    <footer>
      <div className="pure-g container">
        <div className="pure-u-1 pure-u-md-1-5">
          <Logo />
          <br />
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Product</h3>
          <ul>
            <li>
              <Link href="https://docs.getoutline.com/s/guide" legacyBehavior>
                <a>Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/changelog" legacyBehavior>
                <a>Changelog</a>
              </Link>
            </li>
            <li>
              <Link href="/integrations" legacyBehavior>
                <a>Integrations</a>
              </Link>
            </li>
            <li>
              <Link href="/download" legacyBehavior>
                <a>Download</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing" legacyBehavior>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <a href="https://status.getoutline.com">Status</a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Community</h3>
          <ul>
            <li>
              <Link href="/contact" legacyBehavior>
                <a>Contact Us</a>
              </Link>
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
              <a href="https://twitter.com/getoutline" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy" legacyBehavior>
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms" legacyBehavior>
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="https://docs.getoutline.com/s/dpa" legacyBehavior>
                <a>DPA</a>
              </Link>
            </li>
            <li>
              <a href="https://climate.stripe.com/x7Updz" target="_blank">
                Climate Impact
              </a>
            </li>
          </ul>
        </div>
        <div role="navigation" className="pure-u-1-2 pure-u-md-1-5">
          <h3>Compare</h3>
          <ul>
            <li>
              <Link href="/compare/confluence-alternative" legacyBehavior>
                <a>Confluence</a>
              </Link>
            </li>
            <li>
              <Link href="/compare/google-docs-alternative" legacyBehavior>
                <a>Google Docs</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} General Outline, Inc. &middot;
            Built in NYC.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            margin-top: ${spacing.xlarge};
            padding-top: ${spacing.xlarge};
            background: ${colors.lightGrey};
          }

          .copy {
            font-size: 12px;
            font-family: ${typography.fontFamilyMono};
            background: ${darken(0.05, colors.lightGrey)};
            padding: 2px 4px;
            margin-top: ${spacing.large};
            color: #444;
          }

          h3 {
            margin-top: 0;
            font-weight: 600;
          }

          ul,
          li {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          ul {
            margin-bottom: ${spacing.large};
          }

          li {
            margin: 8px 0;
          }

          li a {
            color: ${colors.textSecondary};
            text-decoration: none;
            line-height: 1.4em;
          }

          li a:hover {
            padding-bottom: 1px;
            border-bottom: 2px solid ${colors.textSecondary};
          }
        `}
      </style>
    </footer>
  );
}
