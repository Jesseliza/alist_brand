import BrandDetails from "@/components/features/brands/BrandDetails";
import BrandCampaigns from "@/components/features/brands/BrandCampaigns";
import { TabContentProps } from "@/components/general/UnifiedTabs";
import { Brand } from "@/types/entities";
import { useParams } from "next/navigation";

interface BrandTabContentProps extends TabContentProps {
  brand: Brand;
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
            businessName={brand.name}
            companyName={brand.companyName}
            businessLocation={brand.businessLocation}
            industry={brand.industry}
            registrationDate="13/08/2024" // This might need to be added to Brand type
            instagram={brand.instagramHandle}
            website={brand.websiteUrl}
            firstName={brand.associateFirstName}
            lastName={brand.associateLastName}
            email={brand.associateEmail}
            phone={brand.associatePhone}
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
