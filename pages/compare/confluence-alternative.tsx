import Link from "next/link";
import Layout from "components/Layout";
import GetStarted from "components/GetStarted";
import Screenshot from "components/Screenshot";
import { CheckmarkIcon, CrossIcon } from "outline-icons";
import { colors, spacing, typography } from "theme";

export default function Confluence() {
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
          <h2>Beautiful documents, without even trying.</h2>
          <p>
            An intuitive editor with markdown support, slash commands, and rich
            embeds that looks good by default.
          </p>
        </div>
        <div className="pure-u-1 pure-u-md-3-5"></div>

        <div className="pure-u-1 pure-u-md-3-5"></div>
        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>First-class integrations.</h2>
          <p>
            Search and share documents without ever leaving your team chat, rich
            embeds from all your favorite services, a full API included out of
            the box.
          </p>
        </div>

        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Structured &amp; instantly searchable.</h2>
          <p>
            Nest documents in a hierachy, automatically build a network of
            backlinks and search across everything in ms.
          </p>
        </div>
        <div className="pure-u-1 pure-u-md-3-5"></div>

        <div className="pure-u-1 pure-u-md-3-5"></div>
        <div className="pure-u-1 pure-u-md-2-5 feature">
          <h2>Cloud &amp; on-premise.</h2>
          <p>
            Outline is available as a cloud hosted service that's always
            up-to-date or as a self-hosted install on your own network.
          </p>
        </div>
      </div>
      <div className="container">
        <table>
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
        </table>

        <GetStarted />
      </div>

      <style jsx>{`
        table {
          width: 100%;
          margin: 4em 0;
          overflow-x: auto;
          text-align: left;
        }

        table tr td:first-child {
          border-top-left-radius: ${spacing.small};
          border-bottom-left-radius: ${spacing.small};
        }

        table tr td:last-child {
          border-top-right-radius: ${spacing.small};
          border-bottom-right-radius: ${spacing.small};
        }

        table th,
        table td {
          text-align: center;
          padding: ${spacing.medium};
        }

        table td:first-child {
          text-align: left;
          font-weight: 500;
        }

        table tr:nth-child(even) td {
          background: ${colors.lightGrey};
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
