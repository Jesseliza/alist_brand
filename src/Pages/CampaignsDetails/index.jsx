import React, { useState } from "react";
import HeaderView from "../../components/Campaigns/List/HeaderView";
import CampaignPosts from "../../components/Campaigns/List/Details/CampaignPosts";
import PublicReviewView from "../../components/Campaigns/List/Details/PublicReviewView";
import PrivateReviewView from "../../components/Campaigns/List/Details/PrivateReviewView";
import RedemptionsView from "../../components/Campaigns/List/Details/RedemptionsView";
import CreatorsView from "../../components/Campaigns/List/Details/Creators";

import CustomDropdown from "../../components/Global/switch-dropdown/switch-dropdown";

function CampaignDetails() {
  const [selectedOption, setSelectedOption] = useState("public");

  return (
    <>
      <HeaderView />
      <div className="ts-wrapper-body">
        <div className="ts-campaign-details-wrapper">
          <img
            className="d-none d-md-block w-100"
            src="/images/campaign/post-details.png"
            alt="..."
          />

          <div className="ts-campaign-details-wrapper__body">
            <p className="ts-campaign-details-heading ts-font-heading ts-fs-4 text-center mb-05">
              Fujiyama Special Sushi Platter | Jan 13, 2023 - Feb 11, 20231
            </p>
            <div className="ts-nav-tabs-wrapper d-flex justify-content-center mb-07">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="campaign-nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold px-2"
                    id="pills-Redemptions-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Redemptions"
                    type="button"
                    role="tab"
                    aria-controls="pills-Redemptions"
                    aria-selected="false"
                  >
                    Overview
                  </button>
                </li>
                <li className="campaign-nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold px-2 active"
                    id="pills-Posts-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Posts"
                    type="button"
                    role="tab"
                    aria-controls="pills-Posts"
                    aria-selected="false"
                  >
                    Posts
                  </button>
                </li>
                <li className="campaign-nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold px-2"
                    id="pills-Reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-Reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
                <li className="campaign-nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold px-2"
                    id="pills-Creators-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Creators"
                    type="button"
                    role="tab"
                    aria-controls="pills-Creators"
                    aria-selected="false"
                  >
                    Creators
                  </button>
                </li>
              </ul>
            </div>
            <hr className="mb-07" />
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-Posts"
                role="tabpanel"
                aria-labelledby="pills-Posts-tab"
                tabIndex="0"
              >
                <CampaignPosts />
              </div>
              <div
                className="tab-pane fade"
                id="pills-Reviews"
                role="tabpanel"
                aria-labelledby="pills-Reviews-tab"
                tabIndex="1"
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    {selectedOption === "public" && (
                      <div className="d-flex align-items-center gap-3">
                        <div>
                          <img
                            width="33"
                            height="33"
                            src="/images/campaign/google-circle.svg"
                            alt="..."
                          />
                        </div>
                        <div>
                          <p className="ts-fs-4 ts-font-heading mb-0">
                            Google:{" "}
                            <span className="fw-semibold-heading ts-text-primary">
                              {" "}
                              4.5/5{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedOption === "private" && (
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <div>
                          <img
                            width="33"
                            height="33"
                            src="/images/campaign/alist-circle.svg"
                            alt="..."
                          />
                        </div>
                        <div>
                          <p className="ts-fs-4 ts-font-heading mb-0">
                            Alist Rating:
                            <span className="fw-semibold-heading ts-text-primary">
                              {" "}
                              4.5/5{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="d-flex justify-content-end ">
                      <CustomDropdown
                        selectedOption={selectedOption}
                        onOptionChange={(option) => setSelectedOption(option)}
                      />
                    </div>
                  </div>

                  {selectedOption === "public" && <PublicReviewView />}
                  {selectedOption === "private" && <PrivateReviewView />}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Redemptions"
                role="tabpanel"
                aria-labelledby="pills-Redemptions-tab"
                tabIndex="2"
              >
                <RedemptionsView />
              </div>
              <div
                className="tab-pane fade"
                id="pills-Creators"
                role="tabpanel"
                aria-labelledby="pills-Creators-tab"
                tabIndex="3"
              >
                <CreatorsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignDetails;
