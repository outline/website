import * as React from "react";
import Button from "components/Button";
import { colors } from "theme";

export default function GetStarted({ centered }: { centered?: boolean }) {
  return (
    <>
      <p className={centered !== false ? "buttons centered" : "buttons"}>
        <span>
          <Button href="https://app.getoutline.com/create">
            Get started for free &rarr;
          </Button>{" "}
          <small className="note">Cloud hosted, 30-day free trial</small>
        </span>{" "}
        <span>
          <Button
            href="https://docs.getoutline.com/s/hosting"
            target="_blank"
            light
          >
            Deploy on-premises
          </Button>{" "}
          <small className="note">Self-hosted on your own server</small>
        </span>
      </p>
      <style jsx>
        {`
          .buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }

          .centered {
            text-align: center;
            justify-content: center;
          }

          @media (max-width: 48em) {
            .centered {
              flex-direction: column;

              a {
                width: calc(100vw - 32px);
                display: block;
              }
            }
          }

          .note {
            display: block;
            font-size: 0.75em;
            margin-top: 1em;
            color: ${colors.textSecondary};
          }
        `}
      </style>
    </>
  );
}
