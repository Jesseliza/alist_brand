import React from "react";
//import { FilePond, registerPlugin } from "react-filepond";
import Chart from "react-apexcharts";
import Icon from "../../Icons"; // Adjust the path as necessary
import { useBrand } from "../../context/Brandcontext"; // Adjust the path as necessary
import "./styles.scss";

const Dashboard = () => {
  const { activeBrand } = useBrand(); // Use the context to get the active brand

  const [series, setSeries] = React.useState([75]);

  const chartOptions = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -0,
        endAngle: 360,
        hollow: {
          size: "70%",
          background: "#fff",
        },
        track: {
          background: "#A9A9A9",
          strokeWidth: "70%",
          margin: 0,
        },
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: ["#A9A9A9"],
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <div className="ts-wrapper-head ts-wrapper-head--light pb-4">
      <div className="ts-wrapper-head__main">
        <div className="ts-form-2-group ">
          <div className="d-flex align-items-center">
            <div className="ts-graphs-container">
              <Chart
                type="radialBar"
                width="130"
                height="130"
                options={chartOptions}
                series={series}
              />
              <img
                className="ts-graph-img"
                width="74"
                src="/images/home/fujiyama.png" // Static as requested
                alt="..." // Static as requested
              />
            </div>
            <div>
              <div className="ts-fs-4 ts-lh-100 mb-1 fw-semibold-heading">
                {activeBrand?.brandName || "Fujiyama Sushi"}
                {/* Dynamic brand name */}
              </div>
              <p>
                @{activeBrand?.brandName || "fujiyamasushi"}
                {/* Dynamic brand handle */}
              </p>

              <span className="ts-btn ts-btn__secondary-outline ts-text-gray-4--important d-flex align-items-center gap-1 rounded-pill ts-lh-100">
                <span>
                  <Icon name="star" />{" "}
                </span>
                <span className="ts-fs-7 ts-text-gray-4--important">
                  {" "}
                  Premium Plan{" "}
                </span>
              </span>
            </div>
          </div>
          <div className="d-xl-flex">
            <div>
              <p className="ts-text-gray-4 d-flex align-items-center ts-gap-12 fw-semibold-normal mb-2">
                <span>
                  <Icon name="shop" />
                </span>
                Sign up date: 23/04/2023
              </p>
              <p className="ts-text-gray-4 d-flex align-items-center ts-gap-12 fw-semibold-normal mb-2">
                <span className="ms-1">
                  <Icon name="checklist" />
                </span>
                <span>
                  Business Details Completion at
                  <span className="ts-text-primary"> 65%</span>
                </span>
              </p>
              <div
                className="progress mb-2"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "65%" }}></div>
              </div>
              <p className="ts-fs-7 ts-text-primary mb-0">
                Please update the required business details below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
