import * as React from "react";
import Link from "next/link";
import { getCookie } from "tiny-cookie";
import classnames from "classnames";
import { ExpandedIcon } from "outline-icons";
import { spacing, colors } from "theme";
import useOnClickOutside from "lib/hooks/useOnClickOutside";
import useSearchParams from "lib/hooks/useSearchParams";

const isBrowser = typeof document !== "undefined";
let isHydrating = true;

class MenuItem extends React.Component<{
  children: React.ReactNode;
  href?: string;
  onClick?: (event) => void;
  className?: string;
  target?: string;
  top?: boolean;
}> {
  render() {
    const { children, href, top, onClick, className } = this.props;

    return (
      <>
        <a href={href} onClick={onClick} className={className}>
          {children}
        </a>
        <style jsx>
          {`
            a {
              display: flex;
              align-items: center;
              padding: ${spacing.small} ${spacing.medium};
              color: rgba(0, 0, 0, 0.75);
              text-decoration: none;
              white-space: nowrap;
              border-radius: 4px;
              min-height: 40px;
              font-weight: 500;
              position: relative;
              user-select: none;
              overflow: hidden;
            }

            a.menu-with-icon {
              padding-right: 8px;
              position: relative;
              z-index: 2;
            }

            a.launch,
            a.highlighted,
            a:hover {
              background: ${top ? "rgba(0, 0, 0, 0.1)" : colors.primary};
              color: ${top ? colors.almostBlack : colors.white};
            }

            a.open,
            a.open:hover {
              background: none;
            }

            a.launch {
              width: 160px;
            }
          `}
        </style>
      </>
    );
  }
}

