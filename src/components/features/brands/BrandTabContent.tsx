import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandCampaigns from "@/components/features/brands/BrandCampaigns";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Brand } from "@/types/entities";

interface BrandTabContentProps extends TabContentProps {
  brand: Partial<Brand> & {
    isEditMode: boolean;
    onFieldChange: (field: keyof Brand, value: string) => void;
    onSave: (files: {
      tradeLicenseFile: File | null;
      vatCertificateFile: File | null;
    }) => void;
    isSaving: boolean;
    isCreateMode: boolean;
    errors?: Partial<Record<keyof Brand, string>>;
    onRemoveCampaign?: (id: string) => void;
  };
}

export default function BrandTabContent({
  activeTab,
  brand,
}: BrandTabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Business Details":
        return (
          <BrandDetails
            brand={brand}
            isEditMode={brand.isEditMode}
            onFieldChange={brand.onFieldChange}
            onSave={brand.onSave}
            isSaving={brand.isSaving}
            isCreateMode={brand.isCreateMode}
            errors={brand.errors}
          />
        );
      case "Campaigns":
        return (
          <div>
            <BrandCampaigns
              foodOffers={brand.Venue?.food_offers || []}
              brandName={brand.name || ""}
              brandLogo={brand.logo || ""}
              brandId={brand.brandId || ""}
              onRemoveCampaign={brand.onRemoveCampaign}
              brandCategory={brand.Venue?.category?.category}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}