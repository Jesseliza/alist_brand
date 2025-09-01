import React from "react";
import "./CustomModal.scss";

const CustomModal = ({ show, onClose, children, title }) => {
  if (!show) return null;

  return (
    <div className="custom-modal-secondary-overlay" onClick={onClose}>
      <div
        className="custom-modal-secondary"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
