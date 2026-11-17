import { useLocation } from "react-router-dom";
import { FaBars, FaBell } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onToggleSidebar }) {
  const { user, role } = useAuth();
  const location = useLocation();

  // Create a readable page title from the current URL segment.
  const pageName = location.pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard";

  return (
    <header className="app-navbar">
      <div className="d-flex align-items-center gap-3">
        <button
          type="button"
          className="navbar-toggle d-lg-none"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <span className="navbar-title">{pageName}</span>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="navbar-role-pill">{role} Portal</span>
        <button type="button" className="navbar-toggle position-relative" aria-label="Notifications">
          <FaBell />
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.6rem" }}
          >
            3
          </span>
        </button>
        <div className="navbar-user">
          <span className="navbar-avatar">
            {user?.fullName?.[0] || "M"}
          </span>
          <span>{user?.fullName || "MediFlow User"}</span>
        </div>
      </div>
    </header>
  );
}
