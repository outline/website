import * as React from "react";

export default function Screenshot({ maxWidth = 1140 }: { maxWidth?: number }) {
  return (
    <>
      <div className="screenshot-wrapper">
        <img
          src="/images/screenshot.png"
          alt="Outline screenshot"
          className="screenshot"
        />
      </div>
      <style jsx>
        {`
          .screenshot {
            max-width: ${maxWidth}px;
            width: 90vw;
            box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
          }

          .screenshot-wrapper {
            padding: 24px 24px 48px;
            margin-bottom: 0;
            border-radius: 12px;
            max-width: 100vw;
            margin-left: 6em;
            margin-right: 6em;
          }
        `}
      </style>
    </>
  );
}
