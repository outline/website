import ReactDOMServer from "react-dom/server";
import Markdown from "components/Markdown";

const domain = "https://www.getoutline.com";

const escapeXMLContent = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const generateRSSItem = (post: any): string => `
  <item>
    <guid>${post.slug}</guid>
    <title>${escapeXMLContent(post.title)}</title>
    <link>${domain + "/changelog/" + post.slug}</link>
    <description><![CDATA[ ${ReactDOMServer.renderToString(
      <Markdown source={post.content} />
    ).replace('src="/', 'src="' + domain + "/")} ]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

export const generateRSS = (posts: any[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Outline Changelog</title>
      <link>https://www.getoutline.com/changelog</link>
      <description>New updates and improvements to Outline. Follow us on twitter @getoutline to find out when features are released.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://www.getoutline.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRSSItem).join("")}
    </channel>
  </rss>
`;
