import Layout from "components/Layout";
import * as React from "react";
import { colors } from "theme";

export default function Privacy() {
  const callback = React.useCallback(() => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  }, []);

  return (
    <Layout
      title="Contact Us"
      background="#F4F7FA"
      hero="How to get in touch with the team"
    >
      <div className="container">
        <p>
          You can email us directly at{" "}
          <a href="mailto:hello@getoutline.com">hello@getoutline.com</a> from
          your favorite email client, or reach out on twitter{" "}
          <a href="https://twitter.com/getoutline" target="_blank">
            @getoutline
          </a>
          .
        </p>
        <p>
          We aim to reply to all enquiries within 24 hours, but we often reply
          much faster than that during PST waking hours. To make things easy we
          also have a direct contact form below that you can fill out in just a
          few clicks.
        </p>

        <div
          ref={callback}
          className="typeform-widget"
          data-url="https://form.typeform.com/to/tQ5Uoqi8"
          data-transparency="50"
          data-hide-headers="true"
          data-hide-footer="true"
        ></div>
      </div>
      <style jsx>
        {`
          .typeform-widget {
            width: 100%;
            height: 500px;
            border: 1px solid ${colors.grey};
            border-radius: 8px;
          }
        `}
      </style>
    </Layout>
  );
}
