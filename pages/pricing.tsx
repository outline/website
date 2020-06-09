import Head from "next/head";
import { CheckmarkIcon } from "outline-icons";
import Layout from "components/Layout";
import Hero from "components/Hero";

export default function Pricing() {
  const check = <CheckmarkIcon className="icon" />;

  return (
    <Layout
      title="Pricing"
      background="#F4F7FA"
      header={
        <>
          <h1>Pricing</h1>
          <Hero>
            Our pricing is simple. All plans come with a 30 day trial.
          </Hero>
        </>
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
              <td>Monthly price</td>
              <td className="price">$10</td>
              <td className="price">$79</td>
              <td className="price">$199</td>
            </tr>
            <tr>
              <td>Max team members</td>
              <td>10</td>
              <td>100</td>
              <td>250</td>
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
              <td>API access</td>
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
              <td>Priority support</td>
              <td></td>
              <td></td>
              <td>{check}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          table {
            width: 100%;
            margin: 4em 0;
          }

          table th {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }

          table tr:last-child td {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          table th,
          table td {
            text-align: center;
            padding: 16px;
          }

          table td:first-child {
            text-align: left;
            font-weight: 500;
            padding-left: 0;
          }

          table td:nth-child(2),
          table th:nth-child(2) {
            background: #f4f7fa;
          }

          table td:nth-child(4),
          table th:nth-child(4) {
            background: #f4f7fa;
          }

          .price {
            font-size: 2em;
          }

          .icon {
            background: blue;
            border-radius: 50%;
          }
        `}
      </style>
    </Layout>
  );
}
