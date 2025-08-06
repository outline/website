import * as React from "react";
import Button from "components/Button";
import { colors } from "theme";

export default function GetStarted({ centered }: { centered?: boolean }) {
  return (
    <>
      <p className={centered !== false ? "centered" : ""}>
        <span>
          <Button href="https://app.getoutline.com/create">
            Get started for free &rarr;
          </Button>
          <small className="note">Cloud hosted, 30-day free trial</small>
        </span>
        <span>
          <Button
            href="https://docs.getoutline.com/s/hosting"
            target="_blank"
            light
          >
            Deploy on-premise
          </Button>
          <small className="note">Self-hosted on your own server</small>
        </span>
      </p>
      <style jsx>
        {`
          .centered {
            text-align: center;
            display: flex;
            gap: 16px;
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
