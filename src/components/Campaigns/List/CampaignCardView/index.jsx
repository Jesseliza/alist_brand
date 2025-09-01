import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../../../Icons";

import "./styles.scss";

const CampaignCard = () => {
  return (
    <Link
      className="ts-campaign-card text-decoration-none"
      to="/campaigns/details"
    >
      <div className="ts-campaign-card__head">
        <img
          className="w-100"
          src="/images/campaign/card-image.jpg"
          alt="Campaign"
        />
      </div>
      <div className="ts-campaign-card__body">
        <p className="ts-text-gray-1 mb-03 text-center">
          Fujiyama Special Sushi Platter
        </p>
        <hr className="mb-03 mt-0 ts-text-gray-10 opacity-100" />
        <div className="row row-cols-3 ts-text-gray-3">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <span className="ts-chat">
              <Icon name="chat" />
            </span>
            <span className="ts-fs-3 fw-semibold ts-lh-100"> 34 </span>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <span className="ts-picture">
              <Icon name="picture" />
            </span>
            <span className="ts-fs-3 fw-semibold ts-lh-100"> 2 </span>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <span className="ts-heartmagnet">
              <Icon name="magnet-heart" />
            </span>
            <span className="ts-fs-3 fw-semibold ts-lh-100"> 3K </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
