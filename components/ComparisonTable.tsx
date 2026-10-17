import * as React from "react";
import { CheckmarkIcon, CrossIcon } from "outline-icons";
import Table from "components/Table";
import type { ComparisonGroup, ComparisonValue } from "lib/comparisons";
import { colors } from "theme";

function Value({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <>
        <CheckmarkIcon color={colors.text} />
        <span className="visually-hidden">Yes</span>
      </>
    );
  }

  if (value === false) {
    return (
      <>
        <CrossIcon color={colors.brand.red} />
        <span className="visually-hidden">No</span>
      </>
    );
  }

  return <>{value}</>;
}

type Props = {
  competitor: string;
  groups: ComparisonGroup[];
};

export default function ComparisonTable({ competitor, groups }: Props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th scope="col">Outline</th>
            <th scope="col">{competitor}</th>
          </tr>
        </thead>
        {groups.map((group, index) => (
          <tbody key={group.title ?? index}>
            {group.title && (
              <tr className="group">
                <th scope="colgroup" colSpan={3}>
                  {group.title}
                </th>
              </tr>
            )}
            {group.rows.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td>
                  <Value value={row.outline} />
                </td>
                <td>
                  <Value value={row.competitor} />
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </Table>
      <style jsx>{`
        .group th {
          text-align: left;
          padding-top: 2em;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: ${colors.textSecondary};
        }
      `}</style>
    </>
  );
}
