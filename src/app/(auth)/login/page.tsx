"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { sendOtpRequest, resetOtpSent } from '@/store/auth/authSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, otpSent } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (otpSent) {
      router.push('/login/otp');
    }
    // Cleanup function to reset the otpSent flag when the component unmounts
    return () => {
        dispatch(resetOtpSent());
    }
  }, [otpSent, router, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendOtpRequest({ phoneNumber }));
  };

  return (
    <div className="m-auto px-2">
      <div className="bg-white rounded-[28px] shadow-[0_0_4px_rgba(0,0,0,0.16)] px-[22px] py-[52px] w-full max-w-[358px]">
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
        <form className="w-full flex flex-col gap-[11px]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
            autoComplete="tel"
          />
          <button
            type="submit"
            className="mt-[11px] rounded-[11px] bg-[#00A4B6] text-white font-semibold py-[11px] text-[15px] hover:bg-[#0090a6] transition"
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
