"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Brand } from "@/types/entities";
import BrandTabContent from "@/components/features/brands/BrandTabContent";
import BrandHeader from "@/components/features/brands/BrandHeader";
import Loader from "@/components/general/Loader";
import { fetchData } from "@/services/commonService";
import { transformApiVenueToBrand } from "@/utils/brandUtils";
import axiosInstance from "@/services/apiHelper";
import toast from "react-hot-toast";

export default function BrandPage() {
  const params = useParams();
  const router = useRouter();
  const { brandId } = params;
  const isCreateMode = brandId === "create";

  const [brand, setBrand] = useState<Partial<Brand>>({});
  const [loading, setLoading] = useState(!isCreateMode);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
            setError("Brand not found.");
          }
        } catch {
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

    setIsSaving(true);
    setError(null);

    const formData = new FormData();
    formData.append('venue_title', brand.name || '');
    formData.append('company_name', brand.companyName || '');
    formData.append('account_id', brand.accountId || '');
    formData.append('country_id', brand.country || '');
    formData.append('state_id', brand.state || '');
    formData.append('category_id', brand.industry || '');
    formData.append('venue_instagram_url', brand.instagramHandle || '');
    formData.append('venue_url', brand.websiteUrl || '');
    formData.append('Venue_contact_name', brand.associateName || '');
    formData.append('venue_email', brand.associateEmail || '');
    formData.append('venue_contact_number', brand.associatePhone || '');

    if (brand.tradeLicenseCopy) {
      formData.append('trade_license_file', brand.tradeLicenseCopy);
    }
    if (brand.vatCertificate) {
      formData.append('vat_certificate_file', brand.vatCertificate);
    }

    try {
      const response = await axiosInstance.post('/add/venue', formData);

      if (response.data) {
        toast.success("Brand saved successfully!");
        router.push("/businesses/brands");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save brand.');
      router.push("/businesses/brands");
    } finally {
      setIsSaving(false);
    }
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
            isSaving: isSaving,
            isCreateMode: isCreateMode,
            errors: validationErrors,
          }}
        />
      </div>
    </div>
  );
}