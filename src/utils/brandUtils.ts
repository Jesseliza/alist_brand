import { Brand } from "@/types/entities";

export const getDisplayName = (brand: Brand): string => {
  return brand.name || "Unnamed Brand";
};