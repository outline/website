import * as React from "react";
import fetch from "isomorphic-fetch";
import { RedocStandalone } from 'redoc';
import Hero from "components/Hero";
import Layout from "components/Layout";
import DevelopersMenu from "components/DevelopersMenu";
import { colors, typography } from "../../theme"

export default function Resources({ spec }) {
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
              Outline is built on an open, best-in-class, RPC API. Integrate
              creation and publishing of documents in the knowledge base into your
              companies workflows.
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
          hideDownloadButton: true,
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
                secondary: colors.greyDark
              },
            },
            typography: {
              fontSize: '16px',
              fontFamily: typography.fontFamily,
              headings: {
                fontFamily: typography.fontFamily,
                fontWeight: 'inherit',
                lineHeight: 'inherit',
              }
            },
            sidebar: {
              width: '20%',
              backgroundColor: colors.white,
              textColor: colors.almostBlack
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

          :global(.redoc-wrap .api-info),
          :global(.redoc-wrap .operation-type) {
            display: none;
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
