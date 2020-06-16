import * as React from "react";
import fetch from "isomorphic-fetch";
import { RedocStandalone } from 'redoc';
import Hero from "components/Hero";
import Layout from "components/Layout";
import { colors, typography } from "../theme"

export default function Developers({ spec }) {
  console.log({ spec })
  return (
    <Layout
      title="Developers"
      background="#F4F7FA"
      header={
        <div className="pure-grid">
          <div className="pure-u-1 pure-u-md-2-5">
            <h1>Developers</h1>
            <Hero>
              Outline is built on an open, best-in-class, RPC API. Easily integrate
              the creation and publishing of documents into your teams workflows.
            </Hero>
          </div>
          <div className="pure-u-1 pure-u-md-3-5">
            <img src="/images/robot.png" />
          </div>
        </div>
      }
    >
      <div className="pure-grid container">
        <RedocStandalone spec={spec} options={{
          nativeScrollbars: true,
          disableSearch: true,
          hideDownloadButton: true,
          menuToggle: true,
          noAutoAuth: true,
          requiredPropsFirst: true,
          theme: {
            spacing: {
              unit: 4
            },
            breakpoints: {
              small: '50rem',
              medium: '1000rem',
              large: '1000rem',
            },
            colors: {
              primary: {
                main: colors.primary
              },
              gray: {
                50: colors.lightGrey,
                100: colors.greyDark
              },
              text: {
                primary: colors.almostBlack,
                secondary: colors.greyMid
              },
            },
            typography: {
              fontSize: '16px',
              fontFamily: typography.fontFamily,
              headings: {
                fontFamily: typography.fontFamily,
                fontWeight: '500',
                lineHeight: 'inherit',
              }
            },
            sidebar: {
              width: '20%',
              backgroundColor: colors.white,
              textColor: colors.black
            }
          },
        }} />
      </div>
      <style jsx>
        {`
          img {
            height: 200px;
            float: right;
            opacity: 0.95;
          }

          :global(.redoc-wrap .api-content) {
            margin-top: -42px;
          }

          :global(.redoc-wrap .api-info),
          :global(.redoc-wrap .operation-type),
          :global(.redoc-wrap .menu-content ul+div)  {
            display: none;
          }

          :global(.redoc-wrap .menu-content)  {
            transform: translateX(-13px);
          }

          :global(.redoc-wrap .menu-content label) {
            -webkit-font-smoothing: initial;
            text-rendering: initial;
            font-size: 16px;
            border-radius: 4px;
          }

          :global(.redoc-wrap .menu-content ul li ul li label) {
            font-size: 14px;
            color: ${colors.almostBlack};
          }

          :global(.redoc-wrap .menu-content ul li ul li label span) {
            white-space: no-wrap;
            width: 100%;
          }

          :global(.redoc-wrap h1) {
            color: ${colors.almostBlack};
            margin-bottom: 0;
          }

          :global(.redoc-wrap h1),
          :global(.redoc-wrap h2),
          :global(.redoc-wrap h3),
          :global(.redoc-wrap h4) {
            font-family: "HK Grotesk";
            font-weight: 600;
          }
        `}
      </style>
    </Layout>
  )
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
