import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import FoodContent from "./FoodContent";

export const metadata: Metadata = {
  title: translations.en.meta.food.title,
  description: translations.en.meta.food.description,
};

export default function FoodPage() {
  return <FoodContent />;
}
