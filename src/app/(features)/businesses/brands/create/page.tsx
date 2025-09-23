"use client";

import BrandForm from "@/components/features/brands/BrandForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBrandPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSave = async (data: FormData) => {
    setIsSaving(true);
    setError(null);
    // TODO: Implement API call to save brand.
    // The API endpoint for creating a brand is not defined in the codebase.
    // Assuming a POST to /api/list/venues.
    console.log("Saving new brand:", Object.fromEntries(data.entries()));
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    router.push("/businesses/brands");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Brand</h1>
      <BrandForm
        brand={null}
        onSave={handleSave}
        isSaving={isSaving}
        error={error}
      />
    </div>
  );
}
