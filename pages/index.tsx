import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "components/Button";
import Card from "components/Card";
import Layout from "components/Layout";
import { spacing, colors, typography } from "theme";

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className="title">Your team’s knowledge base</h1>

        <p className="description">
          A modern team knowledgebase for your internal documentation, product
          specs, support answers, meeting notes, onboarding, &amp; more…
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

        <h1 className="subtitle">Why you’ll love using Outline</h1>
        <p className="description">
          Just a few of the hundreds of features and little details.
        </p>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5 feature-left">
              <div className="lil-wrapper video">
                <video
                  width="386"
                  height="344"
                  className="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/slash-menu.mp4"
                    type="video/mp4"
                  ></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Beautiful documents, without even trying.</em> <br />
                An intuitive editor with markdown support, slash commands, rich
                embeds, and more…
              </h2>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-2-5 feature-left">
              <h2>
                <em>Integrated with Slack.</em>
                <br />
                Search and share documents without ever leaving your team chat.
              </h2>
            </div>
            <div className="pure-u-1 pure-u-md-3-5 feature-right">
              <div className="lil-wrapper">
                <img
                  src="/images/slack-integration.png"
                  style={{ maxWidth: "558px", maxHeight: "294px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5 feature-left">
              <div className="lil-wrapper video">
                <video
                  width="497"
                  height="350"
                  className="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/search.mp4" type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Blazing fast.</em>
                <br />
                Outline is built with speed in mind. Documents load in
                milliseconds – no page reloads, no waiting.
              </h2>
            </div>
          </div>
        </section>

        <section className="container">
          <Tabs defaultIndex={1}>
            <TabList>
              <Tab disabled>
                <h2 className="for">Outline for:</h2>
              </Tab>
              <Tab>
                <h3>Documentation</h3>
              </Tab>
              <Tab>
                <h3>Support teams</h3>
              </Tab>
              <Tab>
                <h3>Sales teams</h3>
              </Tab>
            </TabList>

            <TabPanel />
            <TabPanel>
              <p>Structured documentation and relevant search results.</p>
            </TabPanel>
            <TabPanel>
              <p>
                Outline makes it fast and easy to find the answers your support
                team needs to make customers happy.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Outline makes it easy to store and find the information sales
                reps need to answers questions in real time and close deals
                faster.
              </p>
            </TabPanel>
          </Tabs>
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
                title="Permissioned"
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

        <p className="description">
          On the same page as us? Sign up in just a couple of clicks…
        </p>
        <p>
          <Button href="//app.getoutline.com">
            Get Started for Free &rarr;
          </Button>
        </p>
      </main>

      <style jsx>{`
        .feature {
          width: 95vw;
          padding: ${spacing.large};
          margin: ${spacing.xlarge} 0;
        }

        .feature.dark {
          background-image: url(/images/dot-pattern.png);
          background-repeat: repeat;
          color: ${colors.almostBlack};
        }

        .feature-left,
        .feature-right {
          display: flex;
          align-items: center;
        }

        .feature-right {
          justify-content: flex-end;
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

        .lil-wrapper {
          display: inline-block;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
          background: white;
          padding: ${spacing.medium};
          border-radius: 8px;
        }

        .lil-wrapper img {
          display: block;
          width: 100%;
        }

        .lil-wrapper.video {
          padding-top: 0;
          padding-bottom: 0;
        }

        .screenshot {
          max-width: 1140px;
          width: 90vw;
          box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.3);
          border-radius: 8px;
        }

        .screenshot-wrapper {
          padding: 24px;
          margin-bottom: 0;
          background: ${colors.lightGrey};
          border-radius: 12px;
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

        .subtitle {
          text-align: center;
          margin: 100px 0 -16px;
          line-height: 1.15;
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
          color: ${colors.textSecondary};
        }

        .video {
          max-width: 100%;
        }

        .for {
          font-family: ${typography.fontFamilyMono};
          font-weight: 500;
          font-size: 1em;
          color: ${colors.textSecondary};
        }

        @media (max-width: 48em) {
          .title {
            font-size: 2.8rem;
            max-width: 90vw;
          }

          .subtitle {
            font-size: 2.1rem;
            max-width: 90vw;
          }

          .description {
            font-size: 1.3rem;
            max-width: 90vw;
          }

          .feature {
            padding: 0;
          }

          .feature-left,
          .feature-right {
            justify-content: center;
          }
        }

        .cards {
          margin: 4em -1rem;
        }
      `}</style>
      <style jsx global>
        {`
          .react-tabs {
            -webkit-tap-highlight-color: transparent;
          }

          .react-tabs__tab-list {
            margin: 0;
            padding: 0;
          }

          .react-tabs__tab {
            display: inline-block;
            border: 1px solid transparent;
            border-bottom: none;
            bottom: -1px;
            position: relative;
            list-style: none;
            padding: 6px 12px;
            cursor: pointer;
            user-select: none;
          }

          .react-tabs__tab--selected {
            color: ${colors.white};
            border-radius: 4px 4px 0 0;
            background: ${colors.almostBlack};
          }

          .react-tabs__tab:focus {
            box-shadow: 0 0 5px hsl(208, 99%, 50%);
            border-color: hsl(208, 99%, 50%);
            outline: none;
          }

          .react-tabs__tab:focus:after {
            content: "";
            position: absolute;
            height: 5px;
            left: -4px;
            right: -4px;
            bottom: -5px;
            background: #fff;
          }

          .react-tabs__tab-panel {
            display: none;
          }

          .react-tabs__tab-panel--selected {
            display: block;
            color: ${colors.white};
            background: ${colors.almostBlack};
            padding: ${spacing.large};
          }
        `}
      </style>
    </Layout>
  );
}
