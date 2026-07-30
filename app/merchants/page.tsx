import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import MerchantsContent from "./MerchantsContent";

export const metadata: Metadata = {
  title: translations.en.meta.merchants.title,
  description: translations.en.meta.merchants.description,
};

export default function MerchantsPage() {
  return <MerchantsContent />;
}