function Teams({ sessions }) {
  return (
    <>
      {Object.keys(sessions).map((teamId) => {
        const session = sessions[teamId];
        return (
          <li key={teamId}>
            <MenuItem href={session.url} className="session">
              <img className="teamLogo" src={session.logoUrl} />{" "}
              <span>{session.name}</span>
            </MenuItem>
          </li>
        );
      })}
      <style jsx>
        {`
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
    </>
  );
}

function getSessions() {
  if (isBrowser) {
    return JSON.parse(getCookie("sessions") || "{}");
  }
  return {};
}

export default function HeaderNavigation() {
  const ref = React.useRef();
  const storedSearch = useSearchParams();
  const [search, setSearch] = React.useState("");
  const [openNav, setOpenNav] = React.useState(null);
  const [sessions, setSessions] = React.useState(null);
  const isSignedIn = sessions ? Object.keys(sessions).length : false;

  // don't try and load the users active sessions during SSR, it ain't ever
  // gonna work – load sessions from cookies when they haven't already been
  // loaded on the client
  if (isBrowser && !sessions) {
    if (isHydrating) {
      setTimeout(() => {
        isHydrating = false;
        setSessions(getSessions());
        setSearch(storedSearch);
      }, 0);
    } else {
      setSessions(getSessions());
      setSearch(storedSearch);
    }
  }

  useOnClickOutside(ref, () => setOpenNav(null));

  const setActiveNav = (name) => (event) => {
    event.preventDefault();
    setOpenNav(name);
  };

  return (
    <nav role="navigation" ref={ref}>
      <ul>
        <li className={openNav === "product" ? "open" : "hidden-on-mobile"}>
          <MenuItem
            href="#product"
            className={classnames(
              "menu-with-icon",
              openNav === "product" && "open"
            )}
            aria-haspopup="true"
            onClick={setActiveNav("product")}
            top
          >
            Product <ExpandedIcon color="currentColor" />
          </MenuItem>
          <ul>
            <li>
              <Link href="/integrations" passHref>
                <MenuItem>Integrations</MenuItem>
              </Link>
            </li>
            <li>
              <Link href="/developers" passHref>
                <MenuItem>Developers</MenuItem>
              </Link>
            </li>
            <li>
              <Link href="/changelog" passHref>
                <MenuItem>Changelog</MenuItem>
              </Link>
            </li>
          </ul>
        </li>
        <li className="hidden-on-mobile">
          <Link href="/pricing" passHref>
            <MenuItem top>Pricing</MenuItem>
          </Link>
        </li>
        <li className={openNav === "community" ? "open" : "hidden-on-mobile"}>
          <MenuItem
            href="#community"
            className={classnames(
              "menu-with-icon",
              openNav === "community" && "open"
            )}
            aria-haspopup="true"
            onClick={setActiveNav("community")}
            top
          >
            Community <ExpandedIcon color="currentColor" />
          </MenuItem>
          <ul>
            <li>
              <Link href="/contact" passHref>
                <MenuItem>Contact Us</MenuItem>
              </Link>
            </li>
            <li>
              <MenuItem href="https://github.com/outline" target="_blank">
                GitHub
              </MenuItem>
            </li>
            <li>
              <MenuItem
                href="https://github.com/outline/outline/discussions"
                target="_blank"
              >
                Discuss
              </MenuItem>
            </li>
            <li>
              <MenuItem href="https://twitter.com/outlinewiki" target="_blank">
                Twitter
              </MenuItem>
            </li>
          </ul>
        </li>
        <li
          className={openNav === "sessions" ? "open" : "hidden-on-mobile"}
          key={isSignedIn ? "signed-in" : ""}
        >
          {isSignedIn ? (
            <>
              <MenuItem
                href="#login"
                className={classnames(
                  "launch",
                  "menu-with-icon",
                  openNav === "sessions" && "open"
                )}
                aria-haspopup="true"
                onClick={setActiveNav("sessions")}
                top
              >
                Launch Outline <ExpandedIcon color="currentColor" />
              </MenuItem>
              <ul className="sessions">
                <Teams sessions={sessions} />
              </ul>
            </>
          ) : (
            <span className="auth">
              <MenuItem
                className="highlighted"
                href={`https://app.getoutline.com${search}`}
                top
              >
                Log in
              </MenuItem>{" "}
              <span className="or">or</span>{" "}
              <MenuItem
                className="highlighted"
                href={`https://app.getoutline.com/create${search}`}
                top
              >
                Sign up
              </MenuItem>
            </span>
          )}
        </li>
        <li className={openNav === "mobile" ? "open" : "hidden-on-desktop"}>
          <MenuItem
            href="#login"
            className={classnames(
              "highlighted",
              "menu-with-icon",
              openNav === "mobile" && "open"
            )}
            aria-haspopup="true"
            onClick={setActiveNav("mobile")}
            top
          >
            Menu&nbsp;
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6ZM14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                fill="currentColor"
              />
            </svg>
          </MenuItem>
          <ul className="mobile">
            <h3>Launch</h3>
            {isSignedIn ? (
              <Teams sessions={sessions} />
            ) : (
              <li>
                <MenuItem href={`https://app.getoutline.com${search}`}>
                  Log in | Sign up
                </MenuItem>
              </li>
            )}

            <h3>Product</h3>
            <li>
              <Link href="/integrations" passHref>
                <MenuItem>Integrations</MenuItem>
              </Link>
            </li>
            <li>
              <Link href="/developers" passHref>
                <MenuItem>Developers</MenuItem>
              </Link>
            </li>
            <li>
              <Link href="/changelog" passHref>
                <MenuItem>Changelog</MenuItem>
              </Link>
            </li>
            <li>
              <Link href="/pricing" passHref>
                <MenuItem>Pricing</MenuItem>
              </Link>
            </li>

            <h3>Community</h3>
            <li>
              <Link href="/contact" passHref>
                <MenuItem>Contact Us</MenuItem>
              </Link>
            </li>
            <li>
              <MenuItem href="https://github.com/outline" target="_blank">
                GitHub
              </MenuItem>
            </li>
            <li>
              <MenuItem
                href="https://github.com/outline/outline/discussions"
                target="_blank"
              >
                Discuss
              </MenuItem>
            </li>
            <li>
              <MenuItem href="https://twitter.com/outlinewiki" target="_blank">
                Twitter
              </MenuItem>
            </li>
          </ul>
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
            list-style: none;
            margin: 0;
            padding: 0;
          }

          li {
            display: block;
            transition-duration: 0.5s;
            position: relative;
            margin: 0 0 0 ${spacing.medium};
          }

          li:hover {
            cursor: pointer;
          }

          ul li ul {
            visibility: hidden;
            opacity: 0;
            display: block;
            position: absolute;
            pointer-events: none;
            margin-top: 0;
            margin-left: ${spacing.medium};
            padding: 0 ${spacing.small} ${spacing.small};
            left: 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 4px;
            min-width: 136px;
            z-index: 1;
          }

          ul li ul.sessions {
            min-width: 160px;
            max-width: 260px;
          }

          ul li ul.mobile {
            width: 55vw;
            min-width: 0;
            left: auto;
            right: 0;
          }

          h3 {
            margin-left: ${spacing.medium};
            margin-bottom: 0.5em;
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
            transition: opacity 200ms ease-in-out;
            pointer-events: initial;

            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
              0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
            padding-top: 42px;
            margin-top: -42px;
            margin-left: 0;
          }

          ul li ul li {
            clear: both;
            width: 100%;
            margin: 0;
          }

          li.hidden-on-desktop {
            display: none;
          }

          .auth {
            display: flex;
            align-items: center;
          }

          .or {
            padding: 0 4px;
          }

          @media (max-width: 48em) {
            li.hidden-on-desktop {
              display: block;
            }
            li.hidden-on-mobile {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
