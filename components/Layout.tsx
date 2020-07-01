import Head from "next/head";
import { darken } from "polished";
import Footer from "components/Footer";
import Logo from "components/Logo";
import Hero from "components/Hero";
import HeaderNavigation from "components/HeaderNavigation";
import { spacing, colors, typography } from "theme";

type Props = {
  title?: string;
  background?: string;
  color?: string;
  header?: React.ReactNode;
  hero?: React.ReactNode;
  illustration?: string;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({
  title,
  header,
  hero,
  illustration,
  sidebar,
  background = "transparent",
  color = "inherit",
  children,
}: Props) {
  const pageTitle = `${
    title ? title + " – " : ""
    }Outline – Team wiki & knowledgebase`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.png"
          sizes="16x16"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon-32.png"
          sizes="32x32"
        />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="origin" />
        <meta name="slack-app-id" content="A0W3UMKBQ" />
        <meta name="og:site_name" content="Outline" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:image" content="/images/screenshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="getoutline.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content="/images/screenshot.png" />
      </Head>
      <header className={(header || hero) && "with-header"}>
        <div className="container">
          <div className="pure-g">
            <div className="pure-u-1-2 header-left">
              <Logo />
            </div>
            <div className="pure-u-1-2 header-right">
              <HeaderNavigation />
            </div>
          </div>

          {hero ? (
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-2-5">
                <h1>{title}</h1>
                <Hero>{hero}</Hero>
              </div>
              <div className="pure-u-1 pure-u-md-3-5">
                {illustration && <img src={illustration} />}
              </div>
            </div>
          ) : (
              header
            )}
        </div>
      </header>
      <div className="page">
        {sidebar ? (
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-1-5 sidebar">{sidebar}</div>
            <div className="pure-u-1 pure-u-md-4-5">
              <div className="content">{children}</div>
            </div>
          </div>
        ) : (
            children
          )}
      </div>
      <Footer />
      <style jsx>
        {`
          header {
            color: ${color};
            background: ${background};
          }

          .header-left,
          .header-right {
            display: flex;
            padding: ${spacing.large} 0;
          }

          .header-right {
            justify-content: flex-end;
          }

          .with-header {
            padding-bottom: 1em;
            margin-bottom: 2em;
          }

          .page {
            min-height: calc(100vh - 300px);
          }

          .content {
            padding: 0 ${spacing.large};
          }

          @media (max-width: 48em) {
            .content {
              padding: 0;
            }

            .sidebar {
              padding: 0 ${spacing.medium};
              margin: -${spacing.large} -5vw ${spacing.large};
              background: ${darken(0.05, background)};
              width: 100vw;
            }
          }

          img {
            height: 200px;
            float: right;
            opacity: 0.95;
          }
        `}
      </style>
      <style global jsx>
        {`
          .container {
            max-width: 1140px;
            width: 90vw;
            margin: 0 auto;
          }

          * {
            box-sizing: border-box;
          }

          html,
          button,
          input,
          select,
          textarea,
          .pure-g [class*="pure-u"] {
            color: #121212;
            font-family: ${typography.fontFamily};
          }

          html,
          body {
            padding: 0;
            margin: 0;
            line-height: 1.6;
          }

          h1 {
            font-size: 3em;
          }
          h2 {
            font-size: 2em;
          }

          h1,
          h2,
          h3,
          h4,
          .pure-g h1[class*="pure-u"],
          .pure-g h2[class*="pure-u"],
          .pure-g h3[class*="pure-u"],
          .pure-g h4[class*="pure-u"] {
            font-family: "HK Grotesk";
            font-weight: 600;
            line-height: 1;
          }

          a {
            color: ${colors.primary};
            text-decoration: none;
          }

          p {
            line-height: 1.4;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Light.eot") format("eot"),
              url("/fonts/HKGrotesk-Light.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Regular.eot") format("eot"),
              url("/fonts/HKGrotesk-Regular.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-SemiBold.eot") format("eot"),
              url("/fonts/HKGrotesk-SemiBold.woff2") format("woff2"),
              url("/fonts/HKGrotesk-SemiBold.woff") format("woff");
            font-weight: 600;
            font-style: normal;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Bold.eot") format("eot"),
              url("/fonts/HKGrotesk-Bold.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Bold.woff") format("woff");
            font-weight: 700;
            font-style: normal;
          }
        `}
      </style>
    </>
  );
}
