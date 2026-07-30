import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import CourierContent from "./CourierContent";

export const metadata: Metadata = {
  title: translations.en.meta.courier.title,
  description: translations.en.meta.courier.description,
};

export default function CourierPage() {
  return <CourierContent />;
}
