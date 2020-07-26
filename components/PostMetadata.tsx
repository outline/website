import Time from "components/Time";
import { typography, colors } from "theme";

export default function PostMetadata({ date, tag }) {
  return (
    <>
      <div className="metadata">
        <Time date={date} />{" "}
        {tag && (
          <>
            &middot;{" "}
            <a
              href={`https://github.com/outline/outline/releases/tag/${tag}`}
              target="_blank"
            >
              View on GitHub
            </a>
          </>
        )}
      </div>
      <style jsx>{`
        .metadata {
          font-family: ${typography.fontFamilyMono};
          color: ${colors.textSecondary};
          font-size: 0.8em;
          margin-top: -1.5em;
          margin-bottom: 2em;
        }

        .metadata a {
          color: ${colors.textSecondary};
        }

        .metadata a:hover {
          color: ${colors.text};
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
