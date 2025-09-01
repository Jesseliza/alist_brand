import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Icons";
import "./styles.scss";

const Package = ({
  isPopular,
  popularTag,
  title,
  description,
  startat,
  currency,
  price,
  month,
  priceDetails,
  Btntext,
  BtnLink,
  BtnLinkExtention,
  featureList,
}) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const storeBtnLinkExtention = () => {
    if (BtnLinkExtention) {
      localStorage.setItem("selectedMonth", BtnLinkExtention);
      setSelectedMonth(BtnLinkExtention);
    }
  };

  return (
    <div
      className={`ts-addon-card ts-font-heading ts-shadow-3 ${
        isPopular ? "ts-addon-card--active" : ""
      }`}
    >
      {isPopular && (
        <div className="special-offer deg-45">
          <div className="offer-discount">
            <div className="offer-discount-rotate rotate-45">
              <strong className="text-white fw-medium">{popularTag}</strong>
            </div>
          </div>
        </div>
      )}

      <h5 className="ts-pricing-card__title fw-bold mb-04 mb-lg-05">{title}</h5>
      <p className="ts-pricing-card__subtitle mb-06 mb-lg-07">{description}</p>
      <div>
        <p className="mb-0">{startat} </p>
        <h5 className="ts-fs-4 ts-pricing-card__pricing-price fw-bold mb-0">
          <span className="ts-pricing-card__pricing-currency fw-bold">
            {currency}
          </span>{" "}
          {price}
          <span className="ts-pricing-card__pricing-month fw-normal">
            /{month}
          </span>
        </h5>
        <p className="ts-pricing-card__pricedetails mb-05 mb-lg-03">
          {priceDetails}
        </p>
      </div>

      <Link
        onClick={storeBtnLinkExtention}
        className={`ts-pricing-card__btn btn ts-btn rounded-pill w-100 fw-semibold-heading mb-06 d-none d-lg-block ${
          isPopular ? "ts-btn__primary" : "ts-btn__dark-gray-2"
        }`}
        to={`/${BtnLink}`}
        data-bs-target="#addOnsModal"
        data-bs-toggle="modal"
      >
        {Btntext}
      </Link>

      <Link
        onClick={storeBtnLinkExtention}
        className={`ts-pricing-card__btn btn ts-btn rounded-pill w-100 fw-semibold-heading mb-06 d-lg-none ${
          isPopular ? "ts-btn__primary" : "ts-btn__dark-gray-2"
        }`}
        to={`/${BtnLink}`}
      >
        {Btntext}
      </Link>

      <ul className="ts-pricing-card__list list-unstyled d-flex flex-column mb-0">
        {featureList.map((item, index) => (
          <li key={index} className="d-flex align-items-center gap-3">
            <Icon name="check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Package;
