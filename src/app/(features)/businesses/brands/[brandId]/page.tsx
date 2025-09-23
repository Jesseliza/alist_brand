"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { fetchBrandByIdRequest } from "@/store/brand/brandSlice";
import { RootState } from "@/store/store";
import BrandForm from "@/components/features/brands/BrandForm";
import Loader from "@/components/general/Loader";

export default function BrandPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { brandId } = params;

  const { currentBrand, loading, error } = useSelector(
    (state: RootState) => state.brand
  );

  const isEditMode = brandId !== "0";

  useEffect(() => {
    if (isEditMode) {
      dispatch(fetchBrandByIdRequest({ brandId: brandId as string }));
    }
  }, [dispatch, brandId, isEditMode]);

  if (loading && isEditMode) {
    return <Loader />;
  }

  if (error && isEditMode) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEditMode ? "Edit Brand" : "Add Brand"}
      </h1>
      <BrandForm brand={isEditMode ? currentBrand : null} />
    </div>
  );
}
