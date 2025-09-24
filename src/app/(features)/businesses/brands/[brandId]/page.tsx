"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import Loader from "@/components/general/Loader";
import { fetchData } from "@/services/commonService";
import { transformApiVenueToBrand } from "@/utils/brandUtils";

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
    alert("Brand saved successfully! (This is a placeholder message)");
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
    <div className="pt-6">
      {isCreateMode ? (
        <div className="bg-white p-6 mb-6">
          <h1 className="text-2xl font-bold">Add Brand</h1>
        </div>
      ) : (
        <BrandHeader
          name={brand?.name || ""}
          subtitle={brand?.businessLocation || ""}
          logo={brand?.logo}
          tabs={["Business Details", "Campaigns"]}
          activeTab="Business Details"
        />
      )}
      <div className="pb-6">
        <BrandTabContent
          activeTab="Business Details"
          brand={{
            ...brand,
            onFieldChange: handleFieldChange,
            onFileChange: handleFileChange,
            isEditMode: true,
            onSave: handleSave,
            isSaving: isSaving,
            isCreateMode: isCreateMode,
          }}
        />
      </div>
    </div>
  );
}
