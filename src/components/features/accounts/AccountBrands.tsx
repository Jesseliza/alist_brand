import AccountBrandCard from "./AccountBrandCard";
import { Brand } from "@/types/entities";
import Link from "next/link";

interface AccountBrandsProps {
  brands?: Brand[];
  accountId?: string;
}

export default function AccountBrands({ brands, accountId }: AccountBrandsProps) {
  if (!brands || brands.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md flex items-center justify-center min-h-[200px] w-full">
        <p className="text-gray-500">No brands found for this account.</p>
      </div>
    );
  }

  return (
    <div className="mt-[48px] px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[13px] max-w-[400px] sm:max-w-none mx-auto sm:mx-0">
      {brands.map((brand) => (
        <Link
          key={brand.brandId}
          href={`/businesses/brands/${brand.brandId}`}
        >
          <AccountBrandCard brand={brand} />
        </Link>
      ))}
    </div>
  );
}
