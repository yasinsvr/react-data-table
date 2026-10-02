import { Heart } from "lucide-react";
import DataTable from "./components/DataTable/DataTable";
import { users } from "./data/users";

const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "role",
    label: "Role",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    render: (item) => (
      <span
        className={`rounded-full shadow ${item.status == "active" ? "bg-green-500/10 text-green-500 shadow-green-600/50" : "bg-red-500/20 text-rose-500 shadow-rose-600/50"} px-2.5 py-1 text-xs font-bold`}
      >
        {item.status}
      </span>
    ),
  },
];

function App() {
  return (
    <main className="min-h-screen bg-gray-900 p-2 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="mb-6 text-3xl font-bold text-white">
            Users Data Table
          </h1>
          <div className="hidden sm:flex items-center gap-x-2">
            <div className="flex text-gray-300 items-center gap-x-1">
              <span>Made with</span>
              <Heart className="fill-rose-500 text-rose-500" size={20} />
              <span>By</span>
            </div>
            <a
              href="https://github.com/yasinsvr"
              target="_blank"
              className="font-bold flex items-center text-white gap-x-1"
            >
              <span>Yasinsvr</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.7937 84.9688C44.4187 83.4688 35.7 74.5625 35.7 63.0313C35.7 58.3438 37.3875 53.2813 40.2 49.9063C38.9812 46.8125 39.1687 40.25 40.575 37.5313C44.325 37.0625 49.3875 39.0313 52.3875 41.75C55.95 40.625 59.7 40.0625 64.2937 40.0625C68.8875 40.0625 72.6375 40.625 76.0125 41.6563C78.9187 39.0313 84.075 37.0625 87.825 37.5313C89.1375 40.0625 89.325 46.625 88.1062 49.8125C91.1062 53.375 92.7 58.1563 92.7 63.0313C92.7 74.5625 83.9812 83.2813 71.4187 84.875C74.6062 86.9375 76.7625 91.4375 76.7625 96.5938L76.7625 106.344C76.7625 109.156 79.1062 110.75 81.9187 109.625C98.8875 103.156 112.2 86.1875 112.2 65.1875C112.2 38.6563 90.6375 17 64.1062 17C37.575 17 16.2 38.6562 16.2 65.1875C16.2 86 29.4187 103.25 47.2312 109.719C49.7625 110.656 52.2 108.969 52.2 106.438L52.2 98.9375C50.8875 99.5 49.2 99.875 47.7 99.875C41.5125 99.875 37.8562 96.5 35.2312 90.2188C34.2 87.6875 33.075 86.1875 30.9187 85.9063C29.7937 85.8125 29.4187 85.3438 29.4187 84.7813C29.4187 83.6563 31.2937 82.8125 33.1687 82.8125C35.8875 82.8125 38.2312 84.5 40.6687 87.9688C42.5437 90.6875 44.5125 91.9063 46.8562 91.9063C49.2 91.9063 50.7 91.0625 52.8562 88.9063C54.45 87.3125 55.6687 85.9063 56.7937 84.9688Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </main>
  );
}

export default App;
