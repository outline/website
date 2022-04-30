import Layout from "components/Layout";
import * as React from "react";
import { colors } from "theme";
import { darken } from "polished";
import { useRouter } from "next/router";

export default function ContactUs() {
  const { query } = useRouter();

  return (
    <Layout
      title="Contact Us"
      background="#F4F7FA"
      hero="How to get in touch with the team"
    >
      <div className="container">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-2-5">
            <div className="form-wrapper">
              {query.success ? (
                <p>
                  Thank you for your message. We will get back to you as soon as
                  possible.
                </p>
              ) : (
                <form
                  action="https://app.getoutline.com/api/contactMessage.create"
                  method="POST"
                >
                  <label>
                    <div>Your name</div>
                    <input type="text" name="name" required />
                  </label>
                  <label className="website">
                    <div>Website</div>
                    <input type="text" name="url" />
                  </label>
                  <label>
                    <div>Email address</div>
                    <input type="email" name="replyTo" required />
                  </label>
                  <label>
                    <div>Contact reason</div>
                    <select name="subject" required>
                      <option disabled value="">
                        Contact reason…
                      </option>
                      <option value="I'm having problems and need help">
                        I'm having problems and need help
                      </option>
                      <option value="Feedback and product ideas">
                        Feedback and product ideas
                      </option>
                      <option value="Request an enterprise trial">
                        Request an enterprise trial
                      </option>
                      <option value="Something else">Something else</option>
                    </select>
                  </label>
                  <label>
                    <div>Deployment</div>
                    <select name="deployment" required>
                      <option value="cloud">Cloud (getoutline.com)</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="self-hosted">Self-Hosted</option>
                    </select>
                  </label>
                  <label>
                    <div>Your message</div>
                    <textarea
                      name="text"
                      placeholder="What can we help with?"
                      required
                    />
                  </label>
                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>
          </div>
          <div className="pure-u-md-1-5"></div>
          <div className="pure-u-1 pure-u-md-2-5">
            <p>
              Don't want to use the form? You can also email us directly at{" "}
              <a href="mailto:hello@getoutline.com">hello@getoutline.com</a>{" "}
              from your favorite email client.
            </p>
            <p>
              We aim to reply to all enquiries within 24 hours, but we often
              reply much faster than that during PST waking hours.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .form-wrapper {
          padding: 12px 32px 32px;
          border-radius: 8px;
          background: ${colors.lightGrey};
        }

        .website {
          display: none;
        }

        textarea,
        input,
        select {
          width: 100%;
          padding: 8px;
          border: 1px solid ${colors.greyDark};
          border-radius: 4px;
        }

        textarea {
          min-height: 180px;
        }

        label {
          display: block;
          margin: 12px 0;
        }

        label div {
          font-weight: 500;
        }

        button {
          display: inline-block;
          background-color: ${colors.primary};
          border-color: ${colors.primary};
          color: ${colors.white};
          border-width: 2px;
          border-style: solid;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          border-radius: 6px;
          padding: 10px 20px;
          box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
          font-size: 16px;
          line-height: 1.8em;
          white-space: nowrap;
          height: 50px;
        }

        button:hover {
          background-color: ${darken(0.1, colors.primary)};
          border-color: ${darken(0.1, colors.primary)};
          box-shadow: 0 1px 3px 0 rgba(3, 6, 26, 0.15);
        }
      `}</style>
    </Layout>
  );
}
