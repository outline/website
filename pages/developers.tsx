import Hero from "components/Hero";
import Layout from "components/Layout";
import CodeBlock from "components/CodeBlock";
import DevelopersMenu from "components/DevelopersMenu";
import { colors } from "../theme";

export default function Developers() {
  return (
    <Layout
      title="Developers"
      background="#F4F7FA"
      header={
        <div className="pure-grid squiggles">
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
        <div className="pure-u-1 pure-u-md-1-5">
          <DevelopersMenu />
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <article>
            <Hero>
              The Outline API is structured in an RPC style. It enables you to
              programatically interact with all aspects of Outline’s data – in
              fact, the main application is built on exactly the same API.
            </Hero>
          </article>
          <article>
            <h2 id="requests">Making requests</h2>
            <p>Outline’s API follows simple RPC style conventions where each API endpoint is a method on <code>https://www.getoutline.com/api/method</code>. Both <code>GET</code> and <code>POST</code> methods are supported but it’s recommended that you make all call using POST. Only HTTPS is supported.</p>
            <p>All response payloads are JSON.</p>
            <p>When making <code>POST</code> requests, request parameters are parsed depending on Content-Type header. To make a call using JSON payload, you must pass Content-Type: application/json header, here’s an example using CURL:</p>
            <CodeBlock>
              {`
curl https://www.getoutline.com/api/documents.info
-X POST
-H 'authorization: Bearer MY_API_KEY'
-H 'content-type: application/json'
-H 'accept: application/json'
-d '{"id": "outline-api-NTpezNwhUP"}'
`}
            </CodeBlock>
            <p>Or, with JavaScript:</p>
            <CodeBlock>
              {`
const response = await fetch("https://www.getoutline.com/api/documents.info", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: 'Bearer MY_API_KEY'
  }
})

const body = await response.json();
const document = body.data;
`}
            </CodeBlock>
          </article>
          <article>
            <h2 id="authentication">Authentication</h2>
            <p>To access API endpoints, you must provide a valid API key. You can create new API keys in your <a href="https://www.getoutline.com/settings">account settings</a>. Be careful when handling your keys as they give access to all of your documents, you should treat them like passwords and they should never be committed to source control.</p>
            <p>To authenticate with API, you can supply the API key as a header (<code>Authorization: Bearer YOUR_API_KEY</code>) or as part of the payload using <code>token</code> parameter. Header based authentication is highly recommended so that your keys don’t accidentally leak into logs.</p>
            <p>Some API endpoints allow unauthenticated requests for public resources and they can be called without an API key.</p>
          </article>
          <article>
            <h2 id="errors">Errors</h2>
            <p>All successful API requests will be returned with a 200 or 201 status code and <code>ok: true</code> in the response payload. If there’s an error while making the request, the appropriate status code is returned with the error message:</p>
            <CodeBlock>
              {`
{
  "ok": false,
  "error: "Not Found"
}
`}
            </CodeBlock>
          </article>
          <article>
            <h2 id="pagination">Pagination</h2>
            <p>All top-level API resources have support "list" API methods. For instance, you can list users, documents, and collections. These list methods share common parameters, taking both <code>limit</code> and <code>offset</code>.
            </p>
            <p>Responses will echo these parameters in the root <code>pagination</code> key, and also include a <code>nextPath</code> key which can be used as a handy shortcut to fetch the next page of results. For example:</p>
            <CodeBlock>
              {`
{
  ok: true,
  status: 200,
  data: […],
  pagination: {
    limit: 25,
    offset: 0,
    nextPath: "/api/documents.list?limit=25&offset=25"
  }
}
`}
            </CodeBlock>
          </article>
          <article>
            <h2 id="policies">Policies</h2>
            <p>Many API resources have associated "policies", these objects describe the current users authorized actions related to an individual resource. It should be noted that the policy "id" is identical to the resource it is related to, policies themselves do not have unique identifiers.
            </p>
            <p>The most usecases of the API policies can be safely ignored. Calling unauthorized methods will result in the appropriate response code.</p>
            <CodeBlock>
              {`
{
  ok: true,
  status: 200,
  data: […],
  policies: [
    {
      id: "fb9898ac-406a-479b-805f-f41827ef0da3",
      abilities: {
        archive: true
        create: true
        createChildDocument: true
        delete: false
        download: true,
        …
      }
    }
  ]
}
`}
            </CodeBlock>
          </article>
        </div>
      </div>
      <style jsx>
        {`
          img {
            height: 200px;
            float: right;
            opacity: 0.95;
          }

          article {
            margin-bottom: 4em;
          }

          code {
            border-radius: 4px;
            border: 1px solid ${colors.grey};
            padding: 3px 4px;
            font-family: "Roboto Mono", "Menlo", monospace;
            font-size: 85%;
          }
        `}
      </style>
    </Layout>
  );
}
