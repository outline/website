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
              <Link
                href="https://docs.getoutline.com/s/guide"
                className="footer-link"
                legacyBehavior>
                Guide
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="footer-link" legacyBehavior>
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/integrations" className="footer-link" legacyBehavior>
                Integrations
              </Link>
            </li>
            <li>
              <Link href="/download" className="footer-link" legacyBehavior>
                Download
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="footer-link" legacyBehavior>
                Pricing
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
              <Link href="/contact" className="footer-link" legacyBehavior>
                Contact Us
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
              <Link href="/about" className="footer-link" legacyBehavior>
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="footer-link" legacyBehavior>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="footer-link" legacyBehavior>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.getoutline.com/s/dpa"
                className="footer-link"
                legacyBehavior>
                DPA
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
              <Link
                href="/compare/confluence-alternative"
                className="footer-link"
                legacyBehavior>
                Confluence
              </Link>
            </li>
            <li>
              <Link
                href="/compare/google-docs-alternative"
                className="footer-link"
                legacyBehavior>
                Google Docs
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

          :global(.footer-link) {
            color: ${colors.textSecondary};
            text-decoration: none;
            line-height: 1.4em;
          }

          :global(.footer-link:hover) {
            padding-bottom: 1px;
            border-bottom: 2px solid ${colors.textSecondary};
          }
        `}
      </style>
    </footer>
  );
}
