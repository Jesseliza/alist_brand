"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { loginRequest } from '@/store/auth/authSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, phoneNumber, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      dispatch(loginRequest({ phoneNumber, otp }));
    } else {
      // Handle case where phone number is not available (e.g., user navigated directly to this page)
      // You might want to redirect them back to the login page
      router.push('/login');
    }
  };

  return (
    <div className="m-auto px-2">
      <div className="bg-white rounded-[28px] shadow-[0_0_4px_rgba(0,0,0,0.16)] px-[22px] py-[52px] w-full max-w-md">
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
          <p className="text-center text-gray-600">Enter the OTP sent to {phoneNumber}</p>
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
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
