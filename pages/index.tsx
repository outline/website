import Link from "next/link";
import Layout from "components/Layout";
import Button from "components/Button";
import { spacing, colors } from "theme";

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className="title">Your team’s knowledge base</h1>

        <p className="description">
          A team wiki and knowledgebase for your internal documentation, meeting
          notes, playbooks, onboarding, work logs, brainstorming, &amp; more…
        </p>

        <p>
          <Button href="//app.getoutline.com">Get Started for Free</Button>
        </p>

        <p className="screenshot-wrapper">
          <img
            src="/screenshot.png"
            alt="Outline screenshot"
            className="screenshot"
          />
        </p>

        <section className="feature">
          <div className="pure-grid container">
            <h2 className="pure-u-1 pure-u-md-1-2">
              <em>Fed up with slow and frustrating apps? So were we.</em> — With
              Outline, you get the kind of experience you’d expect from a
              professional tool. No spinners, no waiting, just your team’s
              information at your fingertips.
            </h2>
          </div>
        </section>

        <div className="pure-grid container">
          <div className="pure-u-1 pure-u-md-1-3">
            <div className="card">
              <h3>Blazing Fast</h3>
              <p>
                Outline is fast, really fast. We’ve worked hard to ensure
                millisecond response times – documents load instantly, search is
                speedy and navigating the UI is delightful.
              </p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <div className="card">
              <h3>Intuitive</h3>
              <p>
                The Outline editor has been designed from the ground up to be as
                intuitive as possible. We want to make reading and writing docs
                enjoyable.
              </p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <div className="card">
              <h3>Organized</h3>
              <p>
                Give your documentation structure – with nesting, collections,
                and automatic backlinks to build a tree of useful information.
              </p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <a href="https://nextjs.org/learn" className="card">
              <h3>Markdown &rarr;</h3>
              <p>
                Markdown support makes editing, import and export painless.
                Shortcuts are also built into the editor so you can easily
                format using **markdown syntax**.
              </p>
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <Link href="/integrations">
              <a className="card">
                <h3>Integrated &rarr;</h3>
                <p>
                  Simple integrations into tools you use every day like Slack,
                  Figma, Loom and many more. Can’t find the integration you
                  need? There is an open API too.
                </p>
              </a>
            </Link>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
            <a
              href="https://github.com/outline"
              target="_blank"
              className="card"
            >
              <h3>Open Source &rarr;</h3>
              <p>
                Outline’s source code is public, and the editor is open source
                so the community can help improve it too. Prefer to host a copy
                in your own infrastructure? No problem.
              </p>
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
        .feature {
          background: #383b3c;
          color: #f2f2f2;
          width: 95vw;
          padding: ${spacing.large};
          margin-bottom: ${spacing.large};
        }

        .feature h2 {
          font-size: 2.2em;
          letter-spacing: 0.01em;
          font-weight: 500;
          line-height: 1.2;
        }

        .feature h2 em {
          font-weight: 600;
          font-style: normal;
          color: #fff;
        }

        .screenshot {
          width: 920px;
          box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          margin-bottom: -40px;
        }

        .screenshot-wrapper {
          padding: ${spacing.large} ${spacing.xlarge};
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 0;
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

        .card {
          display: block;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: ${colors.primary};
          border-color: ${colors.primary};
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
      `}</style>
    </Layout>
  );
}
