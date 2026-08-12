import * as React from "react";
import { colors, spacing } from "theme";

export default function SocialProof() {
  return (
    <>
      <section className="social-proof" aria-label="Social proof">
        <div className="stats">
          <div className="stat">
            <span className="value">10,000+</span>
            <span className="label">companies</span>
          </div>
          <div className="divider" aria-hidden="true" />
          <a
            className="stat link"
            href="https://github.com/outline/outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="value">40k</span>
            <span className="label">GitHub stars</span>
          </a>
        </div>
      </section>
      <style jsx>{`
        .social-proof {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: ${spacing.large} ${spacing.medium}
            ${spacing.xlarge};
        }

        .stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${spacing.xlarge};
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          min-width: 140px;
        }

        .link:hover .value,
        .link:focus .value {
          color: ${colors.primary};
        }

        .link:hover .label,
        .link:focus .label {
          color: ${colors.primary};
        }

        .value {
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: ${colors.almostBlack};
          transition: color 0.15s ease;
        }

        .label {
          margin-top: ${spacing.small};
          font-size: 1rem;
          color: ${colors.textSecondary};
          transition: color 0.15s ease;
        }

        .divider {
          width: 1px;
          height: 48px;
          background: ${colors.greyMid};
        }

        @media (max-width: 48em) {
          .social-proof {
            padding: ${spacing.medium} ${spacing.medium} ${spacing.large};
          }

          .stats {
            gap: ${spacing.large};
          }

          .divider {
            display: none;
          }

          .value {
            font-size: 2rem;
          }

          .stat {
            min-width: 120px;
          }
        }
      `}</style>
    </>
  );
}
