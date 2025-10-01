"use client";

import Image from "next/image";
// 1. Import register
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";

// 2. Register Swiper elements
register();


interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <div className="relative">
      {/* 4. Use swiper-container and swiper-slide elements */}
      <swiper-container
        navigation="true"
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".swiper-button-prev"
        slides-per-view="3"
        space-between="10"
        class="mySwiper"
      >
        {images.map((src, index) => (
          <swiper-slide key={index}>
            <div className="relative w-full h-48">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer">
        <div className="text-white bg-black bg-opacity-50 rounded-full p-2">
          &lt;
        </div>
      </div>
      <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer">
        <div className="text-white bg-black bg-opacity-50 rounded-full p-2">
          &gt;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;