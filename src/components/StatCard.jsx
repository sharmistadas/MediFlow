const TONE_COLORS = {
  blue: ["#eff6ff", "#2563eb"],
  teal: ["#ccfbf1", "#0d9488"],
  green: ["#dcfce7", "#16a34a"],
  orange: ["#fef3c7", "#d97706"],
  red: ["#fee2e2", "#dc2626"],
  indigo: ["#e0e7ff", "#4f46e5"],
};

export default function StatCard({ label, value, icon: Icon, tone = "blue" }) {
  const [background, color] = TONE_COLORS[tone] || TONE_COLORS.blue;

  return (
    <div className="stat-card">
      <div>
        <p className="stat-card-label">{label}</p>
        <div className="stat-card-value">{value}</div>
      </div>
      {Icon && (
        <span className="stat-card-icon" style={{ background, color }}>
          <Icon />
        </span>
      )}
    </div>
  );
}
