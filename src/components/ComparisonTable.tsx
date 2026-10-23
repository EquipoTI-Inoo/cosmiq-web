import type { comparisonTable as ComparisonTableType } from "@/lib/data/pricing";

export default function ComparisonTable({ table }: { table: typeof ComparisonTableType }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            <th className="sticky left-0 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-700">
              Característica
            </th>
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-3 text-center font-semibold text-slate-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {table.rows.map((row) => (
            <tr key={row.feature}>
              <td className="sticky left-0 bg-white px-4 py-3 text-left font-medium text-slate-700">
                {row.feature}
              </td>
              {row.values.map((value, i) => (
                <td key={i} className="px-4 py-3 text-center">
                  {typeof value === "boolean" ? (
                    value ? (
                      <span className="text-brand-blue">✓</span>
                    ) : (
                      <span className="text-slate-300">–</span>
                    )
                  ) : (
                    <span className="text-slate-600">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
