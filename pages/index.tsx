import * as React from "react";
import Link from "next/link";
import {
  PadlockIcon,
  MoonIcon,
  BuildingBlocksIcon,
  CloudIcon,
  GlobeIcon,
  StarredIcon,
  EyeIcon,
} from "outline-icons";
import Card from "components/Card";
import Screenshot from "components/Screenshot";
import GetStarted from "components/GetStarted";
import Layout from "components/Layout";
import GithubLogo from "components/GithubLogo";
import { spacing, colors, typography } from "theme";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="hero">
          <h1 className="title">Your team’s knowledge base</h1>

          <p className="description">
            Lost in a mess of Docs? Never quite sure who has access? Colleagues
            requesting the same information repeatedly in chat? It’s time to get
            your team’s knowledge organized.
          </p>

          <GetStarted />

          <Screenshot />
        </div>

        <h1 className="subtitle">Why you’ll love using Outline</h1>
        <p className="description">
          Just a few of the hundreds of features and little details.
        </p>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5 feature-left">
              <div className="lil-wrapper editor-menus">
                <img
                  src="/images/block-menu.png"
                  style={{ maxWidth: 373, maxHeight: 437 }}
                />
                <img
                  src="/images/emoji-menu.png"
                  className="emoji-menu"
                  style={{
                    maxWidth: 280,
                    maxHeight: 324,
                  }}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Intuitive editing experience.</em>A blazing fast editor with
                markdown support, slash commands, interactive embeds, and more…
              </h2>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container reverse">
            <div className="pure-u-1 pure-u-md-2-5 feature-left">
              <h2>
                <em>
                  Multiplayer collab
                  <span className="realtime-cursor">Alex</span>oration
                </em>
                Collaborate with team mates on documents in realtime. Comments
                &amp; threads keep conversations organized.
              </h2>
            </div>
            <div className="pure-u-1 pure-u-md-3-5 feature-right">
              <div className="lil-wrapper">
                <img
                  src="/images/comments-home.png"
                  style={{
                    maxWidth: 403,
                    maxHeight: 293,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5 feature-left">
              <img
                src="/images/rag.png"
                style={{
                  maxWidth: "625px",
                  maxHeight: "615px",
                }}
              />
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Powerful search and question answering</em>
                Search across your workspace instantly, and ask questions about
                your documents to get direct AI answers.
              </h2>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container reverse">
            <div className="pure-u-1 pure-u-md-2-5 feature-left">
              <h2>
                <em>Integrated with Slack</em>
                Search, share, and ask questions from your documents without
                leaving chat. Post notifications to channels when docs are
                updated.
              </h2>
            </div>
            <div className="pure-u-1 pure-u-md-3-5 feature-right">
              <div className="lil-wrapper slack">
                <img
                  src="/images/slack-composer.png"
                  style={{
                    maxWidth: 476,
                    maxHeight: 80,
                  }}
                />
                <img
                  src="/images/slack-outline-search.png"
                  className="slack-outline-search"
                  style={{ maxWidth: 358, maxHeight: 317 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="pure-g container">
            <div className="pure-u-1 pure-u-md-3-5 feature-left">
              <img
                src="/images/self-hosted-domain.png"
                style={{
                  maxWidth: "625px",
                  maxHeight: "615px",
                }}
              />
            </div>
            <div className="pure-u-1 pure-u-md-2-5 feature-right">
              <h2>
                <em>Public sharing</em>
                Share documents publicly with a link, or privately with a team.
                Use your own brand colors, logos, and domain.
              </h2>
            </div>
          </div>
        </section>

        <div className="highlight-cards">
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
                      &nbsp;Blazing fast
                    </>
                  }
                  description="Outline is fast, really fast. We’ve worked hard to ensure millisecond response times – documents load instantly, search is speedy and navigating the UI is snappy."
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <Card
                  title={
                    <>
                      <CloudIcon
                        size={32}
                        color="currentColor"
                        className="pull-icon"
                      />
                      &nbsp;Collaborative
                    </>
                  }
                  description="Outline has been designed from the ground up to be powerful, realtime, and easy to use. Reading and writing docs should be enjoyable."
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <Card
                  title={
                    <>
                      <MoonIcon
                        size={32}
                        color="currentColor"
                        className="pull-icon"
                      />
                      &nbsp;Dark mode
                    </>
                  }
                  description="For the night owls, we’ve got you covered. Outline has a beautiful dark mode that’s easy on the eyes and looks great."
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
                      &nbsp;Security &amp; permissions
                    </>
                  }
                  description="Manage the knowledge base with read & write permissions, user groups, guest users, public sharing, and more…"
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
                      &nbsp;20+ Integrations
                    </>
                  }
                  description={
                    <>
                      Simple{" "}
                      <Link href="/integrations" legacyBehavior>
                        <a>integrations</a>
                      </Link>{" "}
                      into tools you use every day like Slack, Figma, Loom and
                      many more. Can’t find the integration you need? There is
                      an{" "}
                      <Link href="/developers" legacyBehavior>
                        <a>open API</a>
                      </Link>{" "}
                      too.
                    </>
                  }
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <Card
                  title={
                    <>
                      <GlobeIcon
                        size={32}
                        color="currentColor"
                        className="pull-icon"
                      />
                      &nbsp;In your language
                    </>
                  }
                  description="Outline has RTL support and includes translations for 20 languages including 🇫🇷 French, 🇪🇸 Spanish, 🇩🇪 German, 🇰🇷 Korean, and 🇨🇳 Chinese."
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <Card
                  title={
                    <>
                      <EyeIcon
                        size={32}
                        color="currentColor"
                        className="pull-icon"
                      />
                      &nbsp;Built in public
                    </>
                  }
                  description={
                    <>
                      Outline is updated with new features and fixes regularly,
                      checkout our{" "}
                      <Link href="/changelog" legacyBehavior>
                        <a>public changelog</a>
                      </Link>{" "}
                      to see how things are progressing!
                    </>
                  }
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <Card
                  title={
                    <>
                      <GithubLogo size={24} />
                      &nbsp;Open source
                    </>
                  }
                  description={
                    <>
                      Outline’s{" "}
                      <a
                        href="https://github.com/outline"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        source code is public
                      </a>
                      , and development is completed in the open. Prefer to host
                      on your own infrastructure? No problem.
                    </>
                  }
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
                      &nbsp;Customizable
                    </>
                  }
                  description={
                    <>
                      Custom domains allow you to have{" "}
                      <strong>docs.yourteam.com</strong>. White label with your
                      own brand and colors.
                    </>
                  }
                />
              </div>
            </div>
          </section>
        </div>

        <p className="description">
          On the same page as us? Sign up in just a couple of clicks…
        </p>
        <GetStarted />
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
          position: relative;
          font-size: 1.8em;
          letter-spacing: 0.01em;
          font-weight: 500;
          line-height: 1.2;
        }

        .feature h2 em {
          font-size: 1.2em;
          font-weight: 600;
          font-style: normal;
          display: block;
          margin-bottom: 0.25em;
        }

        .lil-wrapper {
          display: inline-flex;
          background: white;
          padding: ${spacing.medium};
          border-radius: 8px;
          position: relative;
        }

        .highlight-cards {
          background: linear-gradient(180deg, ${colors.lightGrey}, #fff);
          width: 100%;
        }

        .realtime-cursor {
          background: #f56c31;
          color: white;
          font-size: 18px;
          padding: 2px 6px;
          border-radius: 4px;
          position: absolute;
          top: -1em;
        }

        .realtime-cursor:after {
          content: "";
          display: block;
          height: 1.4em;
          width: 3px;

          animation: blink 1s infinite;
          position: absolute;
          background: #f56c31;
          position: absolute;
          bottom: -100%;
          left: 0;
        }

        @keyframes blink {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        img {
          display: block;
          width: 100%;
        }

        .lil-wrapper.editor-menus {
          padding: 0;
          overflow: hidden;
          width: 100%;
        }

        .lil-wrapper.slack {
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          min-height: 380px;
        }

        .slack-outline-search {
          position: absolute;
          bottom: 80px;
          left: 0;
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
        }

        .task-list {
          box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.08) 0px 4px 12px, rgba(0, 0, 0, 0.08) 0px 20px 40px;
          border-radius: 8px;
        }

        .emoji-menu {
          position: absolute;
          border-radius: 6px;
          top: 80px;
          left: 240px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
            rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
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

          .reverse .feature-left {
            order: 2;
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

        .pull-icon {
          margin-left: -4px;
        }
      `}</style>
    </Layout>
  );
}
