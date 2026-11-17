/* oxlint-disable react/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const NotificationContext = createContext(null);

let nextToastId = 1;

export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "success") => {
      const id = nextToastId++;
      setToasts((current) => [...current, { id, message, type }]);
      // Keep the UI tidy by removing the toast automatically.
      window.setTimeout(() => dismissToast(id), 3500);
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({ toasts, showToast, dismissToast }),
    [toasts, showToast, dismissToast]
  );

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used inside NotificationProvider");
  }
  return context;
}
