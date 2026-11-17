import { useEffect } from "react";


export default function Modal({ isOpen, onClose, title, children, footer }) {
  // Close modal with Escape key for better keyboard accessibility.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mf-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="mf-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
          <h5 className="mb-0 fw-bold">{title}</h5>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
        </div>
        <div className="p-3">{children}</div>
        {footer && <div className="border-top p-3 d-flex justify-content-end gap-2">{footer}</div>}
      </div>
    </div>
  );
}
