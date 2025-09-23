"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Brand } from "@/types/entities";
import BrandForm from "@/components/features/brands/BrandForm";
import Loader from "@/components/general/Loader";
import { fetchData } from "@/services/commonService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformApiVenueToBrand = (venue: any): Brand => {
  return {
    brandId: venue.id.toString(),
    name: venue.venue_title,
    accountId: venue.accountId || 'N/A',
    logo: venue.logo || '',
    phoneNumber: venue.phoneNumber || '',
    emailAddress: venue.emailAddress || '',
    industry: venue.industry || 'N/A',
    companyName: venue.companyName || '',
    businessLocation: venue.businessLocation || '',
    tradeLicenseCopy: venue.tradeLicenseCopy || '',
    vatCertificate: venue.vatCertificate || '',
    instagramHandle: venue.instagramHandle || '',
    websiteUrl: venue.venue_url || '',
    associateFirstName: venue.associateFirstName || '',
    associateLastName: venue.associateLastName || '',
    associateEmail: venue.associateEmail || '',
    associatePhone: venue.associatePhone || '',
    associateInitials: venue.associateInitials || '',
    associateBackground: venue.associateBackground || '#CCCCCC',
    offersCount: venue.offersCount || 0,
    campaignsCount: venue.campaignsCount || 0,
    profileCompletion: venue.profileCompletion || 0,
  };
};

export default function BrandPage() {
  const params = useParams();
  const { brandId } = params;
  const isCreateMode = brandId === "create";

  const [brand, setBrand] = useState<Brand | null>(null);
  const [loading, setLoading] = useState(!isCreateMode);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isCreateMode) {
      const fetchBrand = async () => {
        setLoading(true);
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const response: any = await fetchData(`/api/list/venues/${brandId}`);
          if (response && response.venue) {
            setBrand(transformApiVenueToBrand(response.venue));
          } else {
            setError("Brand not found.");
          }
        } catch (e) {
          setError("Failed to fetch brand data.");
        } finally {
          setLoading(false);
        }
      };
      fetchBrand();
    }
  }, [brandId, isCreateMode]);

  const handleSave = async (data: FormData) => {
    setIsSaving(true);
    setError(null);
    // TODO: Implement API call to save/update brand.
    // The API endpoints are not defined in the codebase.
    if (isCreateMode) {
      console.log("Creating brand:", Object.fromEntries(data.entries()));
    } else {
      console.log("Updating brand:", brandId, Object.fromEntries(data.entries()));
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSaving(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!brand && !isCreateMode) {
    return <p className="text-red-500">Brand not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isCreateMode ? "Add Brand" : "Edit Brand"}
      </h1>
      <BrandForm
        brand={brand}
        onSave={handleSave}
        isSaving={isSaving}
        error={error}
      />
    </div>
  );
}
