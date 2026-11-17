/* oxlint-disable react/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { DEMO_USERS, ROLE_DASHBOARD_PATHS } from "../data/dummyData";

const AuthContext = createContext(null);

const USER_STORAGE_KEY = "mediflow.demo.user";
const REGISTERED_USERS_KEY = "mediflow.demo.registeredUsers";

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

// Demo-only authentication: data stays in the browser and is not secure.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStorage(USER_STORAGE_KEY, null));

  const login = ({ email, password, role, rememberMe }) => {
    const registeredUsers = readStorage(REGISTERED_USERS_KEY, []);
    const allUsers = [...DEMO_USERS, ...registeredUsers];
    const normalizedEmail = email.trim().toLowerCase();

    const matchedUser = allUsers.find(
      (candidate) =>
        candidate.email.toLowerCase() === normalizedEmail &&
        candidate.password === password &&
        candidate.role === role
    );

    if (!matchedUser) {
      return {
        ok: false,
        error: "Invalid email, password, or selected demo role.",
      };
    }

    const safeUser = {
      id: matchedUser.id,
      fullName: matchedUser.fullName,
      email: matchedUser.email,
      role: matchedUser.role,
      rememberMe: Boolean(rememberMe),
    };

    setUser(safeUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
    return { ok: true, redirectTo: ROLE_DASHBOARD_PATHS[safeUser.role] };
  };

  const register = ({ fullName, email, phone, password }) => {
    const registeredUsers = readStorage(REGISTERED_USERS_KEY, []);
    const normalizedEmail = email.trim().toLowerCase();

    const emailExists =
      [...DEMO_USERS, ...registeredUsers].some(
        (candidate) => candidate.email.toLowerCase() === normalizedEmail
      );

    if (emailExists) {
      return { ok: false, error: "An account with this email already exists." };
    }

    // New demo registrations receive the receptionist role by default.
    const newUser = {
      id: `REC-${String(registeredUsers.length + 2).padStart(3, "0")}`,
      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password,
      role: "RECEPTIONIST",
    };

    localStorage.setItem(
      REGISTERED_USERS_KEY,
      JSON.stringify([...registeredUsers, newUser])
    );
    return {
      ok: true,
      // Do not auto-login: user should see the role-based demo login flow.
      message: "Demo account created. Please log in as Receptionist.",
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      role: user?.role || null,
      dashboardPath: user ? ROLE_DASHBOARD_PATHS[user.role] : "/login",
      login,
      register,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
