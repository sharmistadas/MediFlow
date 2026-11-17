const STATUS_CLASS_NAMES = {
  scheduled: "status-scheduled",
  confirmed: "status-confirmed",
  completed: "status-completed",
  cancelled: "status-cancelled",
  pending: "status-pending",
  paid: "status-paid",
  unpaid: "status-unpaid",
  "partially paid": "status-partially-paid",
  active: "status-active",
  warning: "status-warning",
};

export default function StatusBadge({ status }) {
  if (!status) return null;
  const cssClass = STATUS_CLASS_NAMES[String(status).toLowerCase()] || "status-scheduled";

  return <span className={`status-badge ${cssClass}`}>{status}</span>;
}
