import Link from "next/link";
import Layout from "components/Layout";
import Logo from "components/Logo";
import HeaderNavigation from "components/HeaderNavigation";
import { spacing, colors } from "theme";

export default function Home() {
  return (
    <Layout>
      <header className="pure-g container">
        <div className="pure-u-1 pure-u-md-1-2 header">
          <Logo />
        </div>
        <div className="pure-u-1 pure-u-md-1-2 header">
          <HeaderNavigation />
        </div>
      </header>

      <main>
        <h1 className="title">Your team’s knowledge base</h1>

        <p className="description">
          A team wiki and knowledgebase for your internal documentation, meeting
          notes, playbooks, onboarding, work logs, brainstorming, &amp; more…
        </p>

        <p>
          <button>Get Started</button>
        </p>

        <p className="screenshot-wrapper">
          <img
            src="/screenshot.png"
            alt="Outline screenshot"
            className="screenshot"
          />
        </p>

        <div>
          <h2>Fed up with slow tools? So were we</h2>
          <p>
            With Outline, you get the kind of experience you’d expect from a
            professional tool. No spinners, no waiting, just your teams
            information at your fingertips.
          </p>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Blazing Fast &rarr;</h3>
            <p>
              Outline is fast, really fast. We’ve worked hard to ensure
              millisecond response times – documents load instantly, search is
              speedy and navigating the UI is delightful.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Markdown &rarr;</h3>
            <p>
              Markdown support makes editing, import and export painless.
              Shortcuts are also built into the editor so you can easily format
              using **markdown syntax**.
            </p>
          </a>

          <Link href="/integrations">
            <a className="card">
              <h3>Integrations &rarr;</h3>
              <p>
                Simple integrations into tools you use every day like Slack,
                Figma, Loom and many more. Can’t find the integration you need?
                There is an open API too.
              </p>
            </a>
          </Link>
          <a href="https://github.com/outline" target="_blank" className="card">
            <h3>Open Source &rarr;</h3>
            <p>
              Outline’s source code is public, and the editor is open source
              licensed so the community can help improve it too. Prefer to host
              a copy in your own infrastructure? No problem.
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .header {
          padding: ${spacing.large};
        }

        h2 {
          font-size: 2.5rem;
          letter-spacing: 0.01em;
          font-weight: 600;
          line-height: 1.2;
        }

        button {
          background-color: ${colors.primary};
          border-color: ${colors.primary};
          color: white;
          border-width: 2px;
          border-style: solid;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          border-radius: 4px;
          padding: 10px 20px;
          box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
          font-size: 16px;
          line-height: 1.8em;
          height: 50px;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 500;
        }

        .screenshot {
          width: 920px;
          box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          margin-bottom: -40px;
        }

        .screenshot-wrapper {
          padding: 30px;
          border-bottom: 1px solid #eaeaea;
          overflow: hidden;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: 600;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          max-width: 900px;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        button,
        input,
        select,
        textarea,
        .pure-g [class*="pure-u"] {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "HK Grotesk";
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}
