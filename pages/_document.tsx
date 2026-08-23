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
        {/* Sitemap is also advertised here, not only in robots.txt, as that
            file is served by Cloudflare rather than from this repository. */}
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
