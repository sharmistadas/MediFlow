import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaHeartbeat, FaUserPlus } from "react-icons/fa";
import FormInput from "../../components/FormInput";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";

export default function Register() {
  const { user, dashboardPath, register } = useAuth();
  const { showToast } = useNotification();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  if (user) {
    return <Navigate to={dashboardPath} replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (form.fullName.trim().length < 2)
      nextErrors.fullName = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      nextErrors.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(form.phone.trim()))
      nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (form.password.length < 8)
      nextErrors.password = "Password must be at least 8 characters.";
    if (form.password !== form.confirmPassword)
      nextErrors.confirmPassword = "Passwords do not match.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const result = register(form);
    if (!result.ok) {
      setErrors({ email: result.error });
      showToast(result.error, "error");
      return;
    }

    showToast(result.message, "success");
    navigate("/login");
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
            <h1 className="auth-hero-title">Join the clinic team.</h1>
            <p className="auth-hero-text">
              Create a demo receptionist account to explore patient registration, appointments,
              billing and payment history.
            </p>
          </div>
        </div>
        <div className="auth-brand-footer small text-secondary">
          Demo build · Frontend only · Fictional data
        </div>
      </section>

      <section className="auth-form-panel">
        <div className="auth-form-wrap">
          <h2 className="auth-title">Create account</h2>
          <p className="auth-subtitle">Register a demo staff account for this browser.</p>

          <div className="mf-demo-banner">
            Demo registration only: account data is saved in your browser localStorage. New
            accounts use the Receptionist role.
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <FormInput
              label="Full name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="e.g. Ananya Rao"
              required
            />
            <FormInput
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@clinic.com"
              required
            />
            <FormInput
              label="Phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="10-digit mobile number"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="At least 8 characters"
              required
            />
            <FormInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Repeat your password"
              required
            />

            <button type="submit" className="mf-btn-primary auth-submit">
              <FaUserPlus className="me-2" /> Create demo account
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
