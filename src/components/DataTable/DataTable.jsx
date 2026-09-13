import { useState } from "react";

function DataTable({ data, columns }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc')

  function handleSort(key)
  {
    if (key === sortKey){
        setSortDirection(
            sortDirection === 'asc' ? 'desc' : 'asc'
        )
    }else{
        setSortKey(key)
        setSortDirection('asc')
    }
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey){
        return 0;
    }

    const valueA = a[sortKey]
    const valueB = b[sortKey]

    if (valueA == valueB){
        return 0
    } 

    if (valueA > valueB){
        return sortDirection === 'asc' ? -1 : 1
    }
    
    if (valueA < valueB){
        return sortDirection === 'asc' ? 1 : -1
    }

    return 0
  })

  return (
    <div className="overflow-hidden rounded-xl border border-gray-400 bg-white">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th onClick={() => column.sortable && handleSort(column.key)}
                key={column.key}
                className="px-4 py-3 text-sm font-semibold text-gray-700"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id} className="border-t border-gray-100">
              {columns.map((column) => (
                <td
                  className="px-4 py-3 text-sm text-gray-600"
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
