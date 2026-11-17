import EmptyState from "./EmptyState";

// Generic table used by all future data pages.
// columns: [{ key, label, render }] where render(row) is optional.
export default function DataTable({ columns = [], data = [], emptyMessage = "No records found." }) {
  if (!data.length) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="mf-table-responsive">
      <table className="mf-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id || index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
