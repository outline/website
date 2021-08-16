import Link from "next/link";
import Layout from "components/Layout";
import GetStarted from "components/GetStarted";
import Screenshot from "components/Screenshot";
import Table from "components/Table";
import { CheckmarkIcon, CrossIcon } from "outline-icons";
import { colors } from "theme";

export default function ConfluenceComparison() {
  const check = <CheckmarkIcon color={colors.text} />;
  const nope = <CrossIcon color={colors.brand.red} />;

  return (
    <Layout
      title={
        <>
          <br />
          <br />
          Finally, a Real Alternative to Confluence
        </>
      }
      pageTitle="Confluence Alternative"
      background="#F4F7FA"
      hero={
        <>
          <p>
            Outline is the fast, modern, alternative to Confluence that your
            team has been looking for – on-premise or in the cloud.
          </p>
          <GetStarted centered={false} />
        </>
      }
      illustration={<Screenshot maxWidth={1000} />}
    >
      <div className="pure-g container">
        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Good lookin’ docs, without even trying.</h2>
          <p>
            An easy to use editor with markdown shortcuts, slash commands, and
            media embeds that looks great by default.
          </p>
        </div>
        <div className="pure-u-1 pure-u-md-3-5">
          <img
            src="/images/good-lookin.png"
            alt="Outline task lists"
            className="feature-screenshot right"
          />
        </div>

        <div className="pure-u-1 pure-u-md-3-5">
          <img
            src="/images/permissions.png"
            alt="Outline permissions"
            className="feature-screenshot left"
          />
        </div>
        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Access control &amp; permissions.</h2>
          <p>
            Manage access to your knowledge base with read &amp; write
            permissions, user groups, guest users, public sharing, and more…
          </p>
        </div>

        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Structured &amp; instantly searchable.</h2>
          <p>
            Nest documents in a hierachy, automatically build a network of
            backlinks and search across everything in ms.
          </p>
        </div>
        <div className="pure-u-1 pure-u-md-3-5">
          <img
            src="/images/search.png"
            alt="Outline search"
            className="feature-screenshot right"
          />
        </div>

        <div className="pure-u-1 pure-u-md-3-5">
          <img
            src="/images/self-hosted-domain.png"
            alt="Custom domain"
            className="feature-screenshot left"
          />
        </div>
        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Cloud hosted or on-premise.</h2>
          <p>
            Outline is available as a cloud hosted service that’s always
            up-to-date or as a self-hosted install on your own network.
          </p>
        </div>
      </div>
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Outline</th>
              <th>Confluence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unlimited documents</td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Full version history</td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Team templates</td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Audit trail</td>
              <td>{check}</td>
              <td>Enterprise-only</td>
            </tr>
            <tr>
              <td>Single sign-on</td>
              <td>{check}</td>
              <td>Enterprise-only</td>
            </tr>
            <tr>
              <td>Fast, really fast</td>
              <td>{check}</td>
              <td>{nope}</td>
            </tr>
            <tr>
              <td>Install on-premise</td>
              <td>{check}</td>
              <td>{nope}</td>
            </tr>
          </tbody>
        </Table>

        <p className="description">
          On the same page as us? Let’s take your team’s writing to the next
          level…
        </p>
        <GetStarted />
      </div>

      <style jsx>{`
        .description {
          line-height: 1.5;
          text-align: center;
          font-size: 1.5rem;
          color: ${colors.textSecondary};
        }

        .feature-screenshot {
          padding: 2em;
          width: 100%;
        }

        .feature-screenshot.left {
          margin-left: -4em;
        }

        .feature-screenshot.right {
          margin-left: 4em;
        }

        .feature {
          margin-bottom: 4em;
        }

        .feature h2 {
          font-size: 2.2em;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .feature p {
          font-size: 2.2em;
          letter-spacing: 0.01em;
          font-family: "HK Grotesk";

          margin-top: 0.5em;
          font-weight: 500;
          line-height: 1.2;
        }
      `}</style>
    </Layout>
  );
}
