import DashboardOverview from "../DashboardOverview";
import { ROLES } from "../../data/dummyData";

export default function ReceptionistDashboard() {
  return (
    <DashboardOverview
      role={ROLES.RECEPTIONIST}
      title="Receptionist Dashboard"
      subtitle="Front-desk overview of registrations, appointments and pending payments."
    />
  );
}
