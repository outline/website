import * as React from "react";
import { spacing, colors } from "theme";

export default function Table(props) {
  return (
    <>
      <table {...props} />
      <style jsx>
        {`
          table {
            width: 100%;
            margin: 4em 0;
            overflow-x: auto;
            text-align: left;
          }

          table :global(tr td:first-child) {
            border-top-left-radius: ${spacing.small};
            border-bottom-left-radius: ${spacing.small};
          }

          table :global(tr td:last-child) {
            border-top-right-radius: ${spacing.small};
            border-bottom-right-radius: ${spacing.small};
          }

          table :global(th),
          table :global(td) {
            text-align: center;
            padding: ${spacing.medium};
          }

          table :global(td:first-child) {
            text-align: left;
            font-weight: 500;
          }

          table :global(tr:nth-child(even) td) {
            background: ${colors.lightGrey};
          }
        `}
      </style>
    </>
  );
}
