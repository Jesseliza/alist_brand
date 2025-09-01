import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import VideoJS from "./VideoJS";

const PostContent = () => {
  useEffect(() => {
    // Initialize FancyBox
    Fancybox.bind("[data-fancybox]", {
      // Options for FancyBox
    });
  }, []);

  const carouselItems = [
    { type: "image", src: "/images/campaign/postImg.jpg", alt: "Image 1" },
    {
      type: "video",
      poster: "/images/campaign/postImg.jpg",
      src: "/videos/1.mp4",
      alt: "Video 1",
    },
    { type: "image", src: "/images/campaign/postImg.jpg", alt: "Image 1" },
    { type: "image", src: "/images/campaign/postImg.jpg", alt: "Image 1" },
    { type: "image", src: "/images/campaign/postImg.jpg", alt: "Image 1" },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="d-flex align-items-center gap-3 mb-05">
        <div>
          <img
            width="22"
            height="22"
            src="/images/campaign/picture-photo-image-svgrepo-com.svg"
            alt="..."
          />
        </div>
        <div>
          <h4 className="ts-fs-4 ts-font-heading fw-normal mb-0 ts-lh-100">
            Posted content:{" "}
            <span className="ts-text-primary fw-semibold">54</span>
          </h4>
        </div>
      </div>

      <div className="ts-post-card-wrapper">
        <div className="d-flex align-items-center gap-2 ts-font-heading mb-04 d-xl-none">
          <div>
            <img
              width="45"
              height="45"
              src="/images/user-management/emily-russo.png"
              alt="..."
            />
          </div>
          <div className="ts-text-gray-1 ts-font-heading">
            <p className="ts-lh-100 mb-2 fw-semibold">@AliceEpicEats</p>
            <p className="ts-lh-100 ts-fs-7 mb-0">
              <span className="ts-text-primary"> 100k </span> Followers |
              <span className="ts-text-primary"> 130K </span>Engagement
            </p>
          </div>
        </div>

        <div className="ts-campaign-profile-card align-items-center gap-2 ts-font-heading d-none d-xl-block">
          <div className="text-center mb-2">
            <img
              width="78"
              height="78"
              src="/images/user-management/emily-russo.png"
              alt="..."
            />
          </div>
          <div className="ts-text-gray-1 ts-font-heading">
            <p className="ts-fs-4 ts-lh-100 text-center mb-3 fw-semibold">
              @AliceEpicEats
            </p>

            <div className="ts-seprator d-flex justify-content-center gap-4">
              <div className="text-center">
                <p className="ts-fs-4 ts-text-primary mb-0">385k</p>
                <p className="ts-fs-8 ts-text-gray-2 fw-bold mb-0">
                  Engagement
                </p>
              </div>
              <div className="text-center">
                <p className="ts-fs-4 ts-text-primary mb-0">385k</p>
                <p className="ts-fs-8 ts-text-gray-2 fw-bold mb-0">
                  Engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ts-swiper-wrapper position-relative">
          <div className="d-none d-lg-flex justify-content-end gap-2 pb-02 pe-3">
            <div className="swiper-button-prev" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="bi bi-chevron-left"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="swiper-button-next" role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="bi bi-chevron-right"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={3}
            spaceBetween={7}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".ts-creator-pagination-1",
              clickable: true,
            }}
            breakpoints={{
              991: {
                slidesPerView: 3,
                spaceBetween: 7,
              },
            }}
            className="mySwiper mb-05 mb-lg-0"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="ts-post-card h-100">
                  <a
                    href={item.src}
                    data-fancybox={item.type}
                    className="h-100"
                  >
                    {item.type === "image" && (
                      <img
                        className="w-100 h-100 ts-object-fit-cover"
                        src={item.src}
                        alt={item.alt}
                      />
                    )}
                    {item.type === "video" && (
                      <VideoJS videoSrc={item.src} Poster={item.poster} />
                    )}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper-pagination ts-creator-pagination-1 position-relative d-flex justify-content-center gap-0 d-lg-none"></div>
      </div>
    </div>
  );
};

export default PostContent;
