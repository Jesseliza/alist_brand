// PlansCardsPage.jsx

import React from "react";
import PackagesGroup from "../../components/Subscriptions/Packages/PackagesGroup"; // Adjust the path as per your project structure
import "./styles.scss"; // Import your scoped or regular CSS file

const PlansCardsPage = () => {
  return (
    <div className="plans-cards-page">
      <PackagesGroup />
    </div>
  );
};

export default PlansCardsPage;
