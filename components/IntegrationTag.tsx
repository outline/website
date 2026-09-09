import { deploymentLabel, Integration } from "lib/integrations";
import { colors } from "theme";

type Props = {
  integration: Pick<Integration, "deployments">;
};

/**
 * Small pill noting when an integration is only available on Outline Cloud
 * or only on self-hosted installations. Renders nothing when it works on both.
 */
export default function IntegrationTag({ integration }: Props) {
  const label = deploymentLabel(integration);

  if (!label) {
    return null;
  }

  return (
    <>
      <span className="tag">{label}</span>
      <style jsx>{`
        .tag {
          display: inline-block;
          padding: 1px 8px;
          border-radius: 99px;
          background: ${colors.grey};
          color: ${colors.textSecondary};
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          white-space: nowrap;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
}
