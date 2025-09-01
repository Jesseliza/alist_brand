import React, { useState } from "react";
// import CardView from "./CardView/Mobile"; // Adjust the import path as necessary
import CardView from "./CardView"; // Adjust the import path as necessary

import "./styles.scss";
const CardGroupView = ({ activeAddons, updateAddonsGrandParentMain }) => {
  const [addons, setAddons] = useState([
    {
      id: 1,
      title: "Brand Removal",
      price: "AED 1,499",
      imgSrc: "/images/addons/brand-removal.svg",
      isIncluded: true,
      canIncluded: false,
    },
    {
      id: 2,
      title: "Content Usage",
      price: "AED 2,499",
      imgSrc: "/images/addons/content-usage.svg",
      isIncluded: false,
      canIncluded: true,
      defaultChecked: true,
    },
    {
      id: 3,
      title: "Add Hashtags",
      price: "AED 999",
      imgSrc: "/images/addons/add-hash-tags.svg",
      isIncluded: true,
      canIncluded: false,
    },
    {
      id: 4,
      title: "Tap / Discount",
      price: "AED 999",
      imgSrc: "/images/addons/discount.svg",
      isIncluded: true,
      canIncluded: false,
    },
    {
      id: 5,
      title: "Demographic Filters",
      price: "AED 999",
      imgSrc: "/images/addons/demographic-filter.svg",
      isIncluded: true,
      canIncluded: false,
    },
    {
      id: 6,
      title: "Pre-Select Creators",
      price: "AED 2,999",
      imgSrc: "/images/addons/demographic-filter.svg",
      isIncluded: false,
      canIncluded: true,
      defaultChecked: true,
    },
    {
      id: 7,
      title: "Priority Pass",
      price: "AED 1,999",
      imgSrc: "/images/addons/priority-passes.svg",
      isIncluded: false,
      canIncluded: true,
      defaultChecked: false,
    },
  ]);

  return (
    <div className="ts-addons-card-group">
      {addons.map((addon, index) => (
        <CardView
          key={index}
          id={addon.id}
          title={addon.title}
          price={addon.price}
          imgSrc={addon.imgSrc}
          isIncluded={addon.isIncluded}
          canIncluded={addon.canIncluded}
          defaultChecked={addon.defaultChecked}
          activeAddons={activeAddons}
        />
      ))}
    </div>
  );
};

export default CardGroupView;
