import "./sidebar.scss";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../Icons"; // Update the import path as per your project structure

import ModalView from "../../components/Subscriptions/Addons/ModalView";
import PackagesGroup from "../../components/Subscriptions/Packages/PackagesGroup";
import SwitchBrandsDropdown from "../Navbar/BrandSwitch";
import NotificationDropdown from "../Navbar/Notifications";
import CustomModal from "../utilities/CustomModal";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [showBrandSwitchModal, setShowBrandSwitchModal] = useState(false); // State to control SwitchBrandsDropdown modal visibility

  useEffect(() => {
    // Close the sidebar when the route changes
    if (sidebarOpen) {
      toggleSidebar();
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleBrandSwitchModalShow = () => setShowBrandSwitchModal(true);
  const handleBrandSwitchModalHide = () => setShowBrandSwitchModal(false);

  return (
    <>
      {sidebarOpen && (
        <div className="ts-backdrop" onClick={toggleSidebar}></div>
      )}
      <aside
        id="sidebar"
        className={`ts-sidebar d-flex flex-column ${
          sidebarOpen ? "active-mobile" : ""
        }`}
      >
        <button
          className="btn ts-btn-close--sidebar border-0 p-0 d-LG-none"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
          aria-controls="sidebar"
        >
          <Icon name="close" />
        </button>

        <div>
          <Link to="/">
            <img
              className="ts-sidebar-logo mb-13"
              width="125"
              height="30.16"
              loading="lazy"
              src="/images/dashboard-logo.svg"
              alt="..."
            />
          </Link>
          <ul className="ts-sidebar__list p-0 list-unstyled">
            <li>
              <Link
                className={`ts-sidebar__link notification ts-font-heading  ${
                  location.pathname === "/" ? "ts-link-active" : ""
                }`}
                to="/"
              >
                <Icon name="shop" />
                <span>Business Profile </span>
              </Link>
            </li>
            <li>
              <Link
                className={`ts-sidebar__link ts-font-heading 
                  ${
                    location.pathname === "/campaigns" ||
                    location.pathname === "/campaigns-delivery-creation"
                      ? "ts-link-active"
                      : "" || location.pathname === "/campaigns/details"
                      ? "ts-link-active"
                      : ""
                  }
                  `}
                to="/campaigns"
              >
                <Icon name="gift" />
                <span> Campaigns </span>
              </Link>
            </li>
            <li>
              <Link
                className={`ts-sidebar__link ts-font-heading ${
                  location.pathname === "/scan-voucher" ? "ts-link-active" : ""
                } `}
                to="/scan-voucher"
              >
                <Icon name="scan-voucher" />
                <span> Scan Voucher </span>
              </Link>
            </li>
            <li>
              <Link
                className={`ts-sidebar__link ts-font-heading ${
                  location.pathname === "/team" ? "ts-link-active" : ""
                }`}
                to="/team"
              >
                <Icon name="manage-team" />
                <span> Manage team </span>
              </Link>
            </li>
            <li>
              <Link
                className={`ts-sidebar__link ts-font-heading ${
                  location.pathname === "/current-plans" ? "ts-link-active" : ""
                } `}
                to="/current-plans"
              >
                <Icon name="setting" />
                <span> Plan </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <div className="">
            <div className="d-flex align-items-center gap-2 ts-font-heading mb-04 d-lg-none">
              <div className="margin-l-r-5 ">
                <NotificationDropdown screen={"mobile"} />
              </div>

              <div>
                <p className="ts-lh-100 ts-fs-4 mb-0">Notifications</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 ts-font-heading mb-04">
              <div>
                <div className="ts-user__profile ts-bg-primary-light ts-fs-4 fw-bold mb-0">
                  JL
                </div>{" "}
                {/* accessibility*/}
              </div>
              <div>
                <p className="ts-lh-100 ts-fs-4 mb-0">Jessica Lewis</p>
                <div className="special-div">Admin</div>
                <div
                  className="sidebar-switchbrands d-lg-none"
                  onClick={handleBrandSwitchModalShow}
                >
                  Switch Brands
                </div>
              </div>
            </div>

            <Link
              className="ts-sidebar__link ts-fs-4--important btn border-0 ts-font-heading text-decoration-underline ps-2 mb-08 pb-0 m-t-n-10"
              to="/sign-in"
            >
              <Icon name="signout" />
              <span> Sign out </span>
            </Link>
          </div>

          <button
            className="ts-btn ts-btn__dark-gray rounded-2 fw-semibold w-100 d-none d-lg-block"
            data-bs-toggle="modal"
            data-bs-target="#upgradePlan"
          >
            Upgrade Plan
          </button>
          <Link
            className="ts-btn ts-btn__dark-gray rounded-2 text-center fw-semibold w-100 d-lg-none"
            to="/plans"
          >
            Upgrade Plan
          </Link>
        </div>
      </aside>

      {/* Modal for Upgrade Plan */}
      <div
        className="modal ts-modal-pricing fade"
        id="upgradePlan"
        tabIndex="-1"
        aria-labelledby="upgradePlanLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content d-none d-lg-block">
            <div className="modal-body p-0">
              <PackagesGroup />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Add-ons */}
      <div
        className="modal ts-modal-pricing fade"
        id="addOnsModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <ModalView />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal for Switch Brands */}
      <CustomModal
        show={showBrandSwitchModal}
        onClose={handleBrandSwitchModalHide}
      >
        <SwitchBrandsDropdown screen="mobile" />
      </CustomModal>
    </>
  );
};

export default Sidebar;
