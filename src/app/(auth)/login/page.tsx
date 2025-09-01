import Image from "next/image";

export default function LoginPage() {
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
        <form className="w-full flex flex-col gap-[11px]">
          <input
            type="text"
            placeholder="Username or email"
            className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-[11px] bg-gray-100 px-5 py-[11px] text-[15px] outline-none focus:ring-2 focus:ring-[#00A4B6] transition placeholder:text-[#6E6E6E]"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="mt-[11px] rounded-[11px] bg-[#00A4B6] text-white font-semibold py-[11px] text-[15px] hover:bg-[#0090a6] transition"
          >
            Sign in
          </button>
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
