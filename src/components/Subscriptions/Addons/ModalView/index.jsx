import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardGroupView from "../CardsGroup"; // Adjust the path as needed
import "./styles.scss";
import Icon from "../../../../Icons"; // Assuming this is correctly imported

const UpgradePlanModal = () => {
  const [activeAddons, setActiveAddons] = useState("1");
  const navigate = useNavigate();

  const closeModal = ({ removeBackDrop }) => {
    const modal = document.getElementById("addOnsModal");
    const modalBackdrop = document.querySelector(".modal-backdrop");
    const body = document.querySelector("body");

    if (modal && modalBackdrop && body) {
      modal.classList.remove("show"); // Hide the modal
      // if (!removeBackDrop) {
      // }
      modalBackdrop.remove(); // Remove the modal backdrop
      body.classList.remove("modal-open"); // Remove the modal-open class from the body
      navigate("/billing"); // Navigate to the '/Billing' route
    }
  };

  const updateAddons = (id) => {
    setActiveAddons(id);
  };

  return (
    <div className="ts-addone-modal-container">
      <div className="mb-4">
        <h1 className="ts-fs-2 ts-font-heading fw-regular ts-lh-100 mb-3">
          Upgrade your plan
        </h1>
        <h1 className="ts-fs-3 ts-font-heading fw-light ts-lh-100 mb-4">
          Enhance Your Subscription with optional Add-Ons.
        </h1>
      </div>

      <div className="ts-addons-row">
        <CardGroupView
          activeAddons={activeAddons}
          updateAddonsGrandParentMain={updateAddons}
        />

        <div className="d-flex flex-column justify-content-between">
          <div className="ts-addons-card ts-font-heading ts-fs-4">
            {activeAddons === 1 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Brand Removal:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 2 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Content Usage:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 3 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Add Hashtags:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 4 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Tap Discount:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 5 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Demographic Filters:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 6 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Pre Select Filters:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
            {activeAddons === 7 && (
              <>
                <h5 className="ts-text-gray-4 ts-fs-4">Priority Pass:</h5>
                <p className="ts-text-gray-4 mb-08">
                  Accelerate Campaign Launch and Management. Our dedicated
                  account managers provide real-time visibility and seamless
                  execution to get your influencer campaigns up and running
                  quickly. Access live dashboard updates on:
                </p>
                <ol className="ts-text-gray-4 ps-3">
                  <li>Campaign activation status</li>
                  <li>Daily redemption tracking</li>
                  <li>Content uploads from creators</li>
                  <li>Mid-campaign optimization</li>
                </ol>
              </>
            )}
          </div>

          <div className="d-flex justify-content-end gap-3">
            <button
              className="ts-btn ts-btn__dark-gray-2 rounded-pill d-flex align-items-center px-4 fw-semibold ts-lh-135"
              data-bs-toggle="modal"
              data-bs-target="#upgradePlan"
              onClick={() => closeModal(false)}
            >
              <div className="ts-primary-arrow">
                <Icon name="arrow-left-2" />
              </div>
              <span className="ms-3"> Back to Plans </span>
            </button>
            <button
              className="ts-btn ts-btn__primary rounded-pill d-flex align-items-center px-5 fw-semibold ts-lh-135"
              onClick={closeModal}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanModal;
