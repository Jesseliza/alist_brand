import Image from "next/image";

import menuIcon from "@/assets/icons/general/menu-dots.svg";

interface UserCardProps {
  name: string;
  email: string;
  role: string;
  initials: string;
}

export default function UserCard({
  name,
  email,
  role,
  initials,
}: UserCardProps) {
  return (
    <div className="relative bg-white rounded-[13px] px-4.75 py-5.5 flex items-center gap-8">
      <div className="w-[75.3px] h-[75.3px] rounded-full bg-[#D9A039] flex items-center justify-center text-white font-bold text-[29px]">
        {initials}
      </div>
      <div className="flex flex-col">
        <p className="text-[#4F4F4F] font-semibold text-[15px]">{name}</p>
        <p className="text-[#4F4F4F] text-[11px]">{email}</p>
        <span className="mt-2 inline-block bg-[#616161] text-white text-[11px] px-3.5 py-0.25 rounded-full w-fit">
          {role}
        </span>
      </div>
      <div className="absolute right-2.75 top-4">
        <Image src={menuIcon} alt="menu" width={21.48} height={4.67} />
      </div>
    </div>
  );
}
