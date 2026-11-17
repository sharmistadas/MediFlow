import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import { useNotification } from "../context/NotificationContext";

const ICONS = {
  success: FaCheckCircle,
  error: FaExclamationCircle,
  warning: FaExclamationCircle,
  info: FaInfoCircle,
};

export default function Notification() {
  const { toasts, dismissToast } = useNotification();

  return (
    <div className="mf-toast-stack" aria-live="polite">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.type] || FaInfoCircle;
        return (
          <div key={toast.id} className={`mf-toast mf-toast${toast.type}`}>
            <Icon className="mt-1" />
            <span className="flex-grow-1">{toast.message}</span>
            <button
              type="button"
              className="btn-close"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
            />
          </div>
        );
      })}
    </div>
  );
}
