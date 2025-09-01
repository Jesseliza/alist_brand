import React from "react";
import Package from "../CardDetails"; // Adjust the path as per your project structure
import "./styles.scss"; // Import your scoped or regular CSS file

const PackagesWrapper = () => {
  const packages = [
    {
      id: 1,
      title: "Essential",
      description: "Accessing creators and establishing connections with them",
      currency: "AED",
      price: "2,999",
      startat: "Starting at",
      month: "month",
      priceDetails: "AED 8,997 every 3 months",
      Btntext: "Upgrade to Essential",
      BtnLink: "addons",
      BtnLinkExtention: "3months",
      isPopular: false,
      featureList: [
        "Up to 3 Instagram stories per creator.",
        "Your message on all generated content.",
        "1 public review per creator.",
        "Transparent Campaign reports.",
        "Free campaign consultation.",
      ],
    },
    {
      id: 2,
      title: "Premium",
      description:
        "Premium package with advanced analytics and priority support",
      currency: "AED",
      price: "5,999",
      startat: "Starting at",
      month: "month",
      priceDetails: "AED 17,997 every 6 months",
      Btntext: "Upgrade to Premium",
      BtnLink: "addons",
      BtnLinkExtention: "6months",
      isPopular: true,
      featureList: [
        "Everything In Essential, Plus:",
        "Remove Branding from creator’s content.",
        "Add your Hashtags to creator’s content.",
        "Add Tap / Discount to creator’s content.",
        "Filter Creators by Demographic.",
      ],
    },
    {
      id: 3,
      title: "Pro",
      description: "Advanced package for businesses with dedicated account",
      currency: "AED",
      price: "5,999",
      startat: "Starting at",
      month: "month",
      priceDetails: "AED 35,997 every 12 months",
      Btntext: "Upgrade to Pro",
      BtnLink: "addons",
      BtnLinkExtention: "12months",
      isPopular: false,
      featureList: [
        "Everything In Premium, Plus:",
        "Pre-Select the Creators.",
        "Personal & Commercial Content Usage.",
        "Dedicated Campaign manager.",
      ],
    },
  ];

  return (
    <section className="ts-packages-wrapper">
      <div className="ts-packages-wrapper__outer">
        <div className="ts-packages-wrapper__inner mb-08 mb-lg-07 pb-0">
          <nav
            className="mb-11 d-flex flex-column flex-lg-row align-items-center justify-content-between"
            id="packagesGroup"
            role="tablist"
          >
            <h1 className="ts-modal-title ts-fs-2 fw-regular mb-05 mb-lg-0">
              Upgrade your plan
            </h1>
            <div
              className="nav ts-nav-tabs-plans d-block nav-tabs ts-nav-wrapper rounded-pill"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="ts-tab-link nav-link active rounded-pill fw-semibold"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                3 Months
              </button>
              <button
                className="ts-tab-link nav-link rounded-pill fw-semibold d-flex flex-nowrap align-items-center justify-content-center gap-1"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <span className="fw-semibold text-nowrap"> 6 Months | </span>
                <span className="ts-tab-link__duration fw-semibold">
                  10% <br className="d-lg-none" /> OFF
                </span>
              </button>
              <button
                className="ts-tab-link nav-link rounded-pill fw-semibold d-flex flex-nowrap align-items-center justify-content-center gap-1"
                id="nav-12m-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-12m"
                type="button"
                role="tab"
                aria-controls="nav-12m-pane"
                aria-selected="false"
              >
                <span className="fw-semibold text-nowrap"> Annual | </span>
                <span className="ts-tab-link__duration fw-semibold">
                  25% <br className="d-lg-none" /> OFF
                </span>
              </button>
            </div>
          </nav>
          <div className="tab-content" id="packagesGroupContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="ts-package-cards-group">
                {packages.map((packageCard) => (
                  <Package
                    key={packageCard.id}
                    title={packageCard.title}
                    isPopular={packageCard.isPopular}
                    popularTag="Popular"
                    description={packageCard.description}
                    startat={packageCard.startat}
                    currency={packageCard.currency}
                    price={packageCard.price}
                    month={packageCard.month}
                    priceDetails={packageCard.priceDetails}
                    Btntext={packageCard.Btntext}
                    BtnLink={packageCard.BtnLink}
                    BtnLinkExtention={packageCard.BtnLinkExtention}
                    featureList={packageCard.featureList}
                  />
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              6 Months | 10% OFF
            </div>
            <div
              className="tab-pane fade"
              id="nav-12m"
              role="tabpanel"
              aria-labelledby="nav-12m-tab"
            >
              Annual | 25% OFF
            </div>
          </div>
        </div>
        <div className="px-3 px-lg-0">
          <div className="d-lg-none">
            <p className="ts-text-gray-4 ts-font-heading ts-fs-4 text-center mb-05">
              Test drive the power of influencer marketing with a
              <span className="fw-semibold-heading"> 30 day trial </span> on the
              Essential plan
            </p>
            <a
              className="btn ts-btn ts-btn__dark-gray-2 ts-fs-4--important fw-semibold-heading rounded-pill w-100 fw-bold mb-03"
              href="/"
            >
              Start 30 day trial
            </a>
          </div>
          <p className="ts-text-primary text-center mb-0 mb-lg-4">
            Please note that all listed prices are exclusive of VAT.
          </p>
        </div>
      </div>
      <div className="ts-free-trial-container d-none d-lg-block">
        <h3 className="ts-fs-4 fw-normal text-center text-white mb-0">
          Test drive the power of influencer marketing with a
          <a className="text-white fw-semibold" href="#">
            {" "}
            30 day trial{" "}
          </a>{" "}
          on the Essential plan
        </h3>
      </div>
    </section>
  );
};

export default PackagesWrapper;
