import Link from "next/link";
import Button from "components/Button";
import { CheckmarkIcon } from "outline-icons";
import Layout from "components/Layout";
import Hero from "components/Hero";
import { spacing, colors } from "theme";

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
            <Hero>
              Our pricing is simple, flexible and fair. All accounts come with a
              30 day trial with no credit card required.
            </Hero>
          </div>
          <div className="pure-u-1 pure-u-md-3-5 ">
            <div className="get-started">
              <Button href="//app.getoutline.com">
                Get Started for Free &rarr;
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <div className="container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Starter</th>
              <th>Team</th>
              <th>Business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Monthly price
                <span className="note">(annual pricing available)</span>
              </td>
              <td className="price">
                $10 <span className="period">per month</span>
              </td>
              <td className="price">
                $79 <span className="period">per month</span>
              </td>
              <td className="price">
                $249 <span className="period">per month</span>
              </td>
            </tr>
            <tr>
              <td>No. team members</td>
              <td>1 – 10</td>
              <td>11 – 100</td>
              <td>101 – 250</td>
            </tr>
            <tr>
              <td>Unlimited documents</td>
              <td>{check}</td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Unlimited version history</td>
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
              <td>All integrations</td>
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
              <td>Groups &amp; permissions</td>
              <td>{check}</td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Full API access</td>
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
              <td>Audit trail</td>
              <td></td>
              <td>{check}</td>
              <td>{check}</td>
            </tr>
            <tr>
              <td>Priority support</td>
              <td></td>
              <td></td>
              <td>{check}</td>
            </tr>
          </tbody>
        </table>

        <h2>Pricing questions</h2>

        <dl className="pure-g">
          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>How does the free trial work?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              When you start your trial, your first 30 days are free. Once this
              trial period elapses your knowledge base becomes read-only until a
              payment method is added. During this time you can export all of
              your documents.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>What about teams larger than 250 users?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              We're happy to support enterprise teams larger than 250 users.
              Please{" "}
              <Link href="/contact">
                <a>contact us</a>
              </Link>{" "}
              to discuss pricing options.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>Do you have an on-premises solution?</h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              Yes – Outline can easily be installed behind your firewall or on
              your own AWS account. Our enterprise edition also includes support
              for SAML authentication. Please{" "}
              <Link href="/contact">
                <a>contact us</a>
              </Link>{" "}
              for more details.
            </p>
          </dd>

          <dt className="pure-u-1 pure-u-md-1-2">
            <h3>
              Do you have discounts for non-profits or educational institutions?
            </h3>
          </dt>
          <dd className="pure-u-1 pure-u-md-1-2">
            <p>
              Yep, absolutely – we’re also happy to sponsor accounts for
              companies working on solving climate change. Please{" "}
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
              Reach out <a href="mailto:hello@getoutline.com">by email</a> with
              your question and we will be sure to answer within a working day.
            </p>
          </dd>
        </dl>
      </div>
      <style jsx>
        {`
          .get-started {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 220px;
          }

          table {
            width: 100%;
            margin: 4em 0;
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
