import ReactMarkdown from "react-markdown";

export default function Markdown(props) {
  return (
    <div className="md">
      <ReactMarkdown {...props} />
      <style jsx>
        {`
          .md {
            font-size: 1.2em;
            line-height: 1.4;
          }

          .md :global(blockquote) {
            margin-left: 0;
            margin-right: 0;
            background-color: #f2f2f2;
            border-left: 6px solid #f2f2f2;
            padding: 15px 30px 15px 15px;
            font-style: italic;
            font-size: 16px;
          }

          .md :global(blockquote p) {
            margin: 0;
          }

          .md :global(img) {
            display: block;
            max-width: 100%;
            zoom: 50%;
            box-shadow:  0 0 0 1px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            margin: 2em auto;
          }

          .md :global(code) {
            font-size: 15px;
            background: #f2f2f2;
            padding: 2px 4px;
            border-radius: 2px;
          }
        `}
      </style>
    </div>
  );
}
