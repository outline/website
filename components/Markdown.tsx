import ReactMarkdown from "react-markdown";

export default function Markdown(props) {
  return (
    <div className="md">
      <ReactMarkdown {...props} />
      <style jsx>
        {`
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
            max-width: 100%;
            zoom: 50%;
            box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1),
              -1px -1px 0 rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: 1em 0;
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
