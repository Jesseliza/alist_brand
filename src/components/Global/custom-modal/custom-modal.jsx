import React from "react";
import "./modal.css"; // We'll create this CSS file next

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="custom-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
