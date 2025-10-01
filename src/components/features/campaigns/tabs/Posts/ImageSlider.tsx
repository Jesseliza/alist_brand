"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ImageSliderProps {
  postImages: string[];
}

export default function ImageSlider({ postImages }: ImageSliderProps) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={12}
        slidesPerView={3}
        className="mySwiper"
      >
        {postImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex-1 rounded-[13px]">
              <Image
                src={image}
                alt={`Post ${index + 1}`}
                width={119}
                height={119}
                className="rounded-[13px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full">
        <Image
          src="/icons/campaign/details/back-arrow.svg"
          alt="Previous"
          width={35}
          height={35}
        />
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full">
        <Image
          src="/icons/campaign/details/back-arrow.svg"
          alt="Next"
          width={35}
          height={35}
          className="transform rotate-180"
        />
      </div>
    </div>
  );
}