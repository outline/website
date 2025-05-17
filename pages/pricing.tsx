import Link from "next/link";
import Button from "components/Button";
import { CloudIcon, TeamIcon, CheckmarkIcon } from "outline-icons";
import Layout from "components/Layout";
import { spacing, colors } from "theme";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
import {
  SimpleTooltip,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "components/ui/Tooltip";

export default function Pricing() {
  const check = <CheckmarkIcon className="icon" />;

  return (
    <Layout
      title="Pricing"
      background={colors.lightGrey}
      header={
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-2-5">
            <h1>Pricing</h1>
          </div>
        </div>
      }
    >
      <div className="container">
        <Tabs>
          <div className="container">
            <TabList className="tabs pure-g">
              <div className="pure-u-1 pure-u-md-1-4" />
              <Tab className="pure-u-1 pure-u-md-1-4">
                <h2>
                  <CloudIcon size={32} color="currentColor" /> Cloud
                </h2>
                <p>Secure and always up-to-date, hosted by Outline</p>
              </Tab>
              <Tab className="pure-u-1 pure-u-md-1-4">
                <h2>
                  <TeamIcon size={32} color="currentColor" /> Self-Managed
                </h2>
                <p>Self-hosted on your own infrastructure</p>
              </Tab>
              <div className="pure-u-1 pure-u-md-1-4" />
            </TabList>
            <TabPanel>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Price tier
                      <span className="note">(annual pricing available)</span>
                    </td>
                    <td className="price">
                      $10 <span className="period">per month</span>
                      <p className="cta">
                        <Button href="https://app.getoutline.com/create?ref=starter">
                          Start Trial
                        </Button>
                      </p>
                    </td>
                    <td className="price">
                      $79 <span className="period">per month</span>
                      <p className="cta">
                        <Button href="https://app.getoutline.com/create?ref=team">
                          Start Trial
                        </Button>
                      </p>
                    </td>
                    <td className="price">
                      $249 <span className="period">per month</span>
                      <p className="cta">
                        <Button href="https://app.getoutline.com/create?ref=business">
                          Start Trial
                        </Button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>No. team members</td>
                    <td>
                      <strong>1 – 10</strong>
                    </td>
                    <td>
                      <strong>11 – 100</strong>
                    </td>
                    <td>
                      <strong>101 – 200</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="No limitations on the number of documents and revisions"
                      >
                        Unlimited docs + version history
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Multiple people can collaborate and edit documents at the same time"
                      >
                        Realtime collaborative editing
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Leave comments on documents and mention other users"
                      >
                        Commenting + @mentions
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Ask questions and get direct answers from your workspace content"
                      >
                        AI question answering
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Outline is available in 17 different languages"
                      >
                        Multi-language translation
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Enforce your company's security policies with SSO"
                      >
                        SSO authentication
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Connect to other tools like Slack, GitHub, and more"
                      >
                        20+ integrations (inc Zapier)
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Create document templates for your team to use"
                      >
                        Templating
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Control who can access and edit documents through groups and individual permissions"
                      >
                        Groups + user permissions
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Programmatically interact with every part of Outline using the API"
                      >
                        API + webhooks
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Track and filter edits and user activity in the workspace"
                      >
                        Security audit log
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Email support</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Community Edition</th>
                    <th>Business</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td className="price">
                      $0{" "}
                      <span className="period">
                        limited features, no support
                      </span>
                      <p className="cta">
                        <Button
                          href="https://hub.docker.com/r/outlinewiki/outline"
                          light
                        >
                          Download
                        </Button>
                      </p>
                    </td>
                    <td className="price">
                      $4<span style={{ fontSize: "0.75em" }}>/user/mo</span>
                      <span className="period">billed annually</span>
                      <p className="cta">
                        <Button href="/contact?business=true">Purchase</Button>
                      </p>
                    </td>
                    <td className="price">
                      $5<span style={{ fontSize: "0.75em" }}>/user/mo</span>
                      <span className="period">
                        billed annually, 100 user min
                      </span>
                      <p className="cta">
                        <Button href="/contact?trial=true">
                          Request Trial
                        </Button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="No limitations on the number of documents and revisions"
                      >
                        Unlimited docs + version history
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Multiple people can collaborate and edit documents at the same time"
                      >
                        Realtime collaborative editing
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Leave comments on documents and mention other users"
                      >
                        Commenting + @mentions
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Outline is available in 17 different languages"
                      >
                        Multi-language translation
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Enforce your company's security policies with SSO"
                      >
                        SSO authentication
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Connect to other tools like Slack, GitHub, and more"
                      >
                        20+ integrations (inc Zapier)
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Create document templates for your team to use"
                      >
                        Templating
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Control who can access and edit documents through groups and individual permissions"
                      >
                        Groups + user permissions
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Programmatically interact with every part of Outline using the API"
                      >
                        API + webhooks
                      </SimpleTooltip>
                    </td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="OpenAI integration allows asking questions and getting direct answers from your workspace content"
                      >
                        AI question answering
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Guest users have access only to content explicitly shared with them"
                      >
                        Guest users
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Restrict sign-in to specific email domains and methods"
                      >
                        Additional security controls
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Authenticate users with any compatible SAML 2.0 provider"
                      >
                        SAML 2.0 (e.g. Okta, OneLogin)
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Import Confluence spaces into Outline"
                      >
                        Confluence importer
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Search across your Outline documents from within Glean"
                      >
                        Glean integration
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Track and filter edits and user activity in the workspace"
                      >
                        Security audit log
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>
                      <SimpleTooltip
                        className="feature"
                        content="Complete control over the branding of your Outline instance"
                      >
                        Remove "Outline" branding
                      </SimpleTooltip>
                    </td>
                    <td></td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Support contract</td>
                    <td></td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
          </div>
        </Tabs>

        <h2>Pricing questions</h2>

        <dl className="pure-g">
          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>How does the free trial work?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              When you create a team your first 30 days are free. Once this
              trial period elapses your knowledge base becomes read-only until a
              payment method is added. During this time you can export all of
              your documents.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>What about teams larger than 200 users?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              We're happy to support cloud-hosted teams larger than 200 users.
              Please{" "}
              <Link href="/contact" legacyBehavior>
                <a>contact us</a>
              </Link>{" "}
              to discuss pricing.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>
              Do you have discounts for non-profits or educational institutions?
            </h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              Yep, absolutely – a 30% discount is available for non-profit and
              education. We’re also happy to sponsor accounts for non-profits
              working directly on solving climate change. Please{" "}
              <Link href="/contact" legacyBehavior>
                <a>contact us</a>
              </Link>{" "}
              for more details.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>How do I choose a specific plan?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              Currently plans are based on the number of members in your team.
              If your team outgrows your plan then it will automatically move to
              the next pricing tier.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>Wait, you didn’t answer my question?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              <Link href="/contact" legacyBehavior>
                <a>Reach out</a>
              </Link>{" "}
              with your question and we will be sure to answer within a working
              day.
            </p>
          </dd>
        </dl>
      </div>
      <style jsx global>
        {`
          .feature {
            border: 0;
            margin: 0;
            padding: 8px 0;
            border-bottom: 1px transparent solid;
            background: none;
            font-weight: 500;
            cursor: help;
          }

          .feature:hover {
            border-bottom: 1px dashed ${colors.text};
          }

          .tabs {
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
            font-size: 0.8em;
          }

          .tabs li {
            padding: 8px 16px;
            margin: 4px 10px;
            border: 2px solid ${colors.grey};
            border-radius: 4px;
            color: ${colors.textSecondary};
            display: inline-block;
            cursor: pointer;
          }

          .tabs li:hover {
            border-color: ${colors.greyMid};
          }

          .tabs h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.5em 0;
            color: ${colors.text};
          }

          .tabs li[aria-selected="true"] {
            border-color: ${colors.primary};
          }
        `}
      </style>
      <style jsx>
        {`
          .cta {
            margin: 0.5em;
            font-size: 0.75em;
          }

          .get-started {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 220px;
          }

          table {
            width: 100%;
            margin: 4em 0;
            overflow-x: auto;
          }

          table th {
            border-top-left-radius: ${spacing.small};
            border-top-right-radius: ${spacing.small};
          }

          table tr:last-child td {
            border-bottom-left-radius: ${spacing.small};
            border-bottom-right-radius: ${spacing.small};
          }

          table th,
          table td {
            text-align: center;
            vertical-align: middle;
            padding: ${spacing.medium};
          }

          table td:first-child {
            text-align: left;
            font-weight: 500;
            padding-left: 0;
          }

          table td:nth-child(2),
          table th:nth-child(2) {
            background: ${colors.lightGrey};
          }

          table td:nth-child(4),
          table th:nth-child(4) {
            background: ${colors.lightGrey};
          }

          .soon {
            color: ${colors.textSecondary};
          }

          .price {
            font-size: 2em;
          }

          .period {
            display: block;
            font-size: 0.35em;
          }

          .note {
            display: block;
            font-size: 0.75em;
            margin-top: ${spacing.small};
          }

          dl {
            margin-bottom: ${spacing.large};
          }

          dl dt {
            padding-right: 2em;
          }

          dl dt h3 {
            line-height: 1.4;
          }

          dl dd {
            margin: 0 0 2em;
            line-height: 1.4;
          }
        `}
      </style>
    </Layout>
  );
}
