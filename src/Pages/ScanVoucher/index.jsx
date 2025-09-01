import "./style.scss"; // Assuming you move the styles to this file
import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-scanner";
import Icon from "../../Icons";

const ScanVoucherCard = () => {
  const [showScanner, setShowScanner] = useState(true); // Initially show the scanner
  const [showPin, setShowPin] = useState(false); // Initially hide the pin container
  const [showSuccess, setShowSuccess] = useState(false); // Initially hide the success container
  const [showInvalid, setShowInvalid] = useState(false); // Initially hide the invalid container
  const [showImagePlaceholder, setShowImagePlaceholder] = useState(false); // Initially hide the image placeholder
  const [loadingScanner, setLoadingScanner] = useState(true); // Initially show the loading spinner for the scanner
  const [voucherCode, setVoucherCode] = useState(""); // State for voucher code input
  const voucherLimit = 11; // Define the limit for triggering an action
  const qrCodeReaderRef = useRef(null); // Ref for QR code reader

  // Function to toggle between scanner and pin view
  const toggleScannerAndPin = (action) => {
    setShowSuccess(false);
    setShowInvalid(false);
    setVoucherCode("");
    if (action === "scan") {
      setShowScanner(true);
      setShowPin(false);
    } else {
      setShowScanner(false);
      setShowPin(true);
    }
  };

  // Function to check voucher code
  const checkVoucherCode = () => {
    setShowSuccess(false);
    setShowInvalid(false);
    console.log("Checking voucher code:", voucherCode);
    if (voucherCode === "ALISTY2K002") {
      showSuccessCard();
    } else {
      showInvalidVoucherCard();
    }
  };

  // Function to show success card
  const showSuccessCard = () => {
    setShowSuccess(true);
    setShowInvalid(false);
    setShowPin(false);
    setShowScanner(false);
  };

  // Function to show invalid voucher card
  const showInvalidVoucherCard = () => {
    setShowInvalid(true);
    setShowPin(false);
    setShowScanner(false);
    setShowSuccess(false);
  };

  // Watch for changes in voucher code length to trigger action
  useEffect(() => {
    console.log("Voucher code changed:", voucherCode);
    if (voucherCode.length >= voucherLimit) {
      console.log("Voucher code length reached limit:", voucherLimit);
      checkVoucherCode();
    }
  }, [voucherCode, voucherLimit]);

  // Function to hide scan screen placeholder
  const hideScanScreen = () => {
    setLoadingScanner(false);
    setShowImagePlaceholder(true);
  };

  // Function to handle QR code detection
  const handleScan = (data) => {
    if (data) {
      setVoucherCode(data.text); // Assuming data.text contains the scanned QR code value
      setShowScanner(false);
      hideScanScreen();
      checkVoucherCode(); // Check the voucher code immediately after scanning
    }
  };

  // Function to handle QR code scan error
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="ts-scan-voucher-card-wrapper ts-font-heading">
      <div className="ts-scan-voucher-card">
        <div className="ts-scan-voucher-card__main mb-08 text-center d-flex align-items-end justify-content-center">
          {/* Success Card */}
          {showSuccess && (
            <div className="ts-notification-card">
              <div className="mb-05">
                <Icon name="check-circle-primary" />
              </div>
              <h1 className="ts-text-gray-2 ts-fs-2 fw-bold">
                Voucher Redeemed!
              </h1>
              <p className="ts-fs-4 ts-text-primary mb-0">USER-ALIST2023</p>
            </div>
          )}

          {/* Invalid Voucher Card */}
          {showInvalid && (
            <div className="ts-notification-card">
              <div className="mb-05">
                <Icon name="x-circle-secondary" />
              </div>
              <h1 className="ts-text-gray-2 ts-fs-2 fw-bold">
                Invalid voucher
              </h1>
              <p className="ts-fs-4 ts-text-danger mb-0">
                Please rescan or input another code
              </p>
            </div>
          )}

          {/* Placeholder Image */}
          {loadingScanner && (
            <div className="p-5">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                className="placeholder-image w-100"
                src="/images/voucher/scan-voucher-placeholder.png"
                alt="Placeholder Image"
              />
            </div>
          )}

          {/* QR Code Scanner */}
          {showScanner && !loadingScanner && (
            <div className="ts-voucher-video-container h-100">
              <QrReader
                delay={100}
                style={{ width: "100%" }}
                onError={handleError}
                onScan={handleScan}
              />
            </div>
          )}

          {/* Pin Input */}
          {showPin && (
            <div
              className={`ts-pin h-100 d-flex align-items-center ${
                showSuccess ? "d-none" : ""
              }`}
            >
              <div>
                <img
                  className="mb-07"
                  width="120"
                  src="/images/voucher/voucher.svg"
                  alt="..."
                />
                <h4 className="ts-fs-4 mb-03">Please enter voucher code</h4>
                <input
                  type="text"
                  className="ts-voucher-code form-control text-center"
                  placeholder="Voucher Code"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <button
          className="ts-btn ts-btn__primary fw-semibold-heading rounded-pill w-100 mb-05"
          onClick={() => {
            toggleScannerAndPin("scan");
            hideScanScreen();
          }}
        >
          Scan Code
        </button>
        <button
          className="ts-btn ts-btn__dark-gray fw-semibold-heading rounded-pill w-100"
          onClick={() => {
            toggleScannerAndPin("input-code");
            hideScanScreen();
          }}
        >
          Enter voucher code
        </button>
      </div>
    </div>
  );
};

export default ScanVoucherCard;
