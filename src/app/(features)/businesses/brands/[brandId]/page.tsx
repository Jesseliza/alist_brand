"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
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

  const [brand, setBrand] = useState<Partial<Brand>>({});
  const [loading, setLoading] = useState(!isCreateMode);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isCreateMode) {
      const fetchBrand = async () => {
        setLoading(true);
        try {
          const response: any = await fetchData(`/api/list/venues`);
          if (response && response.venues) {
            const allBrands = response.venues.map(transformApiVenueToBrand);
            const foundBrand = allBrands.find((b: Brand) => b.brandId === brandId);
            if (foundBrand) {
              setBrand(foundBrand);
            } else {
              setError("Brand not found.");
            }
          } else {
            setError("Failed to fetch brands.");
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

  const handleFieldChange = (field: keyof Brand, value: string) => {
    setBrand((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: keyof Brand, file: File) => {
    setBrand((prev) => ({ ...prev, [field]: file }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    // TODO: Implement API call to save/update brand.
    console.log("Saving brand:", brand);
    await new Promise(resolve => setTimeout(resolve, 1000));
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
    <div>
      <h1 className="text-2xl font-bold mb-4 px-4">
        {isCreateMode ? "Add Brand" : "Edit Brand"}
      </h1>
      <BrandTabContent
        activeTab="Business Details"
        brand={{
          ...brand,
          onFieldChange: handleFieldChange,
          onFileChange: handleFileChange,
          isEditMode: true, // Always editable in this context
        }}
      />
      <div className="flex justify-end mt-4 px-4">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-500 text-white rounded-[11px] text-[18px] leading-[27px] pt-1.25 pb-1.75 px-6"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
