"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import Loader from "@/components/general/Loader";
import { fetchData } from "@/services/commonService";
import { transformApiVenueToBrand } from "@/utils/brandUtils";
import { createBrandRequest, resetCreateStatus } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";

export default function BrandPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { brandId } = params;
  const isCreateMode = brandId === "create";

  const { createLoading, createSuccess, error } = useSelector(
    (state: RootState) => state.brand
  );

  const [brand, setBrand] = useState<Partial<Brand>>({});
  const [loading, setLoading] = useState(!isCreateMode);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof Brand, string>>>({});

  useEffect(() => {
    if (!isCreateMode) {
      const fetchBrand = async () => {
        setLoading(true);
        try {
          const response = await fetchData(`/api/list/venues/${brandId}`);
          if (response && response.venue) {
            setBrand(transformApiVenueToBrand(response.venue));
          } else {
            // setError("Brand not found.");
          }
        } catch {
          // setError("Failed to fetch brand data.");
        } finally {
          setLoading(false);
        }
      };
      fetchBrand();
    }
  }, [brandId, isCreateMode]);

  useEffect(() => {
    if (createSuccess) {
      router.push("/businesses/brands");
      dispatch(resetCreateStatus());
    }
  }, [createSuccess, router, dispatch]);

  const handleFieldChange = (field: keyof Brand, value: string) => {
    setBrand((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: keyof Brand, file: File) => {
    setBrand((prev) => ({ ...prev, [field]: file }));
  };

  const handleSave = () => {
    const newErrors: Partial<Record<keyof Brand, string>> = {};
    const requiredFields: (keyof Brand)[] = [
      'name', 'companyName', 'accountId', 'country', 'state', 'industry'
    ];

    requiredFields.forEach((field) => {
      if (!brand[field]) {
        const label = field.replace(/([A-Z])/g, " $1");
        const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        newErrors[field] = `${capitalizedLabel} is required.`;
      }
    });

    if (isCreateMode && !brand.tradeLicenseCopy) {
      newErrors.tradeLicenseCopy = "Trade License copy is required.";
    }

    if (isCreateMode && !brand.vatCertificate) {
      newErrors.vatCertificate = "VAT Certificate is required.";
    }

    setValidationErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    dispatch(createBrandRequest(brand));
  };

  if (loading) {
    return <Loader />;
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
            isSaving: createLoading,
            isCreateMode: isCreateMode,
            errors: validationErrors,
          }}
        />
      </div>
    </div>
  );
}