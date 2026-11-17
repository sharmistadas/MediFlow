import DashboardOverview from "../DashboardOverview";
import { ROLES } from "../../data/dummyData";

export default function DoctorDashboard() {
  return (
    <DashboardOverview
      role={ROLES.DOCTOR}
      title="Doctor Dashboard"
      subtitle="Your day at a glance — appointments, patients and pending work."
    />
  );
}
