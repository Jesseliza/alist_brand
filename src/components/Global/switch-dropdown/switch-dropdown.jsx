import React, { useState } from "react";

const CustomDropdown = ({ selectedOption, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value) => {
    onOptionChange(value);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const renderDropdownItems = () => {
    if (selectedOption === "public") {
      return (
        <>
          <div
            onClick={() => handleOptionChange("public")}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#767676",
              color: "#fff",
              borderTopLeftRadius: "15px", // Top-left corner
              borderTopRightRadius: "15px", // Top-right corner
            }}
          >
            Public reviews
          </div>
          <div
            onClick={() => handleOptionChange("private")}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#767676",
              borderBottomLeftRadius: "15px", // Top-left corner
              borderBottomRightRadius: "15px", // Top-right corner
            }}
          >
            Private Reviews
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            onClick={() => handleOptionChange("private")}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#767676",
              color: "#fff",
              borderTopLeftRadius: "15px", // Top-left corner
              borderTopRightRadius: "15px", // Top-right corner
            }}
          >
            Private Reviews
          </div>
          <div
            onClick={() => handleOptionChange("public")}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#767676",
              borderBottomLeftRadius: "15px", // Top-left corner
              borderBottomRightRadius: "15px", // Top-right corner
            }}
          >
            Public reviews
          </div>
        </>
      );
    }
  };

  return (
    <div style={{ position: "relative", width: "150px" }}>
      <div
        onClick={toggleDropdown}
        style={{
          backgroundColor: "#fff", // Gray background color
          color: "#767676", // White text color
          padding: "10px",
          cursor: "pointer",
          borderRadius: isOpen ? "5px 5px 0 0" : "5px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          {selectedOption === "public" ? "Public reviews" : "Private Reviews"}
        </span>
        <img src="/images/teams/select-arrow.svg" alt="Arrow" />
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "0", // Dropdown starts from the top, covering the button
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",

            zIndex: "1000",
            transform: "translateY(0%)", // Move the dropdown up to cover the button
          }}
        >
          {renderDropdownItems()}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
