import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useBrand } from "../../context/Brandcontext";
import Icon from "../../Icons";

import Fujimiya from "../../assets/fujiyamasushi.png";
import Nando from "../../assets/Nandos.png";
import FujimiyaMobile from "../../assets/Fujimiya-mobile.png";
import NandoMobile from "../../assets/Nandos-mobile.png";

const SwitchBrandsDropdown = ({ screen }) => {
  const { setActiveBrand } = useBrand(); // use context
  const [isOpen, setIsOpen] = useState(false);
  const [brands, setBrands] = useState([
    {
      brandName: "Fujiyama Sushi",
      brandCampaignsCount: "13 campaigns",
      brandLogo: Fujimiya,
      brandMobileLogo: FujimiyaMobile,
      status: "active",
    },
    {
      brandName: "Nando's",
      brandCampaignsCount: "4 campaigns",
      brandLogo: Nando,
      brandMobileLogo: NandoMobile,
      status: "not active",
    },
    {
      brandName: "Fujiyama Sushi",
      brandCampaignsCount: "3 campaigns",
      brandLogo: Fujimiya,
      brandMobileLogo: FujimiyaMobile,
      status: "not active",
    },
  ]);

  // Set the default active brand on component mount
  useEffect(() => {
    if (brands.length > 0) {
      const defaultActiveBrand = brands.find(
        (brand) => brand.status === "active"
      );
      if (!defaultActiveBrand) {
        // If no active brand exists, set the first brand as active by default
        setBrands((prevBrands) =>
          prevBrands.map((brand, index) => ({
            ...brand,
            status: index === 0 ? "active" : "not active",
          }))
        );
      }
    }
  }, [brands]);

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  const handleBrandClick = (index) => {
    const updatedBrands = brands.map((brand, i) => ({
      ...brand,
      status: i === index ? "active" : "not active",
    }));
    setBrands(updatedBrands);

    setActiveBrand(updatedBrands[index]); // Update context
    setIsOpen(false);
  };

  if (screen === "pc") {
    return (
      <Dropdown
        show={isOpen}
        onToggle={handleToggle}
        className="d-none d-lg-block"
      >
        <Dropdown.Toggle
          as="button"
          className="btn p-0 dropdown-toggle border-0"
        >
          <img
            src="/images/navbar/Brand Switch.svg"
            alt="brand switch"
            width="35"
            height="35"
            loading="lazy"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <div className="d-flex gap-3 align-items-center width-notification">
            <div className="notifications-title fw-semibold border-bottom">
              Switch Brand
            </div>
          </div>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="d-flex gap-3 align-items-center brand-dropdown-item-padding notification-dropdown-item"
              onClick={() => handleBrandClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={brand.brandLogo}
                alt=""
                className={`${
                  brand.status === "active"
                    ? "active-brand-border"
                    : "non-active-brand-border"
                }`}
              />
              <div>
                <div className="fw-semibold notification-primary-text">
                  {brand.brandName}
                </div>
                <div className="notification-secondary-text">
                  {brand.brandCampaignsCount}
                </div>
              </div>
              {brand.status === "active" && (
                <div className="margin-left-auto">
                  <Icon name="active-brand" />
                </div>
              )}
            </div>
          ))}
          <div className="notification-dropdown-item">
            <div className="d-flex gap-3 align-items-center margin-0-20 padding-10-0 border-top">
              <Icon name="add-brand" />
              <div>
                <div className="fw-semibold notification-primary-text">
                  Add a brand
                </div>
                <div className="notification-secondary-text">
                  Set up a new business
                </div>
              </div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  if (screen === "mobile") {
    return (
      <div className="custom-dropdown-menu">
        <div className="d-flex flex-column align-items-center">
          <div className="brandChange-title-sidebar fw-semibold border-bottom">
            Your brands
          </div>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="d-flex gap-3 align-items-center brand-dropdown-item-padding notification-dropdown-item padding-b-t-10"
              onClick={() => handleBrandClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${brand.brandMobileLogo}`}
                alt=""
                className={`${
                  brand.status === "active"
                    ? "active-brand-border"
                    : "non-active-brand-border"
                }`}
              />
              <div>
                <div className="fw-semibold notification-primary-text">
                  {brand.brandName}
                </div>
                <div className="notification-secondary-text">
                  {brand.brandCampaignsCount}
                </div>
              </div>
              {brand.status === "active" && (
                <div className="margin-left-auto">
                  <Icon name="active-brand-mobile" />
                </div>
              )}
            </div>
          ))}
          <div className="notification-dropdown-item">
            <div className="d-flex gap-3 align-items-center margin-0-20 padding-10-0 border-top">
              <Icon name="add-brand-mobile" />
              <div>
                <div className="fw-semibold notification-primary-text">
                  Add a brand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SwitchBrandsDropdown;
