import DataTable from "./components/DataTable/DataTable";
import { users } from "./data/users";

const columns = [
    {
        key: "name",
        label: "Name",
        sortable: true
    },
    {
        key: "email",
        label: "Email",
        sortable: true
    },
    {
        key: "role",
        label: "Role",
        sortable: true
    },
    {
        key: "status",
        label: "Status",
    },
]

function App() {
    return (
        <main className="min-h-screen bg-gray-600 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-6 text-3xl font-bold text-white">Users Data Table</h1>
                <DataTable data={users} columns={columns} />
            </div>
        </main>
    )
}

export default App;
