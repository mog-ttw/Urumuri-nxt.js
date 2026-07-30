import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import SafetyContent from "./SafetyContent";

export const metadata: Metadata = {
  title: translations.en.meta.safety.title,
  description: translations.en.meta.safety.description,
};

export default function SafetyPage() {
  return <SafetyContent />;
}
