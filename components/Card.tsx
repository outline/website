import Link from "next/link";
import { colors } from "theme";

type Props = {
  href?: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function Card({ title, description, href }: Props) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className="card">
            {" "}
            <h3 className="heading">{title}</h3>
            <p className="content">{description}</p>
          </a>
        </Link>
      ) : (
        <div className="card">
          {" "}
          <h3 className="heading">{title}</h3>
          <p className="content">{description}</p>
        </div>
      )}
      <style jsx>{`
        .card {
          display: block;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-height: 250px;
        }

        a.card:hover,
        a.card:focus,
        a.card:active {
          color: ${colors.primary};
          border-color: ${colors.primary};
        }

        .heading {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .content {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 48em) {
          .card {
            min-height: 0;
          }
        }
      `}</style>
    </>
  );
}
