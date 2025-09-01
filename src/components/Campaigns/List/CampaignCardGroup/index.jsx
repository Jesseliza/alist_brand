import React from "react";
import CampaignCardView from "../CampaignCardView"; // Update the path as per your file structure

import "./styles.scss"; // Update the path as per your file structure

const CampaignCardGroup = () => {
  return (
    <div className="ts-campaign-card-group">
      <CampaignCardView />
      <CampaignCardView />
      <CampaignCardView />
      <CampaignCardView />
      <CampaignCardView />
      <CampaignCardView />
    </div>
  );
};

export default CampaignCardGroup;
