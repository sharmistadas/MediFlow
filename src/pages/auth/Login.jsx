import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaHeartbeat,
  FaShieldAlt,
  FaStethoscope,
  FaUserTie,
} from "react-icons/fa";
import FormInput from "../../components/FormInput";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { DEMO_USERS, ROLES } from "../../data/dummyData";

const ROLE_OPTIONS = [
  { role: ROLES.ADMIN, label: "Admin", icon: FaShieldAlt },
  { role: ROLES.DOCTOR, label: "Doctor", icon: FaStethoscope },
  { role: ROLES.RECEPTIONIST, label: "Receptionist", icon: FaUserTie },
];

export default function Login() {
  const { user, dashboardPath, login } = useAuth();
  const { showToast } = useNotification();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: ROLES.ADMIN,
    rememberMe: true,
  });
  const [errors, setErrors] = useState({});

  // Already logged in? Skip the login page.
  if (user) {
    return <Navigate to={dashboardPath} replace />;
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  // Selecting a demo role fills the matching fictional credentials.
  const handleRoleSelect = (role) => {
    const demoUser = DEMO_USERS.find((candidate) => candidate.role === role);
    setForm((current) => ({
      ...current,
      role,
      email: demoUser?.email || current.email,
      password: demoUser?.password || current.password,
    }));
    setErrors((current) => ({ ...current, role: "", email: "", password: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.role) nextErrors.role = "Select a demo role.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      nextErrors.email = "Enter a valid email address.";
    if (!form.password) nextErrors.password = "Password is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const result = login(form);
    if (!result.ok) {
      setErrors({ form: result.error });
      showToast(result.error, "error");
      return;
    }

    const signedInDemoUser = DEMO_USERS.find((candidate) => candidate.role === form.role);
    showToast(`Welcome to MediFlow, ${signedInDemoUser?.fullName || "user"}!`, "success");
    navigate(result.redirectTo, { replace: true });
  };

  return (
    <div className="auth-shell">
      <section className="auth-brand-panel">
        <div className="auth-brand-content">
          <div className="auth-logo">
            <span className="auth-logo-icon">
              <FaHeartbeat />
            </span>
            MediFlow
          </div>
          <div className="mt-5">
            <h1 className="auth-hero-title">
              Modern care, <br /> beautifully managed.
            </h1>
            <p className="auth-hero-text">
              A complete clinic workspace for administrators, doctors and reception teams —
              appointments, patients, billing and reports in one place.
            </p>
            <div className="auth-feature">
              <span className="auth-feature-icon">
                <FaShieldAlt />
              </span>
              <div>
                <strong>Role-based workspaces</strong>
                <p className="text-secondary mb-0">Dedicated dashboards for every clinic role.</p>
              </div>
            </div>
            <div className="auth-feature">
              <span className="auth-feature-icon">
                <FaStethoscope />
              </span>
              <div>
                <strong>Clinical workflow ready</strong>
                <p className="text-secondary mb-0">Consultations, prescriptions and medical history.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="auth-brand-footer small text-secondary">
          Demo build · Frontend only · Fictional data
        </div>
      </section>

      <section className="auth-form-panel">
        <div className="auth-form-wrap">
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Sign in to continue to your MediFlow workspace.</p>

          <div className="mf-demo-banner">
            <strong>Demo authentication:</strong> this is a frontend-only login simulation, not
            production security. No real patient information is used.
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label className="auth-label">Select demo role</label>
            <div className="auth-role-grid mb-3">
              {ROLE_OPTIONS.map(({ role, label, icon: Icon }) => (
                <label className="auth-role-option" key={role}>
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={form.role === role}
                    onChange={() => handleRoleSelect(role)}
                  />
                  <span className="auth-role-card">
                    <Icon />
                    {label}
                  </span>
                </label>
              ))}
            </div>
            {errors.role && <div className="auth-error mb-2">{errors.role}</div>}

            <FormInput
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@clinic.com"
              autoComplete="email"
              required
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            {errors.form && <div className="auth-error mb-2">{errors.form}</div>}

            <div className="auth-row">
              <label className="auth-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={form.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <button
                type="button"
                className="btn btn-link p-0 auth-link"
                onClick={() =>
                  showToast(
                    "Demo mode: password reset is not connected to a backend.",
                    "info"
                  )
                }
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="mf-btn-primary auth-submit">
              Sign in <FaArrowRight className="ms-1" />
            </button>
          </form>

          <div className="demo-credentials">
            <strong>One-click demo accounts</strong>
            <div>Admin: admin@mediflow.demo / Admin@123</div>
            <div>Doctor: doctor@mediflow.demo / Doctor@123</div>
            <div>Reception: reception@mediflow.demo / Reception@123</div>
          </div>

          <p className="auth-footer-text">
            New to MediFlow? <Link to="/register" className="auth-link">Create a demo account</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
