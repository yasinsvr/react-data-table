<div align="center">

# 📊 React Data Table

A reusable and customizable React DataTable featuring search, sorting, custom cell rendering, and pagination.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square\&logo=vite\&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 📖 About

**React Data Table** is a reusable and customizable data table component built with React.

The project focuses on building a flexible table component capable of handling common client-side data management features such as searching, sorting, pagination, and custom cell rendering.

The table is configured through a column definition, allowing the same component to be reused with different datasets and column configurations.

---

## ✨ Features

### Data Table

* Dynamic column configuration
* Global search across table columns
* Ascending and descending sorting
* Custom cell rendering
* Empty state for no results

### Pagination

* Client-side pagination
* Configurable rows per page
* Previous and next navigation
* Dynamic page numbers
* Ellipsis for large page ranges
* Automatic page reset when changing rows per page

### UI

* Tailwind CSS styling
* Lucide React icons
* Responsive table layout
* Reusable React components

---

## 🔎 Search & Filtering

The table provides a global search input that searches across the configured columns.

For example, searching for:

```text
developer
```

will return users whose configured column values contain the search term.

Search is case-insensitive and automatically resets the current page when the search value changes.

---

## ↕️ Sorting

Sortable columns can be enabled through the column configuration:

```jsx
{
  key: "name",
  label: "Name",
  sortable: true,
}
```

Clicking a sortable column toggles between ascending and descending order.

Columns without `sortable: true` remain non-sortable.

---

## 📄 Pagination

The table includes client-side pagination with configurable rows per page.

Available options:

```text
5
10
20
```

The pagination component dynamically displays page numbers and uses ellipsis when there are many pages.

Changing the rows per page automatically returns the table to the first page.

---

## 🎨 Custom Cell Rendering

Columns can define a custom `render` function when the default cell output is not sufficient.

Example:

```jsx
{
  key: "status",
  label: "Status",
  render: (user) => (
    <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs text-gray-400">
      {user.status}
    </span>
  ),
}
```

This allows individual columns to control how their values are displayed without modifying the `DataTable` component.

---

## 🛠️ Tech Stack

* **React 19**
* **Vite 8**
* **Tailwind CSS 4**
* **Lucide React**
* **JavaScript / JSX**

---

## 📦 Requirements

Before running the project, make sure you have:

* Node.js
* npm

---

## 🧱 Project Structure

```text
src/
├── components/
│   └── DataTable/
│       ├── DataTable.jsx
│       ├── Pagination.jsx
│       └── SearchInput.jsx
│
├── data/
│   └── users.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/yasinsvr/react-data-table.git
cd react-data-table
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ⚙️ Column Configuration

The table uses a column configuration to determine how each column behaves.

Example:

```jsx
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
    render: (user) => (
      <span>
        {user.status}
      </span>
    ),
  },
];
```

The same `DataTable` component can therefore be used with different datasets and column definitions.

---

## 🗺️ Roadmap

### Completed

* [x] Reusable DataTable component
* [x] Dynamic column configuration
* [x] Global search
* [x] Column sorting
* [x] Custom cell rendering
* [x] Client-side pagination
* [x] Rows per page
* [x] Dynamic pagination
* [x] Empty state

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Suggestions, bug reports and improvements are welcome.

If you find an issue or have an idea for improving the project, feel free to open an issue or submit a pull request.

---

<div align="center">

Made with ❤️ by **Yasin Zolfaghari**

</div>