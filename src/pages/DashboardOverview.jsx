import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaStethoscope,
  FaUserPlus,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import StatCard from "../components/StatCard";
import { DASHBOARD_STATS } from "../data/dummyData";

const ICON_MAP = {
  Users: FaUsers,
  Stethoscope: FaStethoscope,
  Calendar: FaCalendarAlt,
  CalendarCheck: FaCalendarCheck,
  Wallet: FaWallet,
  Clock: FaClock,
  CheckCircle: FaCheckCircle,
  UserPlus: FaUserPlus,
};

const QUICK_LINKS = {
  ADMIN: [
    { label: "Manage Patients", to: "/admin/patients" },
    { label: "Manage Doctors", to: "/admin/doctors" },
    { label: "View Appointments", to: "/admin/appointments" },
    { label: "Reports & Analytics", to: "/admin/reports" },
  ],
  DOCTOR: [
    { label: "My Appointments", to: "/doctor/appointments" },
    { label: "Patient List", to: "/doctor/patients" },
    { label: "Consultation", to: "/doctor/consultation" },
    { label: "Prescriptions", to: "/doctor/prescriptions" },
  ],
  RECEPTIONIST: [
    { label: "Register Patient", to: "/receptionist/register-patient" },
    { label: "Patient List", to: "/receptionist/patients" },
    { label: "Book Appointment", to: "/receptionist/book-appointment" },
    { label: "Billing", to: "/receptionist/billing" },
  ],
};

export default function DashboardOverview({ role, title, subtitle }) {
  const stats = DASHBOARD_STATS[role] || [];

  return (
    <>
      <div className="page-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="mf-demo-banner">
        Phase 1 routing check: you are viewing the <strong>{role.toLowerCase()}</strong> dashboard.
        Module content will be added in the next phases.
      </div>

      <div className="row g-3">
        {stats.map((stat) => (
          <div className="col-12 col-sm-6 col-xl-3" key={stat.label}>
            <StatCard {...stat} icon={ICON_MAP[stat.icon]} />
          </div>
        ))}
      </div>

      <div className="mf-card p-4 mt-4">
        <h5 className="fw-bold mb-1">Quick navigation</h5>
        <p className="text-muted small mb-3">
          Each link below uses React Router and opens instantly without reloading the page.
        </p>
        <div className="d-flex flex-wrap gap-2">
          {QUICK_LINKS[role].map((link) => (
            <Link key={link.to} to={link.to} className="mf-btn-outline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
