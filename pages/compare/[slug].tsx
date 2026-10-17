import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import ComparisonTable from "components/ComparisonTable";
import GetStarted from "components/GetStarted";
import Layout from "components/Layout";
import Screenshot from "components/Screenshot";
import SocialProof from "components/SocialProof";
import { Comparison, pageHref } from "lib/comparisons";
import { getComparison, getComparisons } from "lib/comparisons.server";
import { colors, spacing } from "theme";

type Props = {
  comparison: Comparison;
};

export default function ComparisonPage({ comparison }: Props) {
  const {
    competitor,
    description,
    pageTitle,
    title,
    intro,
    highlights,
    features,
    table,
    migration,
    pricing,
    testimonial,
    faq,
    closing,
    updatedAt,
  } = comparison;

  return (
    <Layout
      title={<span className="hero-title">{title}</span>}
      pageTitle={pageTitle}
      description={description}
      background="#F4F7FA"
      hero={
        <>
          <p>{intro}</p>
          <GetStarted centered={false} />
        </>
      }
      illustration={<Screenshot maxWidth={1000} />}
    >
      {faq?.length > 0 && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              }),
            }}
          />
        </Head>
      )}

      <SocialProof />

      {highlights?.length > 0 && (
        <section className="container section">
          <h2>Where Outline goes further than {competitor}</h2>
          <div className="highlights">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="highlight">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {features?.length > 0 && (
        <div className="pure-g container">
          {features.map((feature, index) => {
            const text = (
              <div className="pure-u-1 pure-u-md-2-5 feature">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            );
            const image = (
              <div className="pure-u-1 pure-u-md-3-5">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className={`feature-screenshot ${
                    index % 2 ? "left" : "right"
                  }`}
                />
              </div>
            );

            return (
              <Fragment key={feature.title}>
                {index % 2 ? image : text}
                {index % 2 ? text : image}
              </Fragment>
            );
          })}
        </div>
      )}

      <div className="container">
        <h2 className="visually-hidden">
          Outline vs {competitor}, feature by feature
        </h2>
        <ComparisonTable competitor={competitor} groups={table} />
      </div>

      {migration && (
        <section className="container section narrow">
          <h2>{migration.title}</h2>
          <p>{migration.description}</p>
          {migration.href && (
            <p>
              <a href={migration.href}>
                {migration.linkText ?? "Learn more"} &rarr;
              </a>
            </p>
          )}
        </section>
      )}

      {pricing && (
        <section className="container section narrow">
          <h2>{pricing.title}</h2>
          <p>{pricing.description}</p>
          <p>
            <Link href="/pricing" legacyBehavior>
              <a>See Outline pricing &rarr;</a>
            </Link>
          </p>
        </section>
      )}

      {testimonial && (
        <figure className="container section narrow testimonial">
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            {testimonial.author}
            {testimonial.role && <span>, {testimonial.role}</span>}
          </figcaption>
        </figure>
      )}

      {faq?.length > 0 && (
        <section className="container section narrow">
          <h2>Frequently asked questions</h2>
          {faq.map((item) => (
            <div key={item.question} className="question">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}

      <div className="container">
        <p className="description">{closing}</p>
        <GetStarted />
        {updatedAt && (
          <p className="updated">
            Comparison last updated{" "}
            <time dateTime={updatedAt}>
              {new Date(updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </p>
        )}
      </div>

      <style jsx>{`
        .hero-title {
          display: block;
          padding-top: 2em;
        }

        .section {
          margin-bottom: 4em;
        }

        .section h2 {
          font-size: 2.2em;
          line-height: 1.2;
        }

        .narrow {
          max-width: 760px;
        }

        .narrow p {
          font-size: 1.2em;
          line-height: 1.5;
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: ${spacing.large};
        }

        .highlight h3 {
          font-size: 1.4em;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .highlight p {
          color: ${colors.textSecondary};
        }

        .testimonial blockquote {
          margin: 0;
          font-family: "HK Grotesk";
          font-size: 1.8em;
          font-weight: 500;
          line-height: 1.3;
        }

        .testimonial figcaption {
          margin-top: ${spacing.medium};
          color: ${colors.textSecondary};
        }

        .question h3 {
          font-size: 1.3em;
          line-height: 1.3;
          margin-bottom: 0;
        }

        .description {
          line-height: 1.5;
          text-align: center;
          font-size: 1.5rem;
          color: ${colors.textSecondary};
        }

        .updated {
          text-align: center;
          font-size: 0.9em;
          color: ${colors.textSecondary};
        }

        .feature-screenshot {
          padding: 2em;
          width: 100%;
        }

        .feature-screenshot.left {
          margin-left: -4em;
        }

        .feature-screenshot.right {
          margin-left: 4em;
        }

        .feature {
          margin-bottom: 4em;
        }

        .feature h2 {
          font-size: 1.8em;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .feature p {
          font-size: 1.8em;
          letter-spacing: 0.01em;
          font-family: "HK Grotesk";

          margin-top: 0.5em;
          font-weight: 500;
          line-height: 1.2;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getComparisons().map(pageHref);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  return {
    props: {
      comparison: getComparison(context.params.slug),
    },
  };
}
