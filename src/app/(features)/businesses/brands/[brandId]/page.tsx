"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import Loader from "@/components/general/Loader";
import toast from "react-hot-toast";
import {
  fetchBrandRequest,
  initializeNewBrand,
  updateBrandField,
} from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import { fetchIndustries } from "@/store/common/commonSlice";
import api from "@/services/apiHelper";

export default function BrandPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { brandId } = params;
  const isCreateMode = brandId === "create";

  const { brand, loading, error } = useSelector(
    (state: RootState) => state.brand
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof Brand, string>>>({});
  const [activeTab, setActiveTab] = useState("Business Details");
  const [isSaving, setIsSaving] = useState(false);

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


  const handleFieldChange = (field: keyof Brand, value: string) => {
    dispatch(updateBrandField({ field, value }));
  };

  const handleSave = async (files: {
    tradeLicenseFile: File | null;
    vatCertificateFile: File | null;
  }) => {
    if (!brand) return;

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
        const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
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

    setIsSaving(true);
    setSaveError(null);

    const formData = new FormData();
    formData.append("venue_title", brand.name || "");
    formData.append("company_name", brand.companyName || "");
    formData.append("account_id", brand.accountId || "");
    formData.append("country_id", brand.country || "");
    formData.append("state_id", brand.state || "");
    formData.append("category_id", brand.industry || "");
    formData.append("venue_instagram_url", brand.instagramHandle || "");
    formData.append("venue_url", brand.websiteUrl || "");
    formData.append("Venue_contact_name", brand.associateName || "");
    formData.append("venue_email", brand.associateEmail || "");
    formData.append("venue_contact_number", brand.associatePhone || "");

    if (files.tradeLicenseFile) {
      formData.append("trade_license_file", files.tradeLicenseFile);
    }
    if (files.vatCertificateFile) {
      formData.append("vat_certificate_file", files.vatCertificateFile);
    }

    try {
      const endpoint = isCreateMode ? "/api/add/venue" : `/api/venue/${brandId}`;
      const response = await api.post(endpoint, formData);

      if (response.data.message) {
        toast.success(response.data.message);
        router.push("/businesses/brands");
      } else {
        throw new Error("An unexpected error occurred.");
      }
    } catch (err) {
      const errorMessage = (err as any).response?.data?.message || "An error occurred while saving the brand.";
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
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
            isSaving: isSaving,
            isCreateMode: isCreateMode,
            errors: validationErrors,
          }}
        />
      </div>
    </div>
  );
}