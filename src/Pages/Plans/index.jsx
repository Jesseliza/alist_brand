import "./styles.scss";
import React, { useState } from "react";

import Icon from "../../Icons";

const PaymentPlan = () => {
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ts-wrapper-body">
      <div className="ts-payment-plan mb-08">
        <p className="font-segoe ts-lh-100 mb-0">Current Plan</p>
        <hr className="mt-2" />
        <div className="d-flex justify-content-between flex-wrap gap-3">
          <div>
            <h4 className="ts-text-primary ts-fs-4 fw-semibold mb-1">
              Alist Premium Subscription
            </h4>
            <h1 className="ts-text-gray-3 ts-fs-2 fw-bold mb-1">
              Alist Premium Subscription
            </h1>
            <p className="mb-07">AED 17,997 billed every 3 months</p>

            <div>
              <button
                className={`btn ts-btn-collapse ts-fs-7 p-0 mb-2 border-0 ${
                  showDetails ? "active" : ""
                }`}
                type="button"
                onClick={toggleDetails}
              >
                {showDetails ? "Hide" : "Show"} details{" "}
                <span className="ms-2">
                  <Icon name="arrow-up" />
                </span>
              </button>
              <br />

              {showDetails && (
                <div className="ts-card-wrapper">
                  <div className="ts-card ts-card--sm ts-card__white d-inline-flex gap-3 mb-2">
                    <div>
                      <p className="mb-2 ts-lh-100">
                        Alist Premium Subscription
                      </p>
                      <p className="mb-2 ts-lh-100">Addons</p>
                      <p className="mb-0 fw-semibold">Total</p>
                    </div>
                    <div className="text-end">
                      <p className="mb-2 ts-lh-100">AED 5,999</p>
                      <p className="mb-2 ts-lh-100">N/A</p>
                      <p className="mb-0 fw-semibold">AED 5,999</p>
                    </div>
                  </div>
                  <p className="ts-text-primary ts-fs-7 mb-0">
                    Your plan renews on January 25, 2024
                  </p>
                </div>
              )}
            </div>

            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="ts-btn ts-btn--md ts-btn__white rounded">
              Cancel plan
            </button>
          </div>
        </div>
      </div>
      <div className="ts-billing-info mb-08">
        <p className="ts-lh-100 mb-0">Payment Method</p>
        <hr className="mt-2" />
        <div className="ts-fs-7">
          <div className="d-flex flex-wrap gap-3 gap-md-5">
            <div>
              <p>
                <Icon name="visa" />{" "}
                <span className="ms-2"> Visa **** 5434 </span>
              </p>
            </div>
            <div>
              <p>
                Expires 05/2026{" "}
                <span className="ms-3">
                  <Icon name="grid-dots" />
                </span>
              </p>
            </div>
          </div>
          <p className="fw-semibold">+ Add payment method</p>
        </div>
      </div>
      <div className="ts-billing-info mb-08">
        <p className="ts-lh-100 mb-0">Billing Information</p>
        <hr className="mt-2" />
        <div className="ts-fs-7">
          <div className="d-flex flex-wrap gap-3 gap-md-5">
            <div>
              <p>Name:</p>
              <p>Billing address</p>
            </div>
            <div>
              <p>Jessica Willis</p>
              <p>
                567 Willow Lane, Los Angeles, <br />
                CA 90001, USA
              </p>
            </div>
          </div>
          <p className="fw-semibold">+ Update information</p>
        </div>
      </div>
      <div className="ts-billing-info mb-08">
        <p className="ts-lh-100 mb-0">Invoice History</p>
        <hr className="mt-2" />
        <div className="ts-fs-7">
          <div className="d-flex flex-wrap gap-3 gap-md-5">
            <div>
              <p className="mb-0">Nov 15, 2023:</p>
            </div>
            <div>
              <p className="mb-0">AED 5,999</p>
            </div>
            <div>
              <span className="ts-tag ts-tag-success">Paid</span>
            </div>
            <div>
              <p className="mb-0">Alist Premium Subscription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
