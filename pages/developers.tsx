import * as React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Layout from "components/Layout";
import Script from "next/script";
import scalarConfiguration from "lib/scalarConfiguration";

// Must match the @scalar/api-reference version bundled by the
// @scalar/server-side-rendering package that prerendered the markup, or
// hydration may mismatch. See scripts/render-scalar.mjs.
const SCALAR_VERSION = "1.66.1";

export default function Developers({ html, colorModeScript }) {
  const instance = React.useRef(null);
  const initialized = React.useRef(false);
  const abortController = React.useRef(null);

  const initialize = React.useCallback(() => {
    if (initialized.current || !window["Scalar"]) {
      return;
    }
    initialized.current = true;

    // The spec is fetched rather than passed through page props to avoid
    // embedding another copy of it in __NEXT_DATA__ — it is already published
    // at /openapi.json, and the prerendered markup is shown in the meantime.
    fetch("/openapi.json", { signal: abortController.current?.signal })
      .then((res) => res.json())
      .then((content) => {
        if (!document.getElementById("scalar-api-reference")) {
          return;
        }

        // The container already holds the prerendered markup, which switches
        // Scalar into hydration mode rather than rendering from scratch.
        instance.current = window["Scalar"].createApiReference(
          "#scalar-api-reference",
          {
            ...scalarConfiguration,
            content,
          }
        );
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          throw err;
        }
      });
  }, []);

  React.useEffect(() => {
    abortController.current = new AbortController();

    // Handles client-side navigations back to this page, when the standalone
    // bundle is already loaded and Script's onLoad will not fire again.
    initialize();

    // Clean up the effects of Scalar API Reference
    return () => {
      abortController.current?.abort();
      instance.current?.destroy?.();
      instance.current = null;
      initialized.current = false;
      document.body.classList.remove("dark-mode", "light-mode");
    };
  }, [initialize]);

  return (
    <Layout title="API Documentation" fullWidth>
      <Head>
        <link rel="stylesheet" href="/scalar.css" />
      </Head>
      <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
      <div
        id="scalar-api-reference"
        className="documentation"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Script
        src={`https://cdn.jsdelivr.net/npm/@scalar/api-reference@${SCALAR_VERSION}/dist/browser/standalone.js`}
        onLoad={initialize}
      />
      <style jsx global>{`
        /* Layout's global "h1 { font-size: 3em }" and "h2 { font-size: 2em }"
           override Scalar's heading reset, which lives in a CSS @layer and so
           always loses to the site's unlayered rules. Mirror the reset here at
           minimal specificity (:where) so Scalar's own sizing rules still win. */
        .documentation :where(.scalar-app) :where(h1, h2) {
          font-size: inherit;
        }

        /* PureCSS (loaded by Layout) has ".hidden { display: none !important }"
           which clobbers Scalar's Tailwind responsive display utilities such as
           the sidebar's "hidden lg:flex". Restore them, scoped to this page.
           Breakpoints must match scalar.css: lg = 1000px, xl = 1200px. */
        @media (min-width: 1000px) {
          .documentation .scalar-app [class~="lg:flex"] {
            display: flex !important;
          }
        }
        @media (min-width: 1200px) {
          .documentation .scalar-app [class~="xl:flex"] {
            display: flex !important;
          }
        }
      `}</style>
      <style jsx>{`
        .documentation {
          --scalar-header-height: 75px;
        }

        .documentation::after {
          content: "";
          top: 75px;
          position: fixed;
          border-bottom: 1px solid var(--scalar-border-color);
          width: 100%;
        }

        /* basic theme */
        .dark-mode {
          --scalar-color-1: rgba(255, 255, 255, 0.9);
          --scalar-color-2: rgba(255, 255, 255, 0.62);
          --scalar-color-3: rgba(255, 255, 255, 0.44);
          --scalar-color-accent: #3070ec;

          --scalar-background-1: #000000;
          --scalar-background-2: #1a1a1a;
          --scalar-background-3: #2a2828;
          --scalar-background-accent: transparent;

          --scalar-border-color: rgba(255, 255, 255, 0.1);
        }

        .light-mode .dark-mode,
        .light-mode {
          --scalar-color-1: #2a2f45;
          --scalar-color-2: #757575;
          --scalar-color-3: #8e8e8e;
          --scalar-color-accent: #3070ec;

          --scalar-background-1: #fff;
          --scalar-background-2: #fafafa;
          --scalar-background-3: #e7e7e7;
          --scalar-background-accent: transparent;

          --scalar-border-color: rgba(0, 0, 0, 0.1);
        }
        .light-mode .scalar-card {
          --scalar-background-1: #fff;
          --scalar-background-2: #fff !important;
          --scalar-background-3: #fff !important;
        }
        .dark-mode .scalar-card {
          --scalar-background-1: #000000;
          --scalar-background-2: #000000 !important;
          --scalar-background-3: #000000 !important;
        }
        .light-mode .examples .scalar-card .scalar-card-header {
          --scalar-background-2: #fafafa;
        }
        .dark-mode .examples .scalar-card .scalar-card-header {
          --scalar-background-2: #1a1a1a;
          --scalar-border-color: #1a1a1a;
        }
        /* Document header */
        .light-mode .t-doc__header,
        .dark-mode .t-doc__header {
          --header-background-1: rgba(255, 255, 255, 0.8);
          --header-border-color: var(--scalar-border-color);
          --header-color-1: var(--scalar-color-1);
          --header-color-2: var(--scalar-color-2);
          --header-background-toggle: var(--scalar-color-3);
          --header-call-to-action-color: var(--scalar-color-accent);
          backdrop-filter: saturate(180%) blur(5px);
        }

        .dark-mode .t-doc__header {
          --header-background-1: rgba(0, 0, 0, 0.5);
        }
        /* Document Sidebar */
        .light-mode .t-doc__sidebar,
        .dark-mode .t-doc__sidebar {
          --scalar-sidebar-background-1: var(--scalar-background-1);
          --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-1);
          --scalar-sidebar-item-hover-background: transparent;
          --scalar-sidebar-item-active-background: var(
            --scalar-background-accent
          );
          --scalar-sidebar-border-color: transparent;
          --scalar-sidebar-color-1: var(--scalar-color-1);
          --scalar-sidebar-color-2: var(--scalar-color-2);
          --scalar-sidebar-color-active: var(--scalar-color-accent);
          --scalar-sidebar-search-background: var(--scalar-background-2);
          --scalar-sidebar-search-border-color: var(--scalar-background-2);
          --scalar-sidebar-search-color: var(--scalar-color-3);
          --scalar-sidebar-indent-border: var(--scalar-border-color);
          --scalar-sidebar-indent-border-active: #6aacf8;
        }
        .api-client-drawer .t-doc__sidebar {
          --scalar-sidebar-border-color: var(--scalar-border-color);
        }
        /* advanced */
        .light-mode .dark-mode,
        .light-mode {
          --scalar-button-1: rgb(49 53 56);
          --scalar-button-1-color: #fff;
          --scalar-button-1-hover: rgb(28 31 33);

          --scalar-color-green: #417942;
          --scalar-color-red: #ae3763;
          --scalar-color-yellow: #edbe20;
          --scalar-color-blue: #2b66cf;
          --scalar-color-orange: #cf7a2b;
          --scalar-color-purple: #6e27b5;

          --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
          --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
        }
        .dark-mode {
          --scalar-button-1: #f6f6f6;
          --scalar-button-1-color: #000;
          --scalar-button-1-hover: #e7e7e7;

          --scalar-color-green: #7abe7b;
          --scalar-color-red: #e5698f;
          --scalar-color-yellow: #f8ea68;
          --scalar-color-blue: #68a6f8;
          --scalar-color-orange: #f89c68;
          --scalar-color-purple: #b57de9;

          --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
          --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
        }
        .sidebar .sidebar-indent-nested .sidebar-heading {
          padding-right: 0;
        }
        .sidebar-search-key {
          background: var(--scalar-background-1) !important;
          border: 1px solid var(--scalar-border-color);
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  // The spec is downloaded to public/openapi.json before the build so that it
  // is also published at /openapi.json for API clients and agents to consume.
  const specPath = path.join(process.cwd(), "public", "openapi.json");

  if (!fs.existsSync(specPath)) {
    throw new Error(
      "public/openapi.json is missing, run `yarn openapi` to download it"
    );
  }

  // The API reference is prerendered to HTML at build time so the content is
  // served statically, then hydrated by Scalar's standalone bundle.
  const prerenderedPath = path.join(
    process.cwd(),
    ".generated",
    "developers.json"
  );

  if (!fs.existsSync(prerenderedPath)) {
    throw new Error(
      ".generated/developers.json is missing, run `yarn scalar` to render it"
    );
  }

  const { html, colorModeScript } = JSON.parse(
    fs.readFileSync(prerenderedPath, "utf8")
  );

  return {
    props: {
      html,
      colorModeScript,
    },
  };
}
