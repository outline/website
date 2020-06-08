import Link from "next/link";
import Button from "components/Button";
import Card from "components/Card";
import Layout from "components/Layout";
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
            src="/images/screenshot.png"
            alt="Outline screenshot"
            className="screenshot"
          />
        </p>

        <section className="feature">
          <div className="pure-grid container">
            <h2 className="pure-u-1 pure-u-md-1-2">
              <em>Outline is built with speed in mind</em> — no spinners, no
              waiting.
            </h2>
          </div>
        </section>

        <div className="container">
          <div className="pure-grid cards">
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title="Blazing Fast"
                description="Outline is fast, really fast. We’ve worked hard to ensure
                millisecond response times – documents load instantly, search
                is speedy and navigating the UI is delightful."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title="Intuitive"
                description="The Outline editor has been designed from the ground up to be
                  as intuitive as possible. We want to make reading and writing
                  docs enjoyable."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title="Organized"
                description="Give your documentation structure – with nesting, collections,
                  and automatic backlinks to build a tree of useful information."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                href="/editor"
                title="Markdown &rarr;"
                description="Markdown support makes editing, import and export painless.
                    Shortcuts are also built into the editor so you can easily
                    format using **markdown syntax**."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                href="/integrations"
                title="Integrated &rarr;"
                description="Simple integrations into tools you use every day like Slack,
                    Figma, Loom and many more. Can’t find the integration you
                    need? There is an open API too."
              />
            </div>

            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                href="https://github.com/outline"
                title="Open Source &rarr;"
                description="Outline’s source code is public, and the editor is open source
                  so the community can help improve it too. Prefer to host a
                  copy in your own infrastructure? No problem."
              />
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .feature {
          background: #383b3c;
          background-image: url(/images/squiggles.png);
          background-repeat: no-repeat;
          background-position: center right;
          background-size: 50%;

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

        .cards {
          margin: 0 -1rem;
        }
      `}</style>
    </Layout>
  );
}
