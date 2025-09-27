"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import Loader from "@/components/general/Loader";
import {
  createBrandRequest,
  resetCreateStatus,
  fetchBrandRequest,
  initializeNewBrand,
  updateBrandField,
  updateBrandRequest,
  resetUpdateStatus,
} from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import { fetchIndustries } from "@/store/common/commonSlice";

export default function BrandPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { brandId } = params;
  const isCreateMode = brandId === "create";

  const { brand, loading, createLoading, createSuccess, updateLoading, updateSuccess, error } = useSelector(
    (state: RootState) => state.brand
  );

  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof Brand, string>>>({});

  useEffect(() => {
    dispatch(fetchIndustries());
    if (isCreateMode) {
      dispatch(initializeNewBrand());
    } else if (brandId) {
      dispatch(fetchBrandRequest({ brandId: brandId as string }));
    }
  }, [brandId, isCreateMode, dispatch]);

  useEffect(() => {
    if (createSuccess) {
      router.push("/businesses/brands");
      dispatch(resetCreateStatus());
    }
    if (updateSuccess) {
      router.push("/businesses/brands");
      dispatch(resetUpdateStatus());
    }
  }, [createSuccess, updateSuccess, router, dispatch]);

  const handleFieldChange = (field: keyof Brand, value: string | File) => {
    dispatch(updateBrandField({ field, value }));
  };

  const handleFileChange = (field: keyof Brand, file: File) => {
    dispatch(updateBrandField({ field, value: file }));
  };

  const handleSave = () => {
    if (brand) {
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

      if (isCreateMode) {
        dispatch(createBrandRequest(brand));
      } else {
        dispatch(updateBrandRequest(brand));
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error && !isCreateMode) {
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  }

  if (!brand && !isCreateMode) {
    return <Loader />;
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
          // subtitle={brand?.businessLocation || ""}
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
            isSaving: createLoading || updateLoading,
            isCreateMode: isCreateMode,
            errors: validationErrors,
          }}
        />
      </div>
    </div>
  );
}