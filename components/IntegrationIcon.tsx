import { iconSrc, Integration } from "lib/integrations";

type Props = {
  integration: Pick<Integration, "slug" | "name" | "icon">;
  size?: number;
};

export default function IntegrationIcon({ integration, size = 32 }: Props) {
  return (
    <>
      <img
        className="integration-icon"
        src={iconSrc(integration)}
        alt=""
        width={size}
        height={size}
      />
      <style jsx>{`
        .integration-icon {
          display: block;
          flex-shrink: 0;
          width: ${size}px;
          height: ${size}px;
          object-fit: contain;
          border-radius: ${Math.max(3, Math.round(size / 8))}px;
        }
      `}</style>
    </>
  );
}
