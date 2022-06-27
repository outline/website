import * as React from "react";
import fetch from "isomorphic-fetch";
import { RedocStandalone } from "redoc";
import Layout from "components/Layout";
import { colors, typography } from "../theme";

export default function Developers({ spec }) {
  return (
    <Layout
      title="Developers"
      background="#F4F7FA"
      hero="Outline is built on an open, best-in-class, RPC API. Easily
      integrate the creation and publishing of documents into your teams
      workflows."
    >
      <div className="container">
        <RedocStandalone
          spec={spec}
          options={{
            nativeScrollbars: true,
            disableSearch: true,
            hideDownloadButton: true,
            hideLoading: true,
            menuToggle: true,
            requiredPropsFirst: true,
            hideSecuritySection: true,
            theme: {
              spacing: {
                unit: 4,
              },
              breakpoints: {
                small: "50rem",
                medium: "1000rem",
                large: "1000rem",
              },
              colors: {
                primary: {
                  main: colors.primary,
                },
                gray: {
                  50: colors.lightGrey,
                  100: colors.greyDark,
                },
                text: {
                  primary: colors.almostBlack,
                  secondary: colors.greyMid,
                },
                error: {
                  main: colors.brand.red,
                },
              },
              typography: {
                fontSize: "16px",
                fontFamily: typography.fontFamily,
                headings: {
                  fontFamily: typography.fontFamily,
                  fontWeight: "500",
                  lineHeight: "inherit",
                },
                code: {
                  fontFamily: typography.fontFamilyMono,
                  color: colors.brand.red,
                },
              },
              sidebar: {
                width: "20%",
                backgroundColor: colors.white,
                textColor: colors.black,
              },
            },
          }}
        />
      </div>
      <style jsx global>{`
        .redoc-wrap .token.boolean {
          color: ${colors.brand.red} !important;
        }

        .redoc-wrap .token.number {
          color: ${colors.brand.marine} !important;
        }

        .redoc-wrap .token.string {
          color: ${colors.brand.green} !important;
        }

        .redoc-wrap .token.keyword {
          color: ${colors.brand.pink} !important;
        }

        .redoc-wrap .api-content {
          margin-top: -42px;
        }

        .redoc-wrap .api-info,
        .redoc-wrap .operation-type,
        .redoc-wrap .menu-content ul + div {
          display: none;
        }

        .redoc-wrap .menu-content {
          transform: translateX(-13px);
        }

        .redoc-wrap .menu-content label {
          -webkit-font-smoothing: initial;
          text-rendering: initial;
          font-size: 16px;
          border-radius: 4px;
        }

        .redoc-wrap .menu-content ul li ul li label {
          font-size: 14px;
          color: ${colors.almostBlack};
          padding-left: 24px;
        }

        .redoc-wrap .menu-content ul li ul li label span {
          white-space: no-wrap;
          width: 100%;
        }

        .redoc-wrap h1 {
          color: ${colors.almostBlack};
          margin: 1em 0 -0.5em;
        }

        .redoc-wrap h1,
        .redoc-wrap h2,
        .redoc-wrap h3,
        .redoc-wrap h4 {
          font-family: "HK Grotesk";
          font-weight: 600;
        }

        .redoc-wrap h5,
        .redoc-wrap a[href="#section/Authentication/http"] {
          display: none;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/outline/openapi/develop/spec3.json"
  );
  const spec = await res.json();

  return {
    props: {
      spec,
    },
  };
}
