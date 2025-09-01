import React, { useState } from "react";
import CampaignCardGroupView from "../../components/Campaigns/List/CampaignCardGroup";
import HeaderView from "../../components/Campaigns/List/HeaderView";

import "./styles.scss";

function CampaignList() {
  const [dropdownButtonText, setDropdownButtonText] = useState("Latest"); // Default dropdown button text

  const updateButtonText = (text) => {
    setDropdownButtonText(text);
  };

  return (
    <>
      <HeaderView />

      <div className="ts-wrapper-body">
        <div className="ts-campaign-wrapper">
          <div className="d-flex flex-column-reverse d-xl-block">
            <div className="d-flex position-relative ms-auto mb-05 mb-xl-0 z-3">
              <div className="dropdown ts-filter-select pe-0 w-auto">
                <button
                  className="btn p-0 dropdown-toggle border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownButtonText}
                </button>
                <ul className="dropdown-menu dropdown-menu-end fw-semibold">
                  <li onClick={() => updateButtonText("Newest to oldest")}>
                    <span className="dropdown-item d-flex gap-3 align-items-center">
                      Newest to oldest
                    </span>
                  </li>
                  <li onClick={() => updateButtonText("Oldest to newest")}>
                    <span className="dropdown-item d-flex gap-3 align-items-center">
                      Oldest to newest
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ts-nav-tabs-wrapper d-flex justify-content-center mb-4 mb-lg-07">
              <ul
                className="nav nav-pills ts-nav-campaign-details"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold active"
                    id="pills-Completed-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Completed"
                    type="button"
                    role="tab"
                    aria-controls="pills-Completed"
                    aria-selected="true"
                  >
                    Completed
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold"
                    id="pills-Live-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Live"
                    type="button"
                    role="tab"
                    aria-controls="pills-Live"
                    aria-selected="false"
                  >
                    Live
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw-semibold"
                    id="pills-Pending-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Pending"
                    type="button"
                    role="tab"
                    aria-controls="pills-Pending"
                    aria-selected="false"
                  >
                    Pending
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mb-07 d-none d-xxl-block" />

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Completed"
              role="tabpanel"
              aria-labelledby="pills-Completed-tab"
              tabIndex="0"
            >
              <CampaignCardGroupView />
            </div>
            <div
              className="tab-pane fade"
              id="pills-Live"
              role="tabpanel"
              aria-labelledby="pills-Live-tab"
              tabIndex="0"
            >
              <CampaignCardGroupView />
            </div>
            <div
              className="tab-pane fade"
              id="pills-Pending"
              role="tabpanel"
              aria-labelledby="pills-Pending-tab"
              tabIndex="0"
            >
              <CampaignCardGroupView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignList;
