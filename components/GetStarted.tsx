import * as React from "react";
import Button from "components/Button";
import { colors } from "theme";

export default function GetStarted({ centered }: { centered?: boolean }) {
  return (
    <>
      <p className={centered !== false ? "centered" : ""}>
        <Button href="https://app.getoutline.com/create">
          Get Started for Free &rarr;
        </Button>
        <small className="note">30-day trial, no credit card required</small>
      </p>
      <style jsx>
        {`
          .centered {
            text-align: center;
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
