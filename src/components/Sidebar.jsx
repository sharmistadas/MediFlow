import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCalendarCheck,
  FaChartBar,
  FaClipboardList,
  FaCog,
  FaFileInvoiceDollar,
  FaFileMedical,
  FaHistory,
  FaPrescriptionBottleAlt,
  FaSignOutAlt,
  FaStethoscope,
  FaUserMd,
  FaUserPlus,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useNotification } from "../context/NotificationContext";
import { ROLES } from "../data/dummyData";

// Sidebar menu is role-specific. Every link uses React Router NavLink (no page reload).
const MENU_CONFIG = {
  [ROLES.ADMIN]: [
    { label: "Dashboard", path: "/admin/dashboard", icon: MdDashboard },
    { label: "Patients", path: "/admin/patients", icon: FaUsers },
    { label: "Doctors", path: "/admin/doctors", icon: FaUserMd },
    { label: "Appointments", path: "/admin/appointments", icon: FaCalendarAlt },
    { label: "Prescriptions", path: "/admin/prescriptions", icon: FaPrescriptionBottleAlt },
    { label: "Billing", path: "/admin/billing", icon: FaFileInvoiceDollar },
    { label: "Departments", path: "/admin/departments", icon: FaBuilding },
    { label: "Staff Management", path: "/admin/staff", icon: FaUserTie },
    { label: "Reports & Analytics", path: "/admin/reports", icon: FaChartBar },
    { label: "Settings", path: "/admin/settings", icon: FaCog },
  ],
  [ROLES.DOCTOR]: [
    { label: "Dashboard", path: "/doctor/dashboard", icon: MdDashboard },
    { label: "My Appointments", path: "/doctor/appointments", icon: FaCalendarCheck },
    { label: "Patient List", path: "/doctor/patients", icon: FaUsers },
    { label: "Consultation", path: "/doctor/consultation", icon: FaStethoscope },
    { label: "Prescriptions", path: "/doctor/prescriptions", icon: FaPrescriptionBottleAlt },
    { label: "Medical History", path: "/doctor/medical-history", icon: FaHistory },
    { label: "My Profile", path: "/doctor/profile", icon: FaUserMd },
  ],
  [ROLES.RECEPTIONIST]: [
    { label: "Dashboard", path: "/receptionist/dashboard", icon: MdDashboard },
    { label: "Register Patient", path: "/receptionist/register-patient", icon: FaUserPlus },
    { label: "Patient List", path: "/receptionist/patients", icon: FaUsers },
    { label: "Book Appointment", path: "/receptionist/book-appointment", icon: FaCalendarAlt },
    { label: "Appointment List", path: "/receptionist/appointments", icon: FaCalendarCheck },
    { label: "Billing", path: "/receptionist/billing", icon: FaFileInvoiceDollar },
    { label: "Payment History", path: "/receptionist/payment-history", icon: FaClipboardList },
    { label: "My Profile", path: "/receptionist/profile", icon: FaUserTie },
  ],
};

export default function Sidebar({ isOpen, onClose }) {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const menuItems = MENU_CONFIG[role] || [];

  const handleLogout = () => {
    logout();
    showToast("You have been logged out.", "info");
    onClose?.();
    navigate("/login", { replace: true });
  };

  return (
    <aside className={`app-sidebar ${isOpen ? "is-open" : ""}`}>
      <div className="sidebar-brand">
        <span className="sidebar-brand-icon">
          <FaFileMedical />
        </span>
        MediFlow
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="sidebar-section-label">{role?.toLowerCase()} workspace</p>
        {menuItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
            onClick={onClose}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="sidebar-link sidebar-logout"
          onClick={handleLogout}
        >
          <FaSignOutAlt aria-hidden="true" />
          <span>Logout</span>
        </button>
      </nav>

      {user && (
        <div className="sidebar-user">
          <span className="sidebar-avatar">
            {user.fullName
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")}
          </span>
          <div>
            <strong>{user.fullName}</strong>
            <small>{user.role}</small>
          </div>
        </div>
      )}
    </aside>
  );
}
