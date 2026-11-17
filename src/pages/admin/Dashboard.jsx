import DashboardOverview from "../DashboardOverview";
import { ROLES } from "../../data/dummyData";

export default function AdminDashboard() {
  return (
    <DashboardOverview
      role={ROLES.ADMIN}
      title="Admin Dashboard"
      subtitle="Clinic-wide overview of patients, doctors, appointments and revenue."
    />
  );
}
