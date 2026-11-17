import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function ReceptionistLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "is-visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Navbar onToggleSidebar={() => setSidebarOpen((open) => !open)} />
        <main className="app-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
