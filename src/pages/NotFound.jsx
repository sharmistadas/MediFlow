import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function NotFound() {
  const { isAuthenticated, dashboardPath } = useAuth();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3">
      <span className="stat-card-icon" style={{ background: "#eff6ff", color: "#2563eb" }}>
        <FaCompass />
      </span>
      <h1 className="display-4 fw-bold mt-3 mb-1">404</h1>
      <h4>Page not found</h4>
      <p className="text-muted mb-4">
        The page you are looking for does not exist or you do not have access to it.
      </p>
      <Link to={isAuthenticated ? dashboardPath : "/login"} className="mf-btn-primary">
        {isAuthenticated ? "Go to my dashboard" : "Back to login"}
      </Link>
    </div>
  );
}
