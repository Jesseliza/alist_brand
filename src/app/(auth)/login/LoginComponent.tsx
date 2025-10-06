"use client";

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { sendOtpRequest, loginRequest, resetOtpSent } from '@/store/auth/authSlice';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import SlideCaptcha from '@/components/general/SlideCaptcha';
import CountryCodeDropdown from '@/components/general/CountryCodeDropdown';
import Loader from '@/components/general/Loader';

export default function LoginComponent() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [otp, setOtp] = useState('');
  const [formError, setFormError] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, otpSent, isAuthenticated, phoneNumber: storedPhoneNumber, loginInProgress } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom");
  const redirectUrl = searchParams.get("redirect");

  const isAuthenticatedRef = useRef(isAuthenticated);
  const otpInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isAuthenticatedRef.current = isAuthenticated;
  });

  // Effect for auto-focusing the OTP input when it appears
  useEffect(() => {
    if (otpSent) {
      otpInputRef.current?.focus();
    }
  }, [otpSent]);

  // Effect for handling navigation on successful login
  useEffect(() => {
    if (isAuthenticated && !loginInProgress) {
      setIsRedirecting(true); // Prevent UI flicker by entering a redirecting state
      if (redirectedFrom === "admin" && redirectUrl) {
        router.push(redirectUrl);
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, loginInProgress, router, redirectedFrom, redirectUrl]);

  // Effect for cleanup on unmount
  useEffect(() => {
    return () => {
      // Only reset the otpSent flag if the user is not authenticated and navigates away.
      if (!isAuthenticatedRef.current) {
        dispatch(resetOtpSent());
      }
    };
  }, [dispatch]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendOtpRequest({ phoneNumber, country_code: countryCode }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      setFormError('Please enter the OTP.');
      return;
    }
    setFormError('');

    const phoneToVerify = storedPhoneNumber || phoneNumber;

    let finalPhoneNumber = phoneToVerify;
    if (phoneToVerify.startsWith(countryCode)) {
      finalPhoneNumber = phoneToVerify.substring(countryCode.length);
    }

    dispatch(loginRequest({ phoneNumber: finalPhoneNumber, otp, country_code: countryCode }));
  };

  const handleCaptchaSuccess = () => {
    setIsCaptchaVerified(true);
  };

  const showLoader = loginInProgress || isRedirecting;

  return (
    <div className="m-auto px-2">
      {showLoader && <Loader />}
      {!showLoader && (
        <div className="bg-white rounded-[28px] shadow-[0_0_4px_rgba(0,0,0,0.16)] px-[22px] py-[52px] w-[358px] max-w-full">
          <div className="mb-[47px]">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/AlistLogo.svg"
                alt="logo"
                width={100.09}
                height={109.42}
              />
            </div>
          </div>
          {!otpSent ? (
            <form className="w-full flex flex-col gap-[11px]" onSubmit={handleSendOtp}>
              <div className="flex gap-2">
                <CountryCodeDropdown selectedCode={countryCode} onCodeChange={setCountryCode} />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    setPhoneNumber(numericValue);
                  }}
                  className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E] w-full"
                  autoComplete="tel"
                />
              </div>
              <button
                type="submit"
                className="mt-[11px] rounded-[11px] bg-[#00A4B6] text-white font-semibold py-[11px] text-[15px] hover:bg-[#0090a6] transition"
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          ) : (
            <form className="w-full flex flex-col gap-[11px]" onSubmit={handleLogin}>
              <p className="text-center text-gray-600">Enter the OTP sent to {storedPhoneNumber}</p>
              <input
                ref={otpInputRef}
                type="password"
                placeholder="OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  if (formError) {
                    setFormError('');
                  }
                }}
                className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
                autoComplete="one-time-code"
              />
              <div className="mt-4">
                <SlideCaptcha onSuccess={handleCaptchaSuccess} />
              </div>
              {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}
              <button
                type="submit"
                className="mt-[11px] rounded-[11px] bg-[#00A4B6] text-white font-semibold py-[11px] text-[15px] hover:bg-[#0090a6] transition disabled:bg-gray-400"
                disabled={loading || !isCaptchaVerified}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              {error && !formError && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          )}
        </div>
      )}
    </div>
  );
}