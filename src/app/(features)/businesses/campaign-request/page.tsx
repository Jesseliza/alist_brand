"use client";

import React, { useEffect, useState } from "react";

const CampaignRequestPage = () => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname === "partners.alist.ae") {
        setIframeUrl("https://business.alist.ae/forms/campaign-details");
      } else {
        setIframeUrl(
          "https://development-business.alist.ae/forms/campaign-details",
        );
      }
    }
  }, []);

  return (
    <div className="h-full">
      {iframeUrl && (
        <iframe src={iframeUrl} className="w-full h-full border-0" />
      )}
    </div>
  );
};

export default CampaignRequestPage;