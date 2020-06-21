import * as React from "react";
import Link from "next/link";
import { getCookie } from "tiny-cookie";
import { ExpandedIcon } from "outline-icons";
import { spacing, colors } from "theme";
import useOnClickOutside from "lib/hooks/useOnClickOutside";

export default function HeaderNavigation() {
  const ref = React.useRef();
  const [openNav, setOpenNav] = React.useState(null);

  useOnClickOutside(ref, () => setOpenNav(null));

  let sessions = {};

  const setActiveNav = (name) => (event) => {
    event.preventDefault();
    setOpenNav(name);
  };

  if (typeof document !== "undefined") {
    sessions = JSON.parse(getCookie("sessions") || "{}");
  }

  const isSignedIn = Object.keys(sessions).length;

  return (
    <nav role="navigation" ref={ref}>
      <ul>
        <li className={openNav === "product" && "open"}>
          <a
            className="menu-with-icon"
            aria-haspopup="true"
            onClick={setActiveNav("product")}
          >
            Product <ExpandedIcon color="currentColor" />
          </a>
          <ul>
            <li>
              <Link href="/integrations">
                <a>Integrations</a>
              </Link>
            </li>
            <li>
              <Link href="/developers">
                <a>Developers</a>
              </Link>
            </li>
            <li>
              <Link href="/changelog">
                <a>Changelog</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li className={openNav === "community" && "open"}>
          <a
            className="menu-with-icon"
            aria-haspopup="true"
            onClick={setActiveNav("community")}
          >
            Community <ExpandedIcon color="currentColor" />
          </a>
          <ul>
            <li>
              <a href="mailto:hello@getoutline.com">Contact Us</a>
            </li>
            <li>
              <a href="https://github.com/outline" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/outline/outline/discussions"
                target="_blank"
              >
                Discuss
              </a>
            </li>
            <li>
              <a href="https://twitter.com/outlinewiki" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </li>
        <li className={openNav === "sessions" && "open"} key={isSignedIn}>
          {isSignedIn ? (
            <>
              <a
                href="#login"
                className="launch menu-with-icon"
                aria-haspopup="true"
                onClick={setActiveNav("sessions")}
              >
                Launch Outline <ExpandedIcon color="currentColor" />
              </a>
              <ul className="sessions">
                {Object.keys(sessions).map((teamId) => {
                  const session = sessions[teamId];
                  return (
                    <li key={teamId}>
                      <a href={session.url} className="session">
                        <img className="teamLogo" src={session.logoUrl} />{" "}
                        <span>{session.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
              <Link href="//app.getoutline.com">
                <a className="launch menu-with-icon">Log in | Sign up</a>
              </Link>
            )}
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: flex-end;
          }

          ul {
            display: flex;
            margin: 0;
            padding: 0;
          }

          li {
            display: block;
            transition-duration: 0.5s;
            position: relative;
          }

          li a {
            display: flex;
            align-items: center;
            padding: ${spacing.small} ${spacing.medium};
            margin: 0 0 0 ${spacing.medium};
            color: rgba(0, 0, 0, 0.75);
            text-decoration: none;
            white-space: nowrap;
            min-height: 40px;
            position: relative;
            user-select: none;
          }

          li a.menu-with-icon {
            padding-right: 8px;
            position: relative;
            z-index: 2;
          }

          li ul li a {
            display: flex;
            margin: 0;
            overflow: hidden;
          }

          li a.launch,
          li a:hover {
            background: ${colors.grey};
            border-radius: 4px;
          }

          li a.launch {
            width: 160px;
          }

          li:hover {
            cursor: pointer;
          }

          li.open > a {
            background: rgba(255, 255, 255, 0.75);
          }

          ul li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            transition: all 0.5s ease;
            margin-top: 0;
            margin-left: ${spacing.medium};
            left: 0;
            display: none;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(10px);
            border-radius: 4px;
            min-width: 136px;
            z-index: 1;
          }

          ul li ul.sessions {
            min-width: 160px;
            max-width: 260px;
          }

          ul li ul a:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }

          ul li.open > ul,
          ul li:focus-within > ul,
          ul li ul:hover,
          ul li ul:focus {
            visibility: visible;
            opacity: 1;
            display: block;

            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
              0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
            padding-top: 42px;
            margin-top: -42px;
          }

          ul li ul li {
            clear: both;
            width: 100%;
          }

          a.session {
            font-weight: 500;
          }

          .teamLogo {
            display: inline-block;
            margin-right: ${spacing.small};
            border: 1px solid ${colors.grey};
            border-radius: 4px;
            width: 32px;
            height: 32px;
          }
        `}
      </style>
    </nav>
  );
}
