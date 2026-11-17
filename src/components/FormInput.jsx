import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

// Reusable labelled input with validation message and optional password visibility toggle.
export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
  required = false,
  autoComplete,
  className = "auth-input",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-3">
      {label && (
        <label className="auth-label" htmlFor={name}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className={isPassword ? "auth-password-wrap" : ""}>
        <input
          id={name}
          name={name}
          type={inputType}
          className={`${className} ${error ? "is-invalid" : ""}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
        />
        {isPassword && (
          <button
            type="button"
            className="auth-password-toggle"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <div className="auth-error">{error}</div>}
    </div>
  );
}
