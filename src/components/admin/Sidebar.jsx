// src/admin/Sidebar.jsx
import { NavLink } from "react-router-dom";

const pages = [
  { path: "page-1", label: "Page 1" },
  { path: "page-2", label: "Page 2" },
  { path: "page-3", label: "Page 3" },
  { path: "page-4", label: "Page 4" },
  { path: "page-5", label: "Page 5" },
  { path: "page-6", label: "Page 6" },
];

export default function Sidebar({ onLogout }) {
  return (
    <div className="w-64 bg-gray-800 p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-3">
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={`/admindashboard/${page.path}`}
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              } transition`
            }
          >
            {page.label}
          </NavLink>
        ))}
        <button
          onClick={onLogout}
          className="mt-4 p-2 bg-red-600 hover:bg-red-700 rounded transition"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
