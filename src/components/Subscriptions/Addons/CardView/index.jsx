import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const CardView = ({
  activeAddons,
  title,
  id,
  imgSrc,
  price,
  description,
  isIncluded,
  canIncluded,
  defaultChecked,
  updateAddonsParent,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const handleClick = () => {
    if (width > 991) {
      updateAddonsParent(id);
    }
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`ts-addon-card-sm ${activeAddons === id ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="d-flex flex-row align-items-center gap-4">
        <div>
          <img
            className="ts-addon-card-sm__img"
            width="57"
            src={imgSrc}
            alt={title}
            loading="lazy"
          />
        </div>
        <div>
          <h5 className="ts-fs-5 ts-font-heading ts-text-gray-3 fw-semibold-heading mb-0">
            {title} <br />
            {price}
          </h5>
        </div>
        {isIncluded && (
          <div className="d-flex align-items-end mt-auto ms-auto">
            <p className="ts-text-primary ts-font-heading ts-fs-8 mb-0">
              Included
            </p>
          </div>
        )}
        {canIncluded && (
          <div className="d-flex align-items-end my-auto ms-auto">
            <div className="form-check form-switch pe-0">
              <input
                className="ts-form-check-input--switch form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                defaultChecked={defaultChecked}
              />
            </div>
          </div>
        )}
      </div>

      <div className="d-lg-none">
        <div
          className={`ts-addon-card-sm__content pt-4 ${
            showDetails ? "" : "d-none"
          }`}
        >
          <div className="ts-details">
            <p className="ts-text-gray-4 mb-08">
              Accelerate Campaign Launch and Management. Our dedicated account
              managers provide real-time visibility and seamless execution to
              get your influencer campaigns up and running quickly. Access live
              dashboard updates on:
            </p>
            <ol className="ts-text-gray-4 ps-3">
              <li>Campaign activation status</li>
              <li>Daily redemption tracking</li>
              <li>Content uploads from creators</li>
              <li>Mid-campaign optimization</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

CardView.propTypes = {
  activeAddons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  isIncluded: PropTypes.bool,
  canIncluded: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  updateAddonsParent: PropTypes.func.isRequired,
};

export default CardView;
