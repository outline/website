import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/Button";
import { CloudIcon, TeamIcon, CheckmarkIcon } from "outline-icons";
import Layout from "components/Layout";
import { spacing, colors } from "theme";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SimpleTooltip } from "components/ui/Tooltip";
import pricing from "lib/pricing.json";

type Plan = typeof pricing.cloud | typeof pricing.selfHosted;

const { cloud, selfHosted } = pricing;

export default function Pricing() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get the defaultIndex from query param on client side
  useEffect(() => {
    const plan = router.query.plan;
    if (plan === "on-premises") {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(0);
    }
  }, [router.query.plan]);

  const updateQueryString = (index: number) => {
    const plan = index === 0 ? "cloud" : "on-premises";
    router.replace({ pathname: router.pathname, query: { plan } }, undefined, {
      shallow: true,
    });
    setSelectedIndex(index);
  };

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
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={updateQueryString}
          // Both plans are rendered into the static HTML, rather than only the
          // selected one, so that self-hosted pricing can be read without
          // running JavaScript or clicking the tab.
          forceRenderTabPanel
        >
          <div className="container">
            <TabList className="tabs pure-g">
              <div className="pure-u-1 pure-u-md-1-4" />
              <Tab className="pure-u-1 pure-u-md-1-4">
                <h2>
                  <CloudIcon size={32} color="currentColor" /> {cloud.name}
                </h2>
                <p>{cloud.summary}</p>
              </Tab>
              <Tab className="pure-u-1 pure-u-md-1-4">
                <h2>
                  <TeamIcon size={32} color="currentColor" /> {selfHosted.name}
                </h2>
                <p>{selfHosted.summary}</p>
              </Tab>
              <div className="pure-u-1 pure-u-md-1-4" />
            </TabList>
            {[cloud, selfHosted].map((plan) => (
              <TabPanel key={plan.id}>
                <PlanTable plan={plan} />
              </TabPanel>
            ))}
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

          .react-tabs__tab-panel:not(.react-tabs__tab-panel--selected) {
            display: none;
          }
        `}
      </style>
      <style jsx>
        {`
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

function PlanTable({ plan }: { plan: Plan }) {
  return (
    <>
      <h3 className="visually-hidden">
        {plan.name} plans – {plan.summary}
      </h3>
      <table>
        <thead>
          <tr>
            <th>
              <span className="visually-hidden">Plan</span>
            </th>
            {plan.tiers.map((tier) => (
              <th key={tier.id}>{tier.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {plan.priceLabel}{" "}
              {"priceNote" in plan && (
                <span className="note">({plan.priceNote})</span>
              )}
            </td>
            {plan.tiers.map((tier) => (
              <td key={tier.id} className="price">
                {tier.price}
                {"unit" in tier && (
                  <span style={{ fontSize: "0.75em" }}>{tier.unit}</span>
                )}{" "}
                <span className="period">{tier.period}</span>
                <p className="cta">
                  <Button
                    href={tier.cta.href}
                    light={"light" in tier.cta && tier.cta.light}
                  >
                    {tier.cta.label}
                  </Button>
                </p>
              </td>
            ))}
          </tr>
          {plan.tiers.some((tier) => "members" in tier) && (
            <tr>
              <td>No. team members</td>
              {plan.tiers.map((tier) => (
                <td key={tier.id}>
                  <strong>{"members" in tier && tier.members}</strong>
                </td>
              ))}
            </tr>
          )}
          {plan.features.map((feature) => (
            <tr key={feature.name}>
              <td>
                {"description" in feature ? (
                  <SimpleTooltip
                    className="feature"
                    content={feature.description}
                  >
                    {feature.name}
                    {/* Tooltips only exist on hover, so the description is
                        repeated for screen readers and agents. */}
                    <span className="visually-hidden">
                      {" "}
                      – {feature.description}
                    </span>
                  </SimpleTooltip>
                ) : (
                  feature.name
                )}
              </td>
              {plan.tiers.map((tier) => (
                <td key={tier.id}>
                  {feature.tiers.includes(tier.id) ? (
                    <>
                      <CheckmarkIcon className="icon" />
                      <span className="visually-hidden">Included</span>
                    </>
                  ) : (
                    <span className="visually-hidden">Not included</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>
        {`
          .cta {
            margin: 0.5em;
            font-size: 0.75em;
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
        `}
      </style>
    </>
  );
}
