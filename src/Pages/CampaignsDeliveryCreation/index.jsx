import React, { useState } from "react";
import Delivery from "../../components/Campaigns/Create/Delivery";
import DineIn from "../../components/Campaigns/Create/DineIn";

const CampaignDetails = () => {
  const [isDeliveryView, setIsDeliveryView] = useState(false);

  const toggleView = () => {
    setIsDeliveryView(!isDeliveryView);
  };

  const viewType = isDeliveryView ? "Delivery" : "Dine-In / Experience";
  const toggleButtonText = isDeliveryView
    ? "Switch to dine-in"
    : "Switch to delivery";

  return (
    <>
      <div className="ts-wrapper-head ts-wrapper-head--light">
        <div className="ts-wrapper-head__main d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <h1 className="ts-fs-3 mb-0 fw-semibold">
            Campaign type:{" "}
            <span className="ts-text-primary text-nowrap">{viewType}</span>
          </h1>

          <div className="d-flex flex-md-column gap-2">
            <button className="ts-btn ts-btn__primary ts-btn--rounded ts-px-10 fw-semibold">
              Return to campaigns
            </button>

            <button
              className="ts-btn ts-btn__secondary ts-btn--rounded ts-px-10 fw-semibold"
              onClick={toggleView}
            >
              {toggleButtonText}
            </button>
          </div>
        </div>
      </div>

      <div className="ts-wrapper-body">
        {isDeliveryView ? <Delivery /> : <DineIn />}
      </div>
    </>
  );
};

export default CampaignDetails;
