import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendOtpRequest,
  verifyOtpRequest,
  resetOtpState,
} from '@/store/account/accountSlice';
import { RootState } from '@/store/store';
import { countryCodes } from '@/data/CountryCodes';

interface ChangePhoneNumberProps {
  currentPhoneNumber: string;
  currentCountryCode: string;
}

export const ChangePhoneNumber: React.FC<ChangePhoneNumberProps> = ({
  currentPhoneNumber,
  currentCountryCode,
}) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState(currentPhoneNumber);
  const [countryCode, setCountryCode] = useState(currentCountryCode || '+971');
  const [otp, setOtp] = useState('');
  const { otpSent, otpVerified, phoneUpdateInProgress, phoneUpdateError } = useSelector(
    (state: RootState) => state.account
  );

  useEffect(() => {
    return () => {
      dispatch(resetOtpState());
    };
  }, [dispatch]);

  useEffect(() => {
    setPhone(currentPhoneNumber);
    setCountryCode(currentCountryCode);
  }, [currentPhoneNumber, currentCountryCode]);

  const handleSendOtp = () => {
    dispatch(sendOtpRequest({ phone, country_code: countryCode }));
  };

  const handleVerifyOtp = () => {
    dispatch(verifyOtpRequest({ phone, country_code: countryCode, otp }));
    setOtp('');
  };

  const handleCancelOtp = () => {
    dispatch(resetOtpState());
    setOtp('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Phone Number</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-1/3">
          <label htmlFor="country-code" className="block text-sm font-medium text-gray-700">Country Code</label>
          <select
            id="country-code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {countryCodes.map((country) => (
              <option key={country.name} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/3">
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            id="phone-number"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter new phone number"
            className="mt-1 w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-2 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
          />
        </div>
      </div>
      <button onClick={handleSendOtp} disabled={phoneUpdateInProgress} className="px-6 py-2 text-sm font-semibold text-white bg-[#00A4B6] rounded-lg hover:bg-[#00A4B6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A4B6] disabled:opacity-50">
        {phoneUpdateInProgress ? 'Sending...' : 'Send OTP'}
      </button>

      {otpSent && !otpVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent" onClick={handleCancelOtp}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold">Verify OTP</h2>
              <button onClick={handleCancelOtp} className="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
            </div>
            <p className="mb-4">An OTP has been sent to {countryCode} {phone}.</p>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setOtp(numericValue);
              }}
              placeholder="Enter OTP"
              className="mt-1 w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-2 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none"
              autoComplete="one-time-code"
            />
            {phoneUpdateError && (
              <p className="text-red-500 text-sm mt-2">{phoneUpdateError}</p>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={handleCancelOtp} className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Cancel
              </button>
              <button onClick={handleVerifyOtp} disabled={phoneUpdateInProgress} className="px-6 py-2 text-sm font-semibold text-white bg-[#00A4B6] rounded-lg hover:bg-[#00A4B6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A4B6] disabled:opacity-50">
                {phoneUpdateInProgress ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};