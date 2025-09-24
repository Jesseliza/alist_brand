import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandCampaigns from "@/components/features/brands/BrandCampaigns";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Brand } from "@/types/entities";
import { useParams } from "next/navigation";

interface BrandTabContentProps extends TabContentProps {
  brand: Partial<Brand> & {
    isEditMode: boolean;
    onFieldChange: (field: keyof Brand, value: string) => void;
    onFileChange: (field: keyof Brand, file: File) => void;
    onSave: () => void;
    isSaving: boolean;
    isCreateMode: boolean;
  };
}

export default function BrandTabContent({
  activeTab,
  brand,
}: BrandTabContentProps) {
  const params = useParams();
  const accountId = params.accountId as string;

  const renderContent = () => {
    switch (activeTab) {
      case "Business Details":
        return (
          <BrandDetails
            brand={brand}
            isEditMode={brand.isEditMode}
            onFieldChange={brand.onFieldChange}
            onFileChange={brand.onFileChange}
            onSave={brand.onSave}
            isSaving={brand.isSaving}
            isCreateMode={brand.isCreateMode}
          />
        );
      case "Campaigns":
        return (
          <div>
            <BrandCampaigns brandId={brand.brandId} accountId={accountId} />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
