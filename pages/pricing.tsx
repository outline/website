import Link from "next/link";
import Button from "components/Button";
import { CloudIcon, TeamIcon, CheckmarkIcon } from "outline-icons";
import Layout from "components/Layout";
import { spacing, colors } from "theme";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

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
                    <td>Unlimited docs + version history</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Realtime collaborative editing</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Multi-language translation</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>SSO authentication</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>20+ integrations</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Templates</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Groups &amp; user permissions</td>
                    <td>{check}</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>API + Webhooks</td>
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
                  <tr>
                    <td>Event log</td>
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
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Price
                      <span className="note">(min purchase of 100 seats)</span>
                    </td>
                    <td className="price">
                      $0{" "}
                      <span className="period">
                        limited features and support
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
                      $4/user/mo <span className="period">billed annually</span>
                      <p className="cta">
                        <Button href="/contact">Request Trial</Button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited docs + version history</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Realtime collaborative editing</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Multi-language translation</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Monthly improvements</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>All integrations</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Templates</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Groups &amp; user permissions</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>API + Webhooks</td>
                    <td>{check}</td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>SAML 2.0 (Okta, OneLogin)</td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Confluence importer</td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Audit trail</td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Setup and maintenance support</td>
                    <td></td>
                    <td>{check}</td>
                  </tr>
                  <tr>
                    <td>Analytics and reporting</td>
                    <td></td>
                    <td className="soon">coming soon</td>
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
              We're happy to support enterprise teams larger than 200 users.
              Please{" "}
              <Link href="/contact">
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
              education. We’re also happy to sponsor accounts for non-profts
              working directly on solving climate change. Please{" "}
              <Link href="/contact">
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
              <Link href="/contact">
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
