import Link from "next/link";
import IntegrationIcon from "components/IntegrationIcon";
import IntegrationTag from "components/IntegrationTag";
import { Integration, pageHref } from "lib/integrations";
import { colors } from "theme";

type Props = {
  integration: Integration;
  /** A denser single-row layout, used for the long list of embed providers. */
  compact?: boolean;
};

/**
 * Mirrors the card on the in-app Settings → Integrations screen: icon, name
 * and a benefit-led description, with a neutral call to action on the right.
 */
export default function IntegrationCard({ integration, compact }: Props) {
  const className = compact ? "card compact" : "card";

  const content = compact ? (
    <>
      <IntegrationIcon integration={integration} size={28} />
      <div className="body">
        <div className="name">{integration.name}</div>
        <p className="description">{integration.description}</p>
      </div>
    </>
  ) : (
    <>
      <div className="top">
        <IntegrationIcon integration={integration} size={32} />
        {integration.hasPage && <span className="action">Learn more</span>}
      </div>
      <div className="name">
        {integration.name}
        <IntegrationTag integration={integration} />
      </div>
      <p className="description">{integration.description}</p>
    </>
  );

  return (
    <>
      {integration.hasPage ? (
        <Link href={pageHref(integration)} legacyBehavior>
          <a className={className}>{content}</a>
        </Link>
      ) : (
        <div className={className}>{content}</div>
      )}
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px;
          background: ${colors.white};
          border: 1px solid ${colors.greyDark};
          border-radius: 8px;
          color: ${colors.text};
          text-decoration: none;
          transition: box-shadow 200ms ease, border-color 200ms ease;
        }

        a.card:hover,
        a.card:focus-visible {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px,
            rgba(0, 0, 0, 0.06) 0px 4px 8px;
          outline: none;
        }

        a.card:hover :global(.action) {
          background: ${colors.lightGrey};
        }

        .card :global(.top) {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .card :global(.action) {
          padding: 4px 12px;
          border: 1px solid ${colors.greyDark};
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          white-space: nowrap;
          transition: background 150ms ease;
        }

        .card :global(.name) {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card :global(.description) {
          margin: 6px 0 0;
          font-size: 15px;
          line-height: 1.5;
          color: ${colors.textSecondary};
        }

        .card.compact {
          flex-direction: row;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
        }

        .card.compact :global(.body) {
          min-width: 0;
        }

        .card.compact :global(.name) {
          font-size: 15px;
        }

        .card.compact :global(.description) {
          margin-top: 1px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
