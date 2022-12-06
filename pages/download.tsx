import * as React from "react";
import Layout from "components/Layout";
import Button from "components/Button";
import { colors } from "theme";
import { isWindows } from "lib/browser";
import Image from "next/image";

export default function Download() {
  return (
    <Layout pageTitle="Download App">
      <div className="container">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-3"></div>
          <div className="pure-u-1 pure-u-md-1-3 dl">
            <p className="icon">
              <Image src="/images/icon-512.png" width={128} height={128} />
            </p>
            <Button href="https://desktop.getoutline.com">
              Download for macOS
            </Button>
            <p>
              {isWindows()
                ? "Windows app coming soon"
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