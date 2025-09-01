import "./styles.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Icon from "../../Icons";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const Billing = () => {
  const [currentState, setCurrentState] = useState("step-1");
  const [transferType, setTransferType] = useState("credit-debit-card");
  const [promoCode, setPromoCode] = useState("ALIST2024RLONGPROMOCODE");
  const [showDiscount, setShowDiscount] = useState(false);
  const [dropdownButtonText, setDropdownButtonText] = useState("Emirate");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const storedMonth = localStorage.getItem("selectedMonth");
    setSelectedMonth(storedMonth);
  }, []);

  const goToStep = (step) => {
    if (currentState === "step-1") {
      if (transferType === "credit-debit-card") {
        setCurrentState("step-2");
      } else {
        setCurrentState("step-3");
      }
    } else {
      setCurrentState(step);
    }
  };

  const handleBackBilling = () => {
    if (currentState === "step-4") {
      setCurrentState("step-3");
    } else if (currentState === "step-3") {
      setCurrentState("step-1");
    } else if (currentState === "step-2") {
      setCurrentState("step-1");
    } else {
      if (window.innerWidth < 991) {
        navigate("/addons"); // Use navigate() to navigate programmatically
      } else {
        navigate("/"); // Use navigate() to navigate programmatically
      }
    }
  };

  const handleCheckboxChange = (type) => {
    setTransferType(type);
  };

  const handlePromoCodeChange = () => {
    setShowDiscount(promoCode !== "");
  };

  return (
    <main className="ts-billing-wrapper d-flex justify-content-center align-items-center">
      <div
        className="ts-billing-wrapper-main"
        style={{ display: currentState !== "step-4" ? "block" : "none" }}
      >
        <button
          className="btn border-0 p-0 d-flex gap-3 align-items-center mb-5"
          onClick={handleBackBilling}
        >
          <Icon name="arrow-left-2" />
          <img width="78" height="25" src="/images/alist-logo.svg" alt="..." />
        </button>

        <div className={`ts-biling-row ${currentState}`}>
          <div>
            <h6 className="ts-fs-4 ts-text-gray-4">
              Subscribe to Alist Premium Subscription
            </h6>
            <div className="ts-billing-card mb-2">
              <div className="d-flex gap-2 align-items-center">
                <h1 className="ts-fs-md fw-bold mb-0">AED 5,999</h1>

                <div className="ts-text-gray-4 ts-permonth">
                  <p className="ts-fs-7 ts-lh-115 mb-0">per</p>
                  <p className="ts-fs-7 ts-lh-115 mb-0">month</p>
                </div>
              </div>
              <div className="ts-permonth">
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="ts-lh-115 mb-0 fw-semibold">
                      Alist Premium Subscription
                    </p>

                    {selectedMonth === "3months" && (
                      <p className="ts-lh-115 ts-fs-7 mb-0">
                        Billed every 3 months
                      </p>
                    )}
                    {selectedMonth === "6months" && (
                      <p className="ts-lh-115 ts-fs-7 mb-0">
                        Billed every 6 months
                      </p>
                    )}
                    {selectedMonth === "12months" && (
                      <p className="ts-lh-115 ts-fs-7 mb-0">
                        Billed every 12 months
                      </p>
                    )}
                  </div>
                  <p className="ts-lh-115 mb-0 fw-semibold">AED 17,997</p>
                </div>
              </div>
              {selectedMonth === "3months" && (
                <div className="ts-mt-12p ts-fs-7">
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 mb-0">3 months 5% discount</p>
                    <p className="ts-lh-115 mb-0">- 2,499</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 fw-semibold mb-0">Subtotal</p>
                    <p className="ts-lh-115 fw-semibold mb-0">AED 15,498</p>
                  </div>
                </div>
              )}
              {selectedMonth === "6months" && (
                <div className="ts-mt-12p ts-fs-7">
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 mb-0">6 months 10% discount</p>
                    <p className="ts-lh-115 mb-0">- 2,499</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 fw-semibold mb-0">Subtotal</p>
                    <p className="ts-lh-115 fw-semibold mb-0">AED 15,498</p>
                  </div>
                </div>
              )}
              {selectedMonth === "12months" && (
                <div className="ts-mt-12p ts-fs-7">
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 mb-0">12 months 20% discount</p>
                    <p className="ts-lh-115 mb-0">- 48,999</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="ts-lh-115 fw-semibold mb-0">Subtotal</p>
                    <p className="ts-lh-115 fw-semibold mb-0">AED 15,498</p>
                  </div>
                </div>
              )}
            </div>
            <div className="ts-billing-card ts-addons-addons-card mb-2">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="ts-lh-115 fw-semibold mb-0">Add-ons</p>
                <p className="ts-lh-115 fw-semibold mb-0">AED 6,797</p>
              </div>
              <div className="ts-fs-7">
                <div className="d-flex justify-content-between mb-1">
                  <p className="ts-lh-115 mb-0">Content Usage</p>
                  <p className="ts-lh-115 mb-0">AED 2,499</p>
                </div>

                <div className="d-flex justify-content-between mb-1">
                  <p className="ts-lh-115 mb-0">Pre-Select Creators</p>
                  <p className="ts-lh-115 mb-0">AED 2,299</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="ts-lh-115 mb-0">Priority Pass</p>
                  <p className="ts-lh-115 mb-0">AED 1,999</p>
                </div>
              </div>
            </div>
            <div className="ts-billing-card ts-addons-addons-card mb-2">
              <div className="d-flex justify-content-between">
                <p className="ts-lh-115 fw-semibold mb-0">Total</p>
                <p className="ts-lh-115 fw-semibold mb-0">AED 24,794</p>
              </div>
            </div>
            <div
              className={`ts-billing-card ts-addons-addons-card py-0 ${
                showDiscount ? "ts-addons-addons-card--success" : ""
              }`}
            >
              <span className="ts-icon"></span>
              <div className="d-flex align-items-center gap-5">
                <p className="ts-lh-115 text-nowrap mb-0">Enter Promo Code:</p>
                <input
                  type="text"
                  className="form-control ts-noshadow flex-grow border-0 fw-semibold py-3"
                  placeholder="Type your Promo Code here"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  onInput={handlePromoCodeChange}
                />
              </div>
            </div>
          </div>
          <div>
            {currentState === "step-1" && (
              <>
                <h6 className="ts-fs-4 ts-text-gray-4">Contact information</h6>
                <div className="ts-billing-card py-0 mb-08">
                  <div className="d-flex align-items-center gap-5">
                    <p className="ts-lh-115 text-nowrap mb-0">Email</p>
                    <input
                      type="text"
                      className="form-control ts-noshadow flex-grow border-0 fw-semibold py-3"
                      value="emily@fujiyamasushi.com"
                      placeholder="Type your email here"
                    />
                  </div>
                </div>

                <h6 className="ts-fs-4 ts-text-gray-4">Payment method</h6>

                <div className="ts-payment-button-cards-group ts-check-btn-group mb-08">
                  <input
                    type="radio"
                    className="btn-check"
                    name="payment-method"
                    id="credit-debit-card"
                    value="credit-debit-card"
                    checked={transferType === "credit-debit-card"}
                    onChange={() => handleCheckboxChange("credit-debit-card")}
                  />
                  <label
                    className="btn btn-primary rounded-pill w-100 px-2 text-center"
                    htmlFor="credit-debit-card"
                  >
                    Credit/Debit Card
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="payment-method"
                    id="bank-transfer"
                    value="bank-transfer"
                    checked={transferType === "bank-transfer"}
                    onChange={() => handleCheckboxChange("bank-transfer")}
                  />
                  <label
                    className="btn btn-primary rounded-pill w-100 px-2 text-center"
                    htmlFor="bank-transfer"
                  >
                    Bank Transfer
                  </label>
                </div>
                <div className="mb-5 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked
                  />
                  <label
                    className="form-check-label ts-fs-7"
                    htmlFor="exampleCheck1"
                  >
                    You'll be charged the amount and at the frequency listed
                    above until you cancel. You can cancel any time. By
                    subscribing, you agree to Alist's Terms of Use and Privacy
                    Policy.
                  </label>
                </div>
              </>
            )}

            {currentState === "step-2" && (
              <>
                <div>
                  <h6 className="ts-fs-4 ts-text-gray-4">Card information</h6>
                  <div className="card-info-group mb-05">
                    <div className="ts-card-number-group">
                      <input
                        type="text"
                        className="form-control ts-form-control-3 ts-card-number-input rounded-0"
                        id="offerTimming"
                        placeholder="5805 5805 5805 5805"
                      />

                      <div className="ts-card-icons d-flex gap-1">
                        <Icon name="master-card" />
                        <Icon name="visa-card" />
                      </div>
                    </div>
                    <div className="card-info-row-2">
                      <div>
                        <input
                          type="text"
                          className="form-control ts-form-control-3 ts-card-date"
                          id="offerTimming"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control ts-form-control-3"
                          id="offerTimming"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="ts-fs-4 ts-text-gray-4">Cardholder name</h6>
                  <input
                    type="text"
                    className="form-control ts-form-control-3"
                    id="offerTimming"
                    placeholder="Full name on card"
                  />
                </div>
                <h6 className="ts-fs-4 ts-text-gray-4">Billing address</h6>
                <div className="ts-billing-accordion-wrapper mb-05">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          United Arab Emirates
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body p-0">
                          <input
                            type="text"
                            className="form-control ts-address-form rounded-0"
                            placeholder="Address line 1"
                          />
                          <input
                            type="text"
                            className="form-control ts-address-form rounded-0"
                            placeholder="Address line 2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown ts-state-select w-auto">
                    <button
                      className="btn p-0 dropdown-toggle border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {dropdownButtonText}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end fw-semibold">
                      <li onClick={() => setDropdownButtonText("Emirate")}>
                        <span className="dropdown-item d-flex gap-3 align-items-center">
                          Emirate
                        </span>
                      </li>
                      <li onClick={() => setDropdownButtonText("Emirate 2")}>
                        <span className="dropdown-item d-flex gap-3 align-items-center">
                          Emirate 2
                        </span>
                      </li>
                      <li onClick={() => setDropdownButtonText("Emirate 3")}>
                        <span className="dropdown-item d-flex gap-3 align-items-center">
                          Emirate 3
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {currentState === "step-3" && (
              <>
                <h6 className="ts-fs-4 ts-text-gray-4">Account Details</h6>
                <div className="ts-billing-card mb-3">
                  <div className="ts-fs-7 d-flex justify-content-between">
                    <div>
                      <p className="ts-lh-120 mb-1">Company Name:</p>
                      <p className="ts-lh-120 mb-1">Bank Name:</p>
                      <p className="ts-lh-120 mb-1">BIC/SWIFT Code:</p>
                      <p className="ts-lh-120 mb-1">Account No:</p>
                      <p className="ts-lh-120 mb-1">IBAN:</p>
                      <p className="ts-lh-120 mb-1">BIC/SWIFT Code:</p>
                      <p className="ts-lh-120 mb-0">Tax Return / VAT:</p>
                    </div>
                    <div>
                      <p className="ts-lh-120 mb-1">Metasphere Technologies</p>
                      <p className="ts-lh-120 mb-1">Emirates NBD</p>
                      <p className="ts-lh-120 mb-1">EBILAEAD</p>
                      <p className="ts-lh-120 mb-1">6605788370801</p>
                      <p className="ts-lh-120 mb-1">AE910260006605788370801</p>
                      <p className="ts-lh-120 mb-1">EBILAEAD</p>
                      <p className="ts-lh-120 mb-0">100559645500003</p>
                    </div>
                  </div>
                </div>
                <h6 className="ts-fs-4 ts-text-gray-4">
                  Please upload a proof of payment screenshot
                </h6>
                <div className="ts-file-pound-2">
                  <FilePond
                    name="file"
                    labelIdle='<span class="d-flex align-items-center gap-3"><svg id="picture-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="51.561" height="51.561" viewBox="0 0 51.561 51.561"><path id="Path_948" data-name="Path 948" d="M10.867,14.734A3.867,3.867,0,1,0,7,10.867,3.867,3.867,0,0,0,10.867,14.734Z" transform="translate(5.89 5.89)" fill="#aeaeae"/><path id="Path_949" data-name="Path 949" d="M25.217,2h5.128c3.573,0,6.415,0,8.706.19a15.875,15.875,0,0,1,6.172,1.551,15.469,15.469,0,0,1,6.6,6.6A15.876,15.876,0,0,1,53.37,16.51c.19,2.291.19,5.133.19,8.706v5.128c0,1.781,0,3.381-.023,4.821a2.587,2.587,0,0,1-.016.8c-.027,1.128-.073,2.152-.151,3.085a15.874,15.874,0,0,1-1.551,6.172,15.469,15.469,0,0,1-6.6,6.6,15.874,15.874,0,0,1-6.172,1.551c-2.291.19-5.133.19-8.706.19H25.217c-3.573,0-6.415,0-8.706-.19a15.876,15.876,0,0,1-6.172-1.551,15.47,15.47,0,0,1-5.207-4.4c-.026-.033-.051-.067-.076-.1a15.451,15.451,0,0,1-1.313-2.1A15.875,15.875,0,0,1,2.19,39.051C2,36.759,2,33.917,2,30.344V25.217c0-3.573,0-6.415.19-8.706a15.877,15.877,0,0,1,1.551-6.172,15.468,15.468,0,0,1,6.6-6.6A15.877,15.877,0,0,1,16.51,2.19C18.8,2,21.643,2,25.217,2ZM48.4,25.331V29.1l-3.576-3.73a5.156,5.156,0,0,0-7.463.02L25.334,38.074l-3.959-4.787a5.156,5.156,0,0,0-8.083.172L7.647,40.91a17.729,17.729,0,0,1-.318-2.286c-.171-2.053-.173-4.681-.173-8.394v-4.9c0-3.714,0-6.341.173-8.394a10.883,10.883,0,0,1,.988-4.222,10.312,10.312,0,0,1,4.4-4.4,10.883,10.883,0,0,1,4.222-.988c2.053-.171,4.681-.173,8.394-.173h4.9c3.714,0,6.341,0,8.394.173a10.882,10.882,0,0,1,4.222.988,10.312,10.312,0,0,1,4.4,4.4,10.889,10.889,0,0,1,.988,4.222C48.4,18.99,48.4,21.618,48.4,25.331ZM12.715,47.244a10.319,10.319,0,0,1-2.22-1.555L17.4,36.573l3.96,4.787a5.156,5.156,0,0,0,7.714.262L41.107,28.938l7.241,7.554c-.026.779-.063,1.484-.116,2.132a10.888,10.888,0,0,1-.988,4.222,10.312,10.312,0,0,1-4.4,4.4,10.888,10.888,0,0,1-4.222.988c-2.053.17-4.681.172-8.394.172h-4.9c-3.714,0-6.341,0-8.394-.172A10.889,10.889,0,0,1,12.715,47.244Z" transform="translate(-2 -2)" fill="#aeaeae" fill-rule="evenodd"/></svg><span class="ts-text-gray-11 text-start fw-semibold"> Click or drag and drop image or pdf. </span>'
                    allowMultiple={false}
                    acceptedFileTypes={[
                      "image/jpeg",
                      "image/png",
                      "application/pdf",
                    ]}
                    server="/api"
                    oninit={() => console.log("FilePond has initialized")}
                  />
                </div>
              </>
            )}

            {currentState === "step-1" && (
              <button
                className="ts-change-page-btn ts-btn ts-btn__primary fw-semibold rounded-pill w-100 fw-semibold-heading"
                onClick={() => goToStep("step-2")}
              >
                <span className="ts-fs-4">Continue</span>
              </button>
            )}
            {currentState === "step-2" && (
              <button
                className="ts-change-page-btn ts-btn ts-btn__primary fw-semibold rounded-pill w-100 fw-semibold-heading"
                onClick={() => goToStep("step-4")}
              >
                <span className="ts-fs-4">Subscribe</span>
              </button>
            )}
            {currentState === "step-3" && (
              <button
                className="ts-change-page-btn ts-btn ts-btn__primary fw-semibold rounded-pill w-100 fw-semibold-heading"
                onClick={() => goToStep("step-4")}
              >
                <span className="ts-fs-4">Confirm Payment</span>
              </button>
            )}
          </div>
        </div>
      </div>
      {currentState === "step-4" && (
        <div className="ts-welcome-card text-center">
          <img
            className="h-100  mb-05"
            width="180"
            src="/images/welcome-alist.png"
            alt="..."
          />
          <h1 className="ts-fs-lg ts-font-heading fw-bold mb-02">THANK YOU</h1>
          <p className="ts-fs-4 ts-fs-md-6 mb-06">
            Congratulations on becoming a Premium member! <br />
            Our team will contact you soon to launch your first campaign.
          </p>
          <div className="d-flex justify-content-center">
            <Link
              className="ts-btn ts-btn__primary ts-btn-back-to-home rounded-pill d-flex align-items-center"
              to="/"
            >
              <div className="ts-primary-arrow">
                <Icon name="arrow-left-2" />
              </div>
              <span className="ts-fs-4 fw-semibold ts-lh-100 ms-3">
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Billing;
