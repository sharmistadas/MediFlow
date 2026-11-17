import ModulePlaceholder from "../ModulePlaceholder";
import { ROLES } from "../../data/dummyData";

export default function AdminDoctors() {
  return <ModulePlaceholder title="Doctor Management" role={ROLES.ADMIN} />;
}
