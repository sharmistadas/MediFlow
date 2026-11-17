import ModulePlaceholder from "../ModulePlaceholder";
import { ROLES } from "../../data/dummyData";

export default function AdminPatients() {
  return <ModulePlaceholder title="Patient Management" role={ROLES.ADMIN} />;
}
