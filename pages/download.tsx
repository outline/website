import * as React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import { colors } from "theme";
import { isWindows } from "lib/browser";

export default function Download() {
  return (
    <Layout pageTitle="Download App">
      <div className="container">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-3"></div>
          <div className="pure-u-1 pure-u-md-1-3 dl">
            <p className="icon">
              <img src="/images/icon-desktop.png" width={128} height={128} />
            </p>
            <Button href="https://desktop.getoutline.com">
              Download for {isWindows() ? "Windows" : "macOS"}
            </Button>
            <p>
              {isWindows()
                ? "Compatible with Windows 10 and 11"
                : "Compatible with Apple Silicon and Intel"}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon {
          margin-bottom: 2em;
        }

        .dl {
          margin-top: 40vh;
          text-align: center;
          transform: translateY(-50%);
        }

        .dl p {
          font-size: 0.9em;
          color: ${colors.textSecondary};
          user-select: none;
        }
      `}</style>
    </Layout>
  );
}
