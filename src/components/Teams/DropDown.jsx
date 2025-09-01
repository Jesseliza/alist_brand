import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./DropDown.scss";

const CustomDropdown = ({
  selectedDropdownItem,
  roles,
  handleDropdownRoleChange,
  specificstyles,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <Dropdown onToggle={handleToggle}>
      <Dropdown.Toggle
        className={specificstyles}
        id="dropdown-basic"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="add-user-modal-input__placeholder">
          {selectedDropdownItem}
        </div>
        <img
          src="/images/teams/select-arrow.svg"
          alt=""
          style={{
            transform: isOpen
              ? "rotate(180deg) translateX(-10%)"
              : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="user-dropdown-menu">
        {roles.map((role, roleIndex) => (
          <Dropdown.Item
            className="teams-dropdown-item"
            key={roleIndex}
            onClick={() => handleDropdownRoleChange(role)}
          >
            {role}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
