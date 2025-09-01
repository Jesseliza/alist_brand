import "./navbar.scss"; // Assuming you move the styles to this fileimport { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NotificationDropdown from "../Navbar/Notifications";
import SwitchBrandsDropdown from "../Navbar/BrandSwitch";
const Navbar = ({ toggleSidebar }) => {
  const [pageTitle, setPageTitle] = useState("Business Profile");
  const location = useLocation();

  useEffect(() => {
    updatePageTitle(location);
  }, [location]);

  const updatePageTitle = (route) => {
    const { pathname } = route;

    if (pathname.startsWith("/campaigns")) {
      setPageTitle("Campaigns");
    } else if (pathname.startsWith("/scan-voucher")) {
      setPageTitle("Scan Voucher");
    } else if (pathname.startsWith("/current-plans")) {
      setPageTitle("Plan");
    } else if (pathname.startsWith("/team")) {
      setPageTitle("Manage Team");
    } else if (
      pathname.startsWith("/plans") ||
      pathname.startsWith("/addons") ||
      pathname.startsWith("/plan-cards")
    ) {
      setPageTitle("Plan");
    } else {
      setPageTitle("Business Profile");
    }
  };
  /*
  const updatePageTitle = (route) => {
    switch (route.pathname) {
      case "/campaigns/":
        setPageTitle("Campaigns");
        break;
      case "/campaigns":
        setPageTitle("Campaigns");
        break;
      case "/scan-voucher":
        setPageTitle("Scan Voucher");
        break;
      case "/current-plans":
        setPageTitle("Plan");
        break;
      case "/team":
        setPageTitle("Manage Team");
        break;
      case "/plans":
      case "/addons":
      case "/plan-cards":
        setPageTitle("Plan");
        break;
      default:
        setPageTitle("Business Profile");
    }
  };*/

  return (
    <nav className="ts-navbar">
      <div className="ts-navbar__main">
        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn border-0 p-0 d-LG-none"
            onClick={toggleSidebar}
          >
            <img
              width="23"
              height="18"
              src="/images/hamburger.svg"
              alt="..."
              loading="lazy"
            />
          </button>
          {/* removed ms-lg-0*/}
          <h1 className="ts-font-heading ts-fs-3 fw-bold mb-0 mx-auto">
            {pageTitle}
          </h1>

          {/* Uncomment for search input */}
          {/* <div className="d-none d-xl-block">
            <div className="ts-search-wrapper">
              <button className="btn btn-search p-0 border-0">
                <Icon name="search" />
              </button>
              <input type="text" className="form-control" placeholder="Search anything" />
            </div>
          </div> */}
          <NotificationDropdown screen={"pc"} />
          <SwitchBrandsDropdown screen={"pc"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/*
const UserProfileDropdown = () => {
  return (
    <Dropdown className="d-none d-lg-block">
      <Dropdown.Toggle
        as="button"
        className="btn p-0 dropdown-toggle border-0"
        id="dropdown-basic"
      >
        <div className="d-flex align-items-center gap-2 ts-font-heading">
          <div>
            <p className="ts-fs-6 ts-lh-100 mb-0">Jessica</p>
            <p className="ts-fs-8 ts-lh-100 text-end mb-0">Admin</p>
          </div>
          <div>
            <h4 className="ts-user__profile ts-bg-primary-light ts-fs-4 fw-bold mb-0">
              JL
            </h4>
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end fw-semibold">
        <div
          as={Link}
          to="/sign-in"
          className="d-flex gap-3 align-items-center"
        >
          <Icon name="signout" /> <span> Sign out </span>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
*/
