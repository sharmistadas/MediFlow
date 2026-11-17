import ModulePlaceholder from "../ModulePlaceholder";
import { ROLES } from "../../data/dummyData";

export default function DoctorPrescription() {
  return <ModulePlaceholder title="Prescription Management" role={ROLES.DOCTOR} />;
}
