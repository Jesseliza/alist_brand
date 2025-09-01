import React, { useState, useRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Register the plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const DeliveryView = () => {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const filePondRef = useRef(null);

  const handleFilePondInit = () => {
    console.log("FilePond has initialized");
  };

  const handleFilePondInit2 = () => {
    console.log("FilePond has initialized");
  };

  return (
    <div className="ts-wrapper-body">
      <div className="ts-form-2-group ts-form-2-group--border ts-form-2-group--transparent mb-5">
        <div className="ts-form-2-group__left">
          <div className="ts-fs-4 ts-text-primary fw-semibold-heading mb-07">
            Contact info
          </div>
          <form>
            <div className="mb-3">
              <label
                htmlFor="AssociatedName"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Associate Name:
              </label>
              <input
                type="text"
                className="form-control ts-form-control-2"
                id="AssociatedName"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="associatedContactNumber"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Associate Contact Number:
              </label>
              <input
                type="tel"
                className="form-control ts-form-control-2"
                id="associatedContactNumber"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="emailAddress"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Email Address:
              </label>
              <input
                type="email"
                className="form-control ts-form-control-2"
                id="emailAddress"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="websiteUrl"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Website URL:
              </label>
              <input
                type="text"
                className="form-control ts-form-control-2"
                id="websiteUrl"
              />
            </div>
            <div>
              <label
                htmlFor="creatorsPerDay"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Instagram URL:
              </label>
              <input
                type="text"
                className="form-control ts-form-control-2"
                id="creatorsPerDay"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="ts-fs-4 ts-text-primary fw-semibold-heading mb-07">
            Required Business Details
          </div>
          <form>
            <div className="mb-3">
              <label
                htmlFor="BussinessName"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Business Name
              </label>
              <input
                type="text"
                className="form-control ts-form-control-2"
                id="BussinessName"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="companyName"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Company Name (as on trade license):
              </label>
              <input
                type="tel"
                className="form-control ts-form-control-2"
                id="companyName"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="location"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Business Location:
              </label>
              <select className="form-select ts-form-select-2" id="location">
                <option defaultValue="Dubai">Dubai</option>
                <option value="1">Kolkata</option>
                <option value="2">Islamabad</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="Industry"
                className="form-label ts-text-gray-4 fw-semibold"
              >
                Industry:
              </label>
              <select className="form-select ts-form-select-2" id="Industry">
                <option defaultValue="Food & Beverages">
                  Food & Beverages
                </option>
                <option value="1">Traveling</option>
                <option value="2">Support</option>
              </select>
            </div>
            <div className="row row-cols-2">
              <div>
                <div>
                  <label
                    htmlFor="tradeLicenseCopy"
                    className="form-label fw-semibold"
                  >
                    Trade License Copy:
                  </label>
                  <div className="ts-file-upload-sm mb-3">
                    <FilePond
                      name="tradeLicenseCopy"
                      ref={filePondRef}
                      labelIdle='<span class="d-flex align-items-center gap-3"><svg id="Group_2757" data-name="Group 2757" xmlns="http://www.w3.org/2000/svg" width="36.123" height="33.656" viewBox="0 0 36.123 33.656"><path id="Union_42" data-name="Union 42" d="M6.7,19.426h0a1,1,0,0,1-.677-.264l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l-6.7-6.7A1,1,0,0,1-1,11.727a1,1,0,0,1,.293-.707,1,1,0,0,1,1.414,0L5.7,16.012V0a1,1,0,0,1,1-1,1,1,0,0,1,1,1V16.012l5-4.993a1,1,0,1,1,1.414,1.415l-6.7,6.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0a1,1,0,0,1-.652.266H6.7Z" transform="translate(24.763 32.656) rotate(180)" fill="#00a4b6"/><g id="upload-svgrepo-com"><path id="Path_946" data-name="Path 946" d="M100.223,106.931a8.3,8.3,0,0,1-8.295,8.3H85.343V113.46h6.585a6.527,6.527,0,0,0-.008-13.053,6.652,6.652,0,0,0-1.363.141,6.382,6.382,0,0,0-1.726.633,11.239,11.239,0,0,0-.274-1.839v0a11.175,11.175,0,0,0-.6-1.843,11.485,11.485,0,0,0-10.589-7.021,11.455,11.455,0,0,0-8.126,3.367,11.5,11.5,0,0,0-2.464,3.653,11.479,11.479,0,0,0,2.464,12.6,11.455,11.455,0,0,0,8.126,3.367h1.6v1.774H77.315A13.267,13.267,0,1,1,90.251,98.793v0a8.433,8.433,0,0,1,1.669-.169A8.306,8.306,0,0,1,100.223,106.931Z" transform="translate(-64.1 -88.7)" fill="#6c6c6c"/></g></svg><span class="text-start"> <span class="ts-text-gray-primary d-block ts-fs-8"> Click to upload </span>  <span class="ts-fs-9"> pdf, jpg, png </span> </span></span>'
                      allowMultiple={false}
                      acceptedFileTypes={["image/jpeg", "image/png"]}
                      server="/api"
                      files={files}
                      onupdatefiles={setFiles}
                      oninit={handleFilePondInit}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="VatCertificate"
                    className="form-label fw-semibold"
                  >
                    VAT Certificate:
                  </label>
                  <div className="ts-file-upload-sm mb-3">
                    <FilePond
                      name="VatCertificate"
                      ref={filePondRef}
                      labelIdle='<span class="d-flex align-items-center gap-3"><svg id="Group_2757" data-name="Group 2757" xmlns="http://www.w3.org/2000/svg" width="36.123" height="33.656" viewBox="0 0 36.123 33.656"><path id="Union_42" data-name="Union 42" d="M6.7,19.426h0a1,1,0,0,1-.677-.264l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l-6.7-6.7A1,1,0,0,1-1,11.727a1,1,0,0,1,.293-.707,1,1,0,0,1,1.414,0L5.7,16.012V0a1,1,0,0,1,1-1,1,1,0,0,1,1,1V16.012l5-4.993a1,1,0,1,1,1.414,1.415l-6.7,6.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0a1,1,0,0,1-.652.266H6.7Z" transform="translate(24.763 32.656) rotate(180)" fill="#00a4b6"/><g id="upload-svgrepo-com"><path id="Path_946" data-name="Path 946" d="M100.223,106.931a8.3,8.3,0,0,1-8.295,8.3H85.343V113.46h6.585a6.527,6.527,0,0,0-.008-13.053,6.652,6.652,0,0,0-1.363.141,6.382,6.382,0,0,0-1.726.633,11.239,11.239,0,0,0-.274-1.839v0a11.175,11.175,0,0,0-.6-1.843,11.485,11.485,0,0,0-10.589-7.021,11.455,11.455,0,0,0-8.126,3.367,11.5,11.5,0,0,0-2.464,3.653,11.479,11.479,0,0,0,2.464,12.6,11.455,11.455,0,0,0,8.126,3.367h1.6v1.774H77.315A13.267,13.267,0,1,1,90.251,98.793v0a8.433,8.433,0,0,1,1.669-.169A8.306,8.306,0,0,1,100.223,106.931Z" transform="translate(-64.1 -88.7)" fill="#6c6c6c"/></g></svg><span class="text-start"> <span class="ts-text-gray-primary d-block ts-fs-8"> Click to upload </span>  <span class="ts-fs-9"> pdf, jpg, png </span> </span></span>'
                      allowMultiple={false}
                      acceptedFileTypes={[
                        "image/jpeg",
                        "image/png",
                        "application/pdf",
                      ]}
                      server="/api"
                      files={files2}
                      onupdatefiles={setFiles2}
                      oninit={handleFilePondInit2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center ts-gap-12">
        <button
          style={{ minWidth: "105px" }}
          className="ts-btn ts-btn__white ts-btn--rounded fw-semibold px-2"
        >
          Cancel
        </button>
        <button
          style={{ minWidth: "105px" }}
          className="ts-btn ts-btn__primary ts-btn--rounded fw-semibold px-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DeliveryView;
