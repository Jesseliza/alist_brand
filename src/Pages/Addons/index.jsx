import React from "react";
import { Link } from "react-router-dom";
import CardGroupView from "../../components/Subscriptions/Addons"; // Adjust the path as necessary
import Icon from "../../Icons"; // Adjust the path as necessary
import "./styles.scss"; // Adjust the path as necessary

const AddOnsPage = () => {
  return (
    <div className="ts-add-ons-page">
      <div className="mb-3 text-center">
        <h1 className="ts-fs-3 fw-regular ts-lh-100 mb-03">
          Upgrade your plan
        </h1>
        <p className="fw-light mb-3">
          Enhance Your Subscription with optional Add-Ons. <br />
          Tap on each Add-On to learn more.
        </p>
      </div>

      <div className="mb-4">
        <CardGroupView />

        {/* <CardGroupView
          activeAddons="someActiveAddon" // Adjust according to your state/props
          updateAddonsGrandParentMain={handleUpdateAddonsGrandParentMain}
        /> */}
      </div>

      <div className="d-flex flex-column gap-3">
        <Link
          className="ts-btn ts-btn__primary rounded-pill d-flex justify-content-center px-5 fw-semibold ts-lh-135"
          to="/billing"
        >
          Proceed
        </Link>
        <Link
          className="ts-btn ts-btn__dark-gray-2 rounded-pill d-flex justify-content-center px-4 fw-semibold ts-lh-135"
          to="/plans"
        >
          <div className="ts-primary-arrow">
            <Icon name="arrow-left-2" />
          </div>
          <span className="ms-3">Back to Plans</span>
        </Link>
      </div>
    </div>
  );
};

export default AddOnsPage;
