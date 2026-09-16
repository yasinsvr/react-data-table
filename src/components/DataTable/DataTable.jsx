import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import SearchInput from "./SearchInput";

function DataTable({ data, columns }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort(key) {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  }

  const filteredData = data.filter((item) =>
    columns.some((column) =>
      String(item[column.key]).toLowerCase().includes(search.toLowerCase()),
    ),
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortKey) {
      return 0;
    }

    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (valueA == valueB) {
      return 0;
    }

    if (valueA > valueB) {
      return sortDirection === "asc" ? -1 : 1;
    }

    if (valueA < valueB) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-800 shadow-2xl p-4">
      <SearchInput value={search} onChange={setSearch} />
      <table className="w-full text-left">
        <thead className="bg-gray-800/80 border-b border-gray-700">
          <tr>
            {columns.map((column) => {
              const isSorted = column.key === sortKey;
              return (
                <th
                  onClick={() => column.sortable && handleSort(column.key)}
                  key={column.key}
                  className={`px-4 py-3 text-sm font-semibold text-gray-300 transition-colors ${column.sortable ? "cursor-pointer select-none hover:bg-gray-700/50 hover:text-white" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span
                        className={`transition-colors ${isSorted ? "text-indigo-400" : "text-gray-600"}`}
                      >
                        {isSorted ? (
                          sortDirection === "asc" ? (
                            <ArrowUp size={10} />
                          ) : (
                            <ArrowDown size={10} />
                          )
                        ) : (
                          <ArrowUpDown size={10} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id} className="border-t border-gray-100">
              {columns.map((column) => (
                <td
                  className="px-4 py-3 text-sm text-gray-200"
                  key={column.key}
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
