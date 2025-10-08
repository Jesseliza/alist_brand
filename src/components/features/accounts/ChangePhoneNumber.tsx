"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtpRequest,
  verifyOtpRequest,
  resetOtpState,
} from "@/store/account/accountSlice";
import { RootState } from "@/store/store";
import CountryCodeDropdown from "@/components/general/CountryCodeDropdown";
import Modal from "@/components/general/Modal";
import { Input } from "@/components/general/Input";
import { Button } from "@/components/general/Button";

interface ChangePhoneNumberProps {
  currentPhoneNumber: string;
  currentCountryCode: string;
}

export default function ChangePhoneNumber({
  currentPhoneNumber,
  currentCountryCode,
}: ChangePhoneNumberProps) {
  const dispatch = useDispatch();
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newCountryCode, setNewCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { loading, otpSent, otpVerified, otpError } = useSelector(
    (state: RootState) => state.account
  );

  useEffect(() => {
    // When OTP is successfully sent, open the verification modal
    if (otpSent) {
      setIsModalOpen(true);
    }
    // When OTP is successfully verified, close the modal and reset state
    if (otpVerified) {
      setIsModalOpen(false);
      dispatch(resetOtpState());
      // You might want to refetch the user's account details here
    }
  }, [otpSent, otpVerified, dispatch]);

  const handleSendOtp = () => {
    if (newPhoneNumber) {
      dispatch(
        sendOtpRequest({
          phone: newPhoneNumber,
          country_code: newCountryCode,
        })
      );
    }
  };

  const handleVerifyOtp = () => {
    if (otp) {
      dispatch(
        verifyOtpRequest({
          phone: newPhoneNumber,
          country_code: newCountryCode,
          otp,
        })
      );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(resetOtpState());
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Change Phone Number</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Current Phone Number
        </label>
        <p className="mt-1 text-lg">
          {currentCountryCode} {currentPhoneNumber}
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="newPhoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          New Phone Number
        </label>
        <div className="flex items-center mt-1">
          <CountryCodeDropdown
            selectedCode={newCountryCode}
            onCodeChange={setNewCountryCode}
          />
          <Input
            id="newPhoneNumber"
            type="tel"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))}
            className="ml-2 block w-full"
            placeholder="Enter new phone number"
          />
        </div>
      </div>

      <Button onClick={handleSendOtp} disabled={loading || !newPhoneNumber}>
        {loading ? "Sending..." : "Send OTP"}
      </Button>

      {otpError && <p className="text-red-500 text-sm mt-2">{otpError}</p>}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Verify OTP">
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-4">
            An OTP has been sent to {newCountryCode} {newPhoneNumber}. Please
            enter it below to verify.
          </p>
          <Input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full"
          />
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleVerifyOtp} disabled={loading || !otp}>
              {loading ? "Verifying..." : "Verify"}
            </Button>
          </div>
          {otpError && (
            <p className="text-red-500 text-sm mt-2">{otpError}</p>
          )}
        </div>
      </Modal>
    </div>
  );
}