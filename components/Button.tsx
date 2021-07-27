import Link from "next/link";
import { darken } from "polished";
import { colors } from "theme";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
  href?: string;
};

export default function Button({
  children,
  onClick,
  light = false,
  href,
  ...rest
}: Props) {
  return (
    <>
      <Link href={href} {...rest}>
        <a className="button" role="button" onClick={onClick}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .button {
          display: inline-block;
          background-color: ${light ? colors.white : colors.primary};
          border-color: ${light ? colors.white : colors.primary};
          color: ${light ? colors.text : colors.white};
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

        .button:hover {
          background-color: ${darken(
            0.1,
            light ? colors.white : colors.primary
          )};
          border-color: ${darken(0.1, light ? colors.white : colors.primary)};
          box-shadow: 0 1px 3px 0 rgba(3, 6, 26, 0.15);
        }
      `}</style>
    </>
  );
}
