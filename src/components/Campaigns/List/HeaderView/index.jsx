import { Link } from "react-router-dom";
import Icon from "../../../../Icons";
import "./styles.scss";
import { useBrand } from "../../../../context/Brandcontext";

const CampaignHeader = () => {
  const { activeBrand } = useBrand(); // Use the context to get the active brand

  return (
    <div className="ts-wrapper-head ts-wrapper-head--light">
      <div className="ts-wrapper-head__main">
        <div className="pb-4 d-flex flex-wrap gap-3 flex-column flex-md-row align-items-md-center justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <div>
                <img
                  width="74"
                  src="/images/home/fujiyama.png" // Kept static as requested
                  alt="Fujiyama Sushi" // Kept static as requested
                />
              </div>
              <div>
                <div className="ts-fs-4 ts-lh-100 mb-2 fw-semibold-heading">
                  {activeBrand?.brandName || "Fujiyama Sushi"}{" "}
                  {/* Dynamic brand name */}
                </div>
                <p className="mb-0 ts-lh-120">
                  @{activeBrand?.brandName || "fujiyamasushi"}{" "}
                  {/* Dynamic brand handle */}
                </p>
              </div>
            </div>

            <div className="d-md-none">
              <div className="dropdown">
                <button
                  className="btn p-0 dropdown-toggle border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Icon name="plus-circle" />
                </button>
                <ul className="dropdown-menu fw-semibold">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/campaigns-delivery-creation"
                    >
                      <Icon name="write" />
                      <span className="ts-ms-12"> Create Campaign </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <Icon name="graph-chart" />
                      <span className="ts-ms-12"> Generate Report </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="ts-campaing-main-group ts-font-heading">
              <div className="ts-campaign-stats-card">
                <p className="ts-fs-7 text-nowrap mb-0">TOTAL REVIEWS</p>
                <h5 className="ts-fs-1 fw-bold mb-0">35</h5>
              </div>
              <div className="ts-campaign-stats-card">
                <p className="ts-fs-7 text-nowrap mb-0">POSTED CONTENT</p>
                <h5 className="ts-fs-1 fw-bold mb-0">105</h5>
              </div>
              <div className="ts-campaign-stats-card">
                <p className="ts-fs-7 mb-0">REACH</p>
                <h5 className="ts-fs-1 fw-bold mb-0">3K</h5>
              </div>
            </div>
          </div>
          <div className="ts-campaign-btn-group d-none d-md-flex flex-xl-column gap-3">
            <Link
              className="ts-btn ts-btn__primary ts-btn--rounded px-3 fw-semibold"
              to="/campaigns-delivery-creation"
            >
              Create a campaign
            </Link>
            <button className="ts-btn ts-btn__secondary ts-btn--rounded px-3 fw-semibold">
              Generate report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
