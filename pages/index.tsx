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
          A modern team knowledgebase for your internal documentation, meeting
          notes, playbooks, onboarding, work logs, brainstorming, &amp; more…
        </p>

        <p>
          <Button href="//app.getoutline.com">
            Get Started for Free &rarr;
          </Button>
        </p>

        <p className="screenshot-wrapper">
          <img
            src="/images/screenshot.png"
            alt="Outline screenshot"
            className="screenshot"
          />
        </p>

        <section className="feature dark">
          <div className="pure-g container">
            <h2 className="pure-u-1 pure-u-md-1-2">
              <em>Outline is built with speed in mind</em> — no spinners, no
              waiting.
            </h2>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5">
              <video
                width="386"
                height="344"
                className="video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/slash-menu.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="pure-u-1 pure-u-md-2-5">
              <em>Beautiful documents, without even trying.</em> <br />
              An intuitive editor with everything you expect.
            </h2>
          </div>
        </section>

        <section className="feature right">
          <div className="pure-g container">
            <h2 className="pure-u-1 pure-u-md-2-5">
              <em>Integrated with Slack.</em>
              <br />
              Search and share documents without ever leaving your team chat.
            </h2>
            <div className="pure-u-1 pure-u-md-3-5"></div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5"></div>
            <h2 className="pure-u-1 pure-u-md-2-5">
              <em>Markdown support.</em>
              <br />
              Write using full support for markdown and keyboard shortcuts.
            </h2>
          </div>
        </section>

        <section className="container">
          <div className="pure-g cards">
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
                title="Manageable"
                description="Manage the knowledge base with read &amp; write permissions, user groups, guest users, public sharing, and more…"
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
                  so the community can help improve it too. Prefer to host on your own infrastructure? No problem."
              />
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .feature {
          width: 95vw;
          padding: ${spacing.large};
          margin-bottom: ${spacing.large};
        }

        .feature.dark {
          background-image: url(/images/dot-pattern.png);
          background-repeat: repeat;
          color: ${colors.almostBlack};
        }

        .feature.right {
          background-position: top left;
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
        }

        .feature.dark h2 {
          color: ${colors.almostBlack};
        }

        .screenshot {
          max-width: 1040px;
          width: 90vw;
          box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          margin-bottom: -40px;
        }

        .screenshot-wrapper {
          padding: 24px;
          margin-bottom: 0;
          background: ${colors.lightGrey};
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
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

        .video {
          background: ${colors.white};
          border-radius: 12px;
          position: relative;
          max-width: 100%;
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

        @media (max-width: 48em) {
          .title {
            font-size: 2.8rem;
            max-width: 90vw;
          }

          .description {
            font-size: 1.3rem;
            max-width: 90vw;
          }

          .feature {
            padding: 0;
          }
        }

        .cards {
          margin: 4em -1rem;
        }
      `}</style>
    </Layout>
  );
}
