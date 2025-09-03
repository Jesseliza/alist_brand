"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { login } from '@/store/auth/authActions';
import Image from 'next/image';
import { AppDispatch } from '@/store/store';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ phoneNumber, otp }));
  };

  return (
    <div className="m-auto px-2">
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
        <form className="w-full flex flex-col gap-[11px]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
            autoComplete="tel"
          />
          <input
            type="password"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
            autoComplete="one-time-code"
          />
          <button
            type="submit"
            className="mt-[11px] rounded-[11px] bg-[#00A4B6] text-white font-semibold py-[11px] text-[15px] hover:bg-[#0090a6] transition"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        <div className="mt-[29px] text-center text-[15px] text-[#6B6B6B]">
          Don&apos;t have an account?{" "}
          <div className="text-[#00A4B6] font-medium hover:underline">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}
