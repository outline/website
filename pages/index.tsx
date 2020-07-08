import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
import Link from "next/link";
import {
  PadlockIcon,
  CollectionIcon,
  BuildingBlocksIcon,
  LightBulbIcon,
  StarredIcon,
} from "outline-icons";
import Button from "components/Button";
import Card from "components/Card";
import Hero from "components/Hero";
import Layout from "components/Layout";
import GithubLogo from "components/GithubLogo";
import { spacing, colors, typography } from "theme";

resetIdCounter();

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="hero">
          <h1 className="title">Your team’s knowledge base</h1>

          <p className="description">
            A modern team knowledge base for your internal documentation,
            product specs, support answers, meeting notes, onboarding, &amp;
            more…
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
        </div>

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
                <em>Beautiful documents, without even trying.</em>
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
                Search and share documents without ever leaving your team chat.
              </h2>
            </div>
            <div className="pure-u-1 pure-u-md-3-5 feature-right">
              <div className="lil-wrapper slack">
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
              <img
                src="/images/dark-mode.png"
                style={{
                  maxWidth: "785px",
                  maxHeight: "615px",
                  marginLeft: "-32px",
                }}
              />
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Structured &amp; instantly searchable.</em>
                Nest documents in a hierachy, build a network of references and
                search across everything.
              </h2>
            </div>
          </div>
        </section>

        <section className="use-cases">
          <Tabs defaultIndex={1}>
            <div className="container">
              <TabList>
                <Tab disabled>
                  <h2 className="for">Outline for:</h2>
                </Tab>
                <Tab>
                  <h3>Remote work</h3>
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
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-md-3-5">
                    <h3 className="heading">Onboarding</h3>
                    <p className="content">
                      Onboard new team members easily through internal guides,
                      resources, and checklists. Give new team members a leg up
                      getting to know your product, best practices, and culture.
                    </p>
                    <h3 className="heading">Handbook</h3>
                    <p className="content">
                      Don't lock away your company handbook in a PDF document
                      hidden on a shared drive. Make it accessible, searchable
                      and easily updatable so everyone can find the information
                      they need
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-2-5">
                    <Hero>
                      Whether your team are seasoned remote workers or new to
                      working from home – Outline is a great place to keep your
                      team’s shared knowledge accessible, searchable, and
                      coordinated.
                    </Hero>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-md-3-5">
                    <h3 className="heading">Scalable support</h3>
                    <p className="content">
                      Onboard new customer service reps easily through internal
                      guides and resources. Give everyone access to the
                      knowledge in your team and get your newest team members up
                      to speed in no time.
                    </p>
                    <h3 className="heading">Product answers</h3>
                    <p className="content">
                      With instant search results, customer queries can get
                      answered faster than ever. Make sure your customers have a
                      delightful support experience.
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-2-5">
                    <Hero>
                      Outline makes it fast and easy to find the answers your
                      support team needs to keep customers happy.
                    </Hero>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-md-3-5">
                    <h3 className="heading">Product answers</h3>
                    <p className="content">
                      With instant search results, you can answer all a
                      potential customers questions in the moment and keep the
                      conversation flowing.
                    </p>
                    <h3 className="heading">Sales playbooks</h3>
                    <p className="content">
                      Arm your reps with all the content and strategies they
                      need to close a deal and get new team members up to speed
                      faster.
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-2-5">
                    <Hero>
                      Outline makes it easy to create and find the information
                      sales reps need to answers prospective customers questions
                      in real time and close deals faster.
                    </Hero>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </section>

        <section className="container">
          <div className="pure-g cards">
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <StarredIcon
                      size={32}
                      color="currentColor"
                      className="pull-icon"
                    />
                    &nbsp;Blazing Fast
                  </>
                }
                description="Outline is fast, really fast. We’ve worked hard to ensure
                millisecond response times – documents load instantly, search
                is speedy and navigating the UI is delightful."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <LightBulbIcon
                      size={32}
                      color="currentColor"
                      className="pull-icon"
                    />
                    &nbsp;Intuitive
                  </>
                }
                description="The Outline editor has been designed from the ground up to be
                  easy to use, but powerful. We want to make reading and writing
                  docs enjoyable."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <CollectionIcon
                      size={32}
                      color="currentColor"
                      className="pull-icon"
                    />
                    &nbsp;Organized
                  </>
                }
                description="Give your documentation structure – with nesting, collections,
                  and automatic backlinks to build a tree of useful information."
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <PadlockIcon
                      size={32}
                      color="currentColor"
                      className="pull-icon"
                    />
                    &nbsp;Secure
                  </>
                }
                description="Manage the knowledge base with read &amp; write permissions, user groups, guest users, public sharing, and more…"
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <BuildingBlocksIcon
                      size={32}
                      color="currentColor"
                      className="pull-icon"
                    />
                    &nbsp;Integrated
                  </>
                }
                description={
                  <>
                    Simple <Link href="/integrations"><a>integrations</a></Link> into
                    tools you use every day like Slack, Figma, Loom and many
                    more. Can’t find the integration you need? There is an{" "}
                    <Link href="/developers"><a>open API</a></Link> too.
                  </>
                }
              />
            </div>

            <div className="pure-u-1 pure-u-md-1-3">
              <Card
                title={
                  <>
                    <GithubLogo size={24} />
                    &nbsp;Open Source
                  </>
                }
                description={
                  <>
                    Outline’s{" "}
                    <a
                      href="https://github.com/outline"
                      rel="noopener nofollow"
                    >
                      source code is public
                    </a>
                    , and the editor is open source so the community can help
                    improve it too. Prefer to host on your own infrastructure?
                    No problem.
                  </>
                }
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
          display: block;
          margin-bottom: 0.25em;
        }

        .lil-wrapper {
          display: inline-block;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
          background: white;
          padding: ${spacing.medium};
          border-radius: 8px;
        }

        img {
          display: block;
          width: 100%;
        }

        .lil-wrapper.video {
          padding-top: 0;
          padding-bottom: 0;
          border-left: 30px solid #edf2f7;
        }

        .lil-wrapper.slack {
          border-left: 30px solid ${colors.brand.marine};
        }

        .screenshot {
          max-width: 1140px;
          width: 90vw;
          box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
        }

        .screenshot-wrapper {
          padding: 24px 24px 48px;
          margin-bottom: 0;
          border-radius: 12px;
          overflow: hidden;
          max-width: 100vw;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          background: linear-gradient(180deg, #fff, ${colors.lightGrey});
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

        .use-cases {
          width: 100%;
          min-height: 520px;
          background: ${colors.lightGrey};
          margin: ${spacing.xlarge} 0;
          padding: ${spacing.xlarge} 0;
        }

        .content {
          margin-right: ${spacing.xlarge};
          margin-left: ${spacing.medium};
        }

        .heading {
          position: relative;
          margin-top: ${spacing.large};
          margin-left: ${spacing.medium};
        }

        .heading:before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: ${colors.almostBlack};
          position: absolute;
          left: -16px;
          top: 4px;
        }

        .cards {
          margin: 4em -1rem;
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

          .screenshot {
            width: 150vw;
          }

          .feature {
            padding: 0;
          }

          .feature-left,
          .feature-right {
            justify-content: center;
          }

          .content {
            margin-right: 0;
          }
        }
      `}</style>
      <style jsx global>
        {`
          .pull-icon {
            margin-left: -4px;
          }

          .react-tabs {
            -webkit-tap-highlight-color: transparent;
          }

          .react-tabs__tab-list {
            margin: 0;
            padding: 0;
          }

          .react-tabs__tab {
            display: inline-block;
            border: 2px solid transparent;
            bottom: -1px;
            position: relative;
            list-style: none;
            padding: 6px 12px;
            cursor: pointer;
            user-select: none;
            text-align: center;
            white-space: nowrap;
          }

          .react-tabs__tab--selected {
            border-bottom: 2px solid ${colors.almostBlack};
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
            padding: ${spacing.large} ${spacing.medium};
          }

          @media (max-width: 48em) {
            .react-tabs__tab {
              width: 50%;
            }
            .react-tabs__tab:first-child {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
