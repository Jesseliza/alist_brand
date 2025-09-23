import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandCampaigns from "@/components/features/brands/BrandCampaigns";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Brand } from "@/types/entities";
import { useParams } from "next/navigation";

interface BrandTabContentProps extends TabContentProps {
  brand: any; // This should be improved
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
        return <BrandDetails {...brand} />;
      case "Campaigns":
        if (brand.isEditMode) {
          return (
            <div>
              <BrandCampaigns brandId={brand.originalBrand.brandId} accountId={accountId} />
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return <div className="w-full ">{renderContent()}</div>;
}
