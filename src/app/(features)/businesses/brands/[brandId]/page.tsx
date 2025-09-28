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
  const { user } = useSelector((state: RootState) => state.auth);

  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof Brand, string>>>({});
  const [activeTab, setActiveTab] = useState("Business Details");

  useEffect(() => {
    dispatch(fetchIndustries());
    if (isCreateMode) {
      dispatch(initializeNewBrand());
    } else if (brandId) {
      dispatch(fetchBrandRequest({ brandId: brandId as string }));
    }
  }, [brandId, isCreateMode, dispatch]);

  useEffect(() => {
    if (isCreateMode && user && user.registration_type !== 'admin') {
      dispatch(updateBrandField({ field: 'accountId', value: user.accountId }));
    }
  }, [isCreateMode, user, dispatch]);

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

  const handleFieldChange = (field: keyof Brand, value: string) => {
    dispatch(updateBrandField({ field, value }));
  };

  const handleSave = (files: {
    tradeLicenseFile: File | null;
    vatCertificateFile: File | null;
  }) => {
    if (brand) {
      const newErrors: Partial<Record<keyof Brand, string>> = {};
      const requiredFields: (keyof Brand)[] = [
        "name",
        "companyName",
        "accountId",
        "country",
        "state",
        "industry",
      ];

      requiredFields.forEach((field) => {
        if (!brand[field]) {
          const label = field.replace(/([A-Z])/g, " $1");
          const capitalizedLabel =
            label.charAt(0).toUpperCase() + label.slice(1);
          newErrors[field] = `${capitalizedLabel} is required.`;
        }
      });

      if (isCreateMode && !brand.tradeLicenseCopy && !files.tradeLicenseFile) {
        newErrors.tradeLicenseCopy = "Trade License copy is required.";
      }

      if (isCreateMode && !brand.vatCertificate && !files.vatCertificateFile) {
        newErrors.vatCertificate = "VAT Certificate is required.";
      }

      setValidationErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        return;
      }

      const payload = {
        ...brand,
        tradeLicenseFile: files.tradeLicenseFile,
        vatCertificateFile: files.vatCertificateFile,
      };

      if (isCreateMode) {
        dispatch(createBrandRequest(payload));
      } else {
        dispatch(updateBrandRequest(payload));
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
          logo={brand?.logo || ""}
          tabs={["Business Details", "Campaigns"]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}
      <div className="pb-6">
        <BrandTabContent
          activeTab={activeTab}
          brand={{
            ...brand,
            onFieldChange: handleFieldChange,
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