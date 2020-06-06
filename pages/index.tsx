import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Outline – Team wiki &amp; knowledgebase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="logo">
          <img src="/logo.svg" alt="Outline" /> outline
        </div>
        <nav role="navigation">
          <ul>
            <li>
              <Link href="/features">
                <a aria-haspopup="true">Product</a>
              </Link>
              <ul className="dropdown">
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
                    <a>API</a>
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
              <Link href="/company">
                <a>Company</a>
              </Link>
            </li>
            <li>
              <div className="authenticate">
                <Link href="//app.getoutline.com">
                  <a>Log in</a>
                </Link>{" "}
                |{" "}
                <Link href="//app.getoutline.com">
                  <a>Sign up</a>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
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

        <p>
          <img
            src="/screenshot.png"
            alt="Outline screenshot"
            className="screenshot"
          />
        </p>

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
                Documents are stored in plain Markdown making editing, import
                and export painless. Shortcuts are also built right into the
                editor so you can easily format using **markdown syntax** if you
                like.
              </p>
            </a>
          </Link>
          <a
            href="https://github.com/outline/outline"
            target="_blank"
            className="card"
          >
            <h3>Open Source &rarr;</h3>
            <p>
              Outline’s source code is public, and the editor is open source
              licensed so the community can help improve it too. You get new
              features, interface improvements, bug fixes, and a transparent
              roadmap for free.
            </p>
          </a>
        </div>
      </main>

      <footer>&copy; General Outline, Inc.</footer>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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

        li:hover {
          cursor: pointer;
        }

        ul li ul {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          transition: all 0.5s ease;
          margin-top: 1rem;
          left: 0;
          display: none;
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

        .logo {
          display: flex;
          align-items: center;
          font-size: 24px;
        }

        .screenshot {
          width: 920px;
          box-shadow: 0px 11px 27px 0px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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

        .logo {
          height: 1em;
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
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
