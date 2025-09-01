import React from "react";
import "./styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "video.js/dist/video-js.css";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper/modules";

const creators = [
  { name: "Alice Turner", image: "/images/campaign/creator/alice-turner.png" },
  { name: "Bob Smith", image: "/images/campaign/creator/alice-turner.png" },
  { name: "Eva Johnson", image: "/images/campaign/creator/alice-turner.png" },
  { name: "John Doe", image: "/images/campaign/creator/alice-turner.png" },
  { name: "Emily Brown", image: "/images/campaign/creator/alice-turner.png" },
  { name: "Michael Lee", image: "/images/campaign/creator/alice-turner.png" },
  {
    name: "Sophia Rodriguez",
    image: "/images/campaign/creator/alice-turner.png",
  },
  {
    name: "William Taylor",
    image: "/images/campaign/creator/alice-turner.png",
  },
  {
    name: "Olivia Martinez",
    image: "/images/campaign/creator/alice-turner.png",
  },
  {
    name: "Sophia Rodriguez",
    image: "/images/campaign/creator/alice-turner.png",
  },
  {
    name: "William Taylor",
    image: "/images/campaign/creator/alice-turner.png",
  },
  {
    name: "Olivia Martinez",
    image: "/images/campaign/creator/alice-turner.png",
  },
];

const Redemptions = () => {
  const renderCreators = () => {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < creators.length; i += chunkSize) {
      chunks.push(creators.slice(i, i + chunkSize));
    }
    return chunks.map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="ts-creator-group">
        {chunk.map((creator, index) => (
          <div key={index} className="ts-creator-card mb-3">
            <img
              className="ts-creator-card__img"
              src={creator.image}
              alt={creator.name}
              width="43"
              height="43"
            />
            <p className="ts-font-heading mb-0">{creator.name}</p>
          </div>
        ))}
      </div>
    ));
  };

  const creatorChunks = [];
  const chunkSize = 3;
  for (let i = 0; i < creators.length; i += chunkSize) {
    creatorChunks.push(creators.slice(i, i + chunkSize));
  }

  return (
    <div className="ts-redemptions-container">
      <div className="ts-voucher-card ts-voucher-card--lg ts-mb-18p">
        <div className="ts-voucher-img-deco-wrapper">
          <img
            className="ts-voucher-img-deco"
            src="/images/campaign/voucher-border.png"
            alt="..."
          />
        </div>
        <div className="ts-deco ts-deco--right">
          <div className="ts-deco-main">
            {[...Array(12)].map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
        <div className="ts-card-content d-flex align-items-center">
          <div>
            <div className="d-flex ts-font-heading gap-2 align-items-center mb-02">
              <div>
                <h1 className="ts-number-voucher ts-fs-1-lg ts-text-primary fw-bold mb-0">
                  18
                </h1>
              </div>
              <div>
                <h1 className="ts-voucher-text ts-fs-1 fw-semibold-heading mb-0">
                  Total <br />
                  Vouchers
                </h1>
              </div>
            </div>
            <div className="ps-1">
              <p className="ts-voucher-desc mb-0">
                18 out of 18 vouchers have been redeemed
              </p>
              <p className="ts-voucher-desc ts-fs-7 fw-light ts-text-primary mb-0">
                Valid until: 13/2/2023
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="ts-voucher-img-main h-100"
            width="180"
            height="35"
            src="/images/campaign/voucher/total-voucher.png"
            alt="..."
          />
        </div>
      </div>
      <div className="ts-voucher-card-group mb-06 ts-font-heading">
        <div className="ts-voucher-card text-center">
          <img
            className="ts-voucher-card__img ts-voucher-card__img--1 mb-03 mb-lg-05"
            width="48"
            height="35"
            src="/images/campaign/voucher/voucher-value.svg"
            alt="..."
          />
          <h6 className="ts-fs-7 ts-text-primary fw-bold mb-01 mb-lg-02 ts-lh-100">
            300AED
          </h6>
          <p className="ts-fs-7 ts-lh-100 mb-0">Voucher Value</p>
        </div>
        <div className="ts-voucher-card text-center">
          <img
            className="ts-voucher-card__img mb-03 mb-lg-05"
            width="48"
            height="35"
            src="/images/campaign/voucher/clock-circle-svgrepo-com.svg"
            alt="..."
          />
          <h6 className="ts-fs-7 ts-text-primary fw-bold mb-01 mb-lg-02 ts-lh-100">
            10:30PM - 1:30AM
          </h6>
          <p className="ts-fs-7 ts-lh-100 mb-0">Entry Timing</p>
        </div>
        <div className="ts-voucher-card text-center">
          <img
            className="ts-voucher-card__img mb-03 mb-lg-05"
            width="48"
            height="35"
            src="/images/campaign/voucher/calendar-svgrepo-com.svg"
            alt="..."
          />
          <h6 className="ts-fs-7 ts-text-primary fw-bold mb-01 mb-lg-02 ts-lh-100">
            Advanced Booking
          </h6>
          <p className="ts-fs-7 ts-lh-100 mb-0">Whatsapp</p>
        </div>
        <div className="ts-voucher-card text-center">
          <img
            className="ts-voucher-card__img mb-03 mb-lg-05"
            width="48"
            height="35"
            src="/images/campaign/voucher/gender-symbols-svgrepo-com.svg"
            alt="..."
          />
          <h6 className="ts-fs-7 ts-text-primary fw-bold mb-01 mb-lg-02 ts-lh-100">
            Gender
          </h6>
          <p className="ts-fs-7 ts-lh-100 mb-0">Open to all genders</p>
        </div>
      </div>
      <div className="mb-06">
        <h3 className="ts-font-heading ts-fs-4 ts-text-primary text-center mb-3">
          Offer description
        </h3>
        <p className="ts-font-heading text-center">
          Experience a culinary delight with a complimentary Chef's Special
          Sushi Platter, sip on our signature cocktails and sake pairings, and
          get an exclusive behind-the-scenes kitchen tour.
        </p>
      </div>
      <hr className="mb-06" />
      <div className="mb-5">
        <h3 className="ts-font-heading ts-fs-4 ts-text-primary text-center mb-3">
          Creators
        </h3>
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          pagination={{
            el: ".ts-creator-pagination-4",
            clickable: true,
          }}
          className="mySwiper"
        >
          {creatorChunks.map((chunk, chunkIndex) => (
            <SwiperSlide key={chunkIndex}>
              {chunk.map((creator, index) => (
                <div key={index} className="ts-creator-card mb-3">
                  <img
                    className="ts-creator-card__img"
                    src={creator.image}
                    alt={creator.name}
                    width="43"
                    height="43"
                  />
                  <p className="ts-font-heading mb-0">{creator.name}</p>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ts-creator-pagination-4 d-flex justify-content-center gap-1"></div>
      </div>
    </div>
  );
};

export default Redemptions;
