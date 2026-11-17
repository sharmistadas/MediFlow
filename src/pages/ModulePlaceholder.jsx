import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { ROLE_DASHBOARD_PATHS } from "../data/dummyData";

// Temporary routing screen used in Phase 1. Each module file will be replaced with
// its full working page in the following phases.
export default function ModulePlaceholder({ title, role, description }) {
  const dashboardPath = ROLE_DASHBOARD_PATHS[role];

  return (
    <>
      <div className="page-heading">
        <h1>{title}</h1>
        <p>{description || "This module is wired into navigation and will be implemented next."}</p>
      </div>
      <div className="mf-card p-5 text-center">
        <span className="stat-card-icon mx-auto" style={{ background: "#f1f5f9", color: "#64748b" }}>
          <FaTools />
        </span>
        <h5 className="fw-bold mt-3">Navigation ready</h5>
        <p className="text-muted mb-4">
          This route is protected and working. The full {title.toLowerCase()} screen will be
          built in the next development phase.
        </p>
        <Link to={dashboardPath} className="mf-btn-primary">
          Back to dashboard
        </Link>
      </div>
    </>
  );
}
