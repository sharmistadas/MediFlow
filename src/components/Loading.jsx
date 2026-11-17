export default function Loading({ message = "Loading..." }) {
  return (
    <div className="mf-loading">
      <div className="mf-spinner" />
      <span>{message}</span>
    </div>
  );
}
