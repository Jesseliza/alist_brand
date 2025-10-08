"use client";

import Image from "next/image";
import DonutChart from "@/components/charts/RingChart";
import ProgressBar from "@/components/charts/ProgressBar";
import { InputFieldProps } from "@/types/common";
import { Creator } from "@/types/entities";

export default function CreatorInfo({ creator }: { creator: Creator }) {
  const InputField = ({ label, value, name, icon }: InputFieldProps) => (
    <div>
      <label
        htmlFor={name}
        className="block text-[#4F4F4F] mb-2.5 truncate"
        title={label}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          readOnly
          title={value}
          className={`w-full bg-[#F8F8F8] md:bg-[#F3F3F3] border md:border-0 border-[#E4E4E4] rounded-[11px] px-4 py-3 text-[#6E6E6E] placeholder:text-[#6E6E6E] outline-none truncate ${
            icon ? "pr-12" : ""
          }`}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex-shrink-0">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="text-[15px] pt-10 md:pt-11">
      <div className="max-w-[1148px] mx-auto md:px-[15px] ">
        <div className="bg-white rounded-[13px] md:px-10 md:pt-8 md:pb-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Vertical border in the middle - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E4E4E4] transform -translate-x-1/2"></div>

            {/* Left Column */}
            <div className="border-b border-[#E2E2E2] md:border-b-0 md:pr-4 md:pl-0 order-2 md:order-1">
              <h3 className="px-4 mb-6 text-[18px] text-[#4F4F4F] font-medium">
                Personal Information
              </h3>
              <div className="px-4 grid grid-cols-2 gap-5 mb-5 md:mb-7">
                <InputField
                  label="First Name"
                  value={creator.firstName}
                  name="FirstName"
                />
                <InputField
                  label="Last name"
                  value={creator.lastName}
                  name="lastName"
                />
              </div>
              <div className="px-4 grid grid-cols-2 gap-5">
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Age & DOB"
                    value={`${
                      creator.age
                    } (DOB: ${creator.dateOfBirth.toLocaleDateString()})`}
                    name="age"
                  />
                </div>
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Last name"
                    value={creator.lastName}
                    name="lastName"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Email"
                    value={creator.email}
                    name="email"
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 16.69,
                      height: 16.26,
                      alt: "copy",
                    }}
                  />
                </div>

                {/* <div className="grid grid-cols-2 gap-5 mb-5 md:mb-7">
                  <InputField
                    label="Phone"
                    value={creator.phone}
                    name="phone"
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 16.69,
                      height: 16.26,
                      alt: "copy",
                    }}
                  />
                  <InputField
                    label="Whatsapp"
                    value={creator.whatsappNumber}
                    name="whatsapp"
                    icon={{
                      src: "/icons/edit-icon.svg",
                      width: 16.69,
                      height: 16.26,
                      alt: "copy",
                    }}
                  />
                </div> */}
                <div className="mb-5 md:mb-7">
                  <InputField
                    label="Nationality"
                    value={creator.nationality}
                    name="nationality"
                  />
                </div>

                <InputField
                  label="Location"
                  value={creator.location}
                  name="location"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className=" md:pl-4 md:pr-0 order-1 md:order-2">
              <div className="px-4 pb-8  ">
                <h3 className="mb-6 text-[18px] text-[#4F4F4F] font-medium">
                  Profile Information
                </h3>
                <h4 className=" text-[#4F4F4F] mb-6.25 truncate">
                  Total redemptions
                </h4>
                <div className="flex items-center justify-between gap-2 md:flex-col-reverse md:items-center md:gap-6 lg:flex-row lg:justify-between lg:gap-2">
                  <div>
                    <DonutChart
                      segments={creator.redemptionSegments}
                      size={113.45}
                      thickness={15}
                      backgroundColor="#F3F3F3"
                      gap={0}
                    >
                      <span className="text-[15px] leading-[19px] font-bold text-[#3B3B3B]">
                        {creator.totalRedemptionsCurrency}
                        {creator.totalRedemptionsValue.toLocaleString()}
                      </span>
                    </DonutChart>
                  </div>
                  <div className="space-y-3 min-w-[180px]">
                    {creator.redemptionSegments.map((segment, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2 min-w-[80px]">
                            <span className="text-[13px] text-[#4F4F4F]">
                              {segment.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <ProgressBar
                              value={segment.value}
                              color={segment.color}
                              width={100}
                              height={7}
                              cornerRadius={3.5}
                            />
                            <span className="text-[13px] text-[#4F4F4F] font-medium min-w-[45px] text-right">
                              {segment.value}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr className="border-b border-[#E2E2E2] mx-4" />
              <div className="mb-10 px-4">
                <h4 className=" text-[#4F4F4F] mb-2.5 mt-8 truncate">
                  Influencer Tags
                </h4>
                <ul className="flex items-center gap-2.5 flex-wrap">
                  {creator.influencerTags.map((tag, index) => (
                    <li
                      key={index}
                      className="rounded-full bg-[#00A4B6] px-2.75 py-1 text-[13px] leading-[20px] text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-b border-[#E2E2E2] mx-4" />
              <div className=" mb-10 px-4">
                <h4 className=" text-[#4F4F4F] mb-2.5 mt-8 truncate">
                  Profile completion
                </h4>
                <div className="flex items-center gap-2.5">
                  <div>{creator.profileCompletion}%</div>
                  <div className="flex-1">
                    <ProgressBar
                      value={creator.profileCompletion}
                      color={"#00A4B6"}
                      height={16}
                      cornerRadius={8}
                    />
                  </div>
                </div>
              </div>
              <hr className="border-b border-[#E2E2E2] mx-4" />
              <div className=" mb-10 px-4">
                <h4 className=" text-[#4F4F4F] mb-2.5 mt-8 truncate">
                  Social Handles
                </h4>
                <div className="flex items-center justify-start flex-wrap gap-5">
                  {creator.socialPlatforms.map((social, index) => (
                    <Image
                      key={index}
                      src={`/icons/creator/socials/${social.platform}${
                        social.isActive ? "" : "-inactive"
                      }.svg`}
                      alt={social.platform}
                      width={66.71}
                      height={63.71}
                      style={{
                        width: "clamp(55.62px, 15vw, 66.71px)",
                        height: "clamp(53.14px, 14.32vw, 63.71px)",
                        maxWidth: "66.71px",
                        maxHeight: "63.71px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[15px] leading-[23px] text-[#4F4F4F] mt-4 mb-8 px-4">
          Registration date: {creator.signUpDate.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
