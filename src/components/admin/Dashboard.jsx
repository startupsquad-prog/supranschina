// src/admin/Dashboard.jsx
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Page1 from "./adminpages/Page1";
import Page2 from "./adminpages/Page2";
import Page3 from "./adminpages/Page3";
import Page4 from "./adminpages/Page4";
import Page5 from "./adminpages/Page5";

export default function Dashboard() {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/admin");
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="page-1" element={<Page1 />} />
          <Route path="page-2" element={<Page2 />} />
          <Route path="page-3" element={<Page3 />} />
          <Route path="page-4" element={<Page4 />} />
          <Route path="page-5" element={<Page5 />} />
       
        </Routes>
      </div>
    </div>
  );
}
