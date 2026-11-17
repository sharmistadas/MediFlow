import { FaInbox } from "react-icons/fa";

export default function EmptyState({ message = "Nothing here yet." }) {
  return (
    <div className="mf-empty-state">
      <FaInbox />
      <p className="mb-0">{message}</p>
    </div>
  );
}
