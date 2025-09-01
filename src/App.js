import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import TeamManagement from "./Pages/TeamManagement";
import Billing from "./Pages/Billing";
import Addons from "./Pages/Addons";
import Campaigns from "./Pages/Campaigns";
import CampaignsDetails from "./Pages/CampaignsDetails";
import CampaignsDeliveryCreation from "./Pages/CampaignsDeliveryCreation";
import PlanCards from "./Pages/PlanCards";
import Plans from "./Pages/Plans";
import ScanVoucher from "./Pages/ScanVoucher";

const App = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Determine whether to show the NavBar and Sidebar
  const showNavBar =
    location.pathname !== "/sign-in" && location.pathname !== "/billing";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Close the sidebar when the route changes
    setSidebarOpen(false);
  }, [location]);

  return (
    <div>
      {showNavBar && (
        <header>
          <NavBar toggleSidebar={toggleSidebar} />
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </header>
      )}

      {showNavBar ? (
        <main
          className={`ts-wrapper-main ts-page-${location.pathname.substring(
            1
          )}`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/team" element={<TeamManagement />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/details" element={<CampaignsDetails />} />
            <Route path="/current-plans" element={<Plans />} />
            <Route path="/plans" element={<PlanCards />} />

            <Route path="/scan-voucher" element={<ScanVoucher />} />
            <Route
              path="/campaigns-delivery-creation"
              element={<CampaignsDeliveryCreation />}
            />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/billing" element={<Billing />} />
          {/* Add other routes as needed */}
        </Routes>
      )}
    </div>
  );
};

export default App;
