import Link from "next/link";
import { colors } from "theme";

type Props = {
  href?: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function Card({ title, description, href }: Props) {
  const content = (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className="card">{content}</a>
        </Link>
      ) : (
        <div className="card">{content}</div>
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
          outline: none;
        }

        .card :global(h3) {
          display: flex;
          align-items: center;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card :global(p) {
          color: ${colors.textSecondary};
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        a.card:hover :global(p),
        a.card:focus :global(p),
        a.card:hover :global(p) {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
}
