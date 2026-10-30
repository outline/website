import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* RFC 8631 relation pointing at the OpenAPI description of the API,
            so that clients and agents can discover it from any page. */}
        <link
          rel="service-desc"
          type="application/json"
          title="Outline API OpenAPI specification"
          href="/openapi.json"
        />
        {/* RFC 9727 API catalog, and the AI Catalog listing the MCP server.
            These would normally be advertised with Link response headers,
            which a static export can't set. */}
        <link
          rel="api-catalog"
          type="application/linkset+json"
          href="/.well-known/api-catalog"
        />
        <link
          rel="ai-catalog"
          type="application/json"
          href="/.well-known/ai-catalog.json"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/base-min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/grids-min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
