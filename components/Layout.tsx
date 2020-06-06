import Head from "next/head";
import Footer from "components/Footer";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: Props) {
  const pageTitle = `${title ? title + " – " : ""}Outline – Team wiki &amp; knowledgebase`;

  return (
    <div className="page">
      <Head>
        <title>
          {pageTitle}
        </title>
        <link rel="icon" href="/favicon.ico" />
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
        <meta name="og:image" content="screenshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="getoutline.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content="screenshot.png" />
      </Head>
      {children}
      <Footer />
      <style global jsx>
        {`
          .page {
            min-height: 100vh;
          }

          .container {
            max-width: 1140px;
            width: 95vw;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}
