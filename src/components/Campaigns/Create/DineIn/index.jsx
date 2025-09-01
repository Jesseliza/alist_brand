import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import Icon from "../../../../Icons";
import "./styles.scss";

// Register FilePond plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const CampaignForm = () => {
  const [myFiles, setMyFiles] = useState([]);
  const [dropdownButtonText, setDropdownButtonText] = useState("Latest");

  const handleFilePondInit = () => {
    console.log("FilePond has initialized");
  };

  return (
    <>
      <div className="ts-form-2-group ts-form-2-group--border ts-form-2-group--transparent mb-5">
        <div className="ts-form-2-group__left">
          <form>
            <div className="mb-3">
              <label
                htmlFor="creatorsPerDay"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Number of Creators Per Day:
              </label>
              <input
                type="number"
                className="form-control ts-form-control-2"
                id="creatorsPerDay"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="campaignPerDay"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Campaign Duration (days)
              </label>
              <input
                type="number"
                className="form-control ts-form-control-2"
                id="campaignPerDay"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="requirementEmail"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Advance Booking Requirements:
              </label>
              <input
                type="email"
                className="form-control ts-form-control-2"
                id="requirementEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="offerTimming"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Offer Days and Timings:
              </label>
              <div className="ts-input-group-icon">
                <input
                  type="text"
                  className="form-control ts-form-control-2"
                  id="offerTimming"
                  placeholder="e.g., Weekdays 5PM - 9PM, Weekends 12PM - 10PM"
                />
                <span className="ts-icon">
                  <Icon name="calendar" />
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="reviewUrl"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Review URL:
              </label>
              <input
                type="url"
                className="form-control ts-form-control-2"
                id="reviewUrl"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="genderFilter"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Gender Filter (Optional):
              </label>
              <select
                className="form-select ts-form-select-2"
                id="genderFilter"
              >
                <option value="1">male</option>
                <option value="2">female</option>
              </select>
            </div>
          </form>

          <p className="mb-0">
            To add more filters, click{" "}
            <a className="ts-link-primary ts-fs-7" href="#">
              here
            </a>
          </p>
        </div>
        <div>
          <div className="mb-3">
            <label
              htmlFor="campaignImage"
              className="form-label ts-text-gray-4 fw-semibold"
            >
              Upload Campaign Image - Learn More
              <span className="ts-text-primary text-decoration-underline">
                {" "}
                Here
              </span>
            </label>
            <FilePond
              name="test"
              labelIdle={`
                <span className='d-flex align-items-center gap-3'>
                  <svg id='picture-svgrepo-com' xmlns='http://www.w3.org/2000/svg' width='51.561' height='51.561' viewBox='0 0 51.561 51.561'>
                    <path id='Path_948' data-name='Path 948' d='M10.867,14.734A3.867,3.867,0,1,0,7,10.867,3.867,3.867,0,0,0,10.867,14.734Z' transform='translate(5.89 5.89)' fill='#aeaeae'/>
                    <path id='Path_949' data-name='Path 949' d='M25.217,2h5.128c3.573,0,6.415,0,8.706.19a15.875,15.875,0,0,1,6.172,1.551,15.469,15.469,0,0,1,6.6,6.6A15.876,15.876,0,0,1,53.37,16.51c.19,2.291.19,5.133.19,8.706v5.128c0,1.781,0,3.381-.023,4.821a2.587,2.587,0,0,1-.016.8c-.027,1.128-.073,2.152-.151,3.085a15.874,15.874,0,0,1-1.551,6.172,15.469,15.469,0,0,1-6.6,6.6,15.874,15.874,0,0,1-6.172,1.551c-2.291.19-5.133.19-8.706.19H25.217c-3.573,0-6.415,0-8.706-.19a15.876,15.876,0,0,1-6.172-1.551,15.47,15.47,0,0,1-5.207-4.4c-.026-.033-.051-.067-.076-.1a15.451,15.451,0,0,1-1.313-2.1A15.875,15.875,0,0,1,2.19,39.051C2,36.759,2,33.917,2,30.344V25.217c0-3.573,0-6.415.19-8.706a15.877,15.877,0,0,1,1.551-6.172,15.468,15.468,0,0,1,6.6-6.6A15.877,15.877,0,0,1,16.51,2.19C18.8,2,21.643,2,25.217,2ZM48.4,25.331V29.1l-3.576-3.73a5.156,5.156,0,0,0-7.463.02L25.334,38.074l-3.959-4.787a5.156,5.156,0,0,0-8.083.172L7.647,40.91a17.729,17.729,0,0,1-.318-2.286c-.171-2.053-.173-4.681-.173-8.394v-4.9c0-3.714,0-6.341.173-8.394a10.883,10.883,0,0,1,.988-4.222,10.312,10.312,0,0,1,4.4-4.4,10.883,10.883,0,0,1,4.222-.988c2.053-.171,4.681-.173,8.394-.173h4.9c3.714,0,6.341,0,8.394.173a10.882,10.882,0,0,1,4.222.988,10.312,10.312,0,0,1,4.4,4.4,10.889,10.889,0,0,1,.988,4.222C48.4,18.99,48.4,21.618,48.4,25.331ZM12.715,47.244a10.319,10.319,0,0,1-2.22-1.555L17.4,36.573l3.96,4.787a5.156,5.156,0,0,0,7.714.262L41.107,28.938l7.241,7.554c-.026.779-.063,1.484-.116,2.132a10.888,10.888,0,0,1-.988,4.222,10.312,10.312,0,0,1-4.4,4.4,10.888,10.888,0,0,1-4.222.988c-2.053.17-4.681.172-8.394.172h-4.9c-3.714,0-6.341,0-8.394-.172A10.889,10.889,0,0,1,12.715,47.244Z' transform='translate(-2 -2)' fill='#aeaeae' fill-rule='evenodd'/>
                  </svg>
                  <span className='ts-text-gray-11 text-start'> <span className='d-block fw-semibold'> Click or drag and drop image. </span>  <span className='ts-fs-8'> Recommended size: 1200 x 600 px </span> </span>
                </span>`}
              allowMultiple={false}
              acceptedFileTypes={["image/jpeg", "image/png"]}
              server="/api"
              files={myFiles}
              oninit={handleFilePondInit}
              onupdatefiles={setMyFiles}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="creatorCompensation"
              className="form-label ts-text-gray-4 fw-semibold"
            >
              Compensation for Creators:
            </label>
            <textarea
              className="form-control ts-form-control-2 ts-form-control-textarea-2"
              rows="3"
              placeholder="Indicate the compensation for creators, such as a monetary amount, free meals, vouchers, or other incentives. Detail the value or specifics of the offer."
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="uniqueSellingPoints"
              className="form-label ts-text-gray-4 fw-semibold"
            >
              Unique Selling Points to Highlight:
            </label>
            <textarea
              className="form-control ts-form-control-2 ts-form-control-textarea-2"
              rows="5"
              placeholder="List the key features or offers you'd like creators to highlight, such as special deals, unique menu items, or your brand's message."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center ts-gap-12">
        <button
          style={{ minWidth: "105px" }}
          className="ts-btn ts-btn__white ts-btn--rounded fw-semibold"
        >
          Cancel
        </button>
        <button
          style={{ minWidth: "105px" }}
          className="ts-btn ts-btn__primary ts-btn--rounded ts-px-10 fw-semibold"
        >
          Submit Campaign
        </button>
      </div>
    </>
  );
};

export default CampaignForm;
