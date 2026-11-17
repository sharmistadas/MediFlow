import ModulePlaceholder from "../ModulePlaceholder";
import { ROLES } from "../../data/dummyData";

export default function AdminPrescriptions() {
  return <ModulePlaceholder title="Prescription Management" role={ROLES.ADMIN} />;
}
