import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import DriversContent from "./DriversContent";

export const metadata: Metadata = {
  title: translations.en.meta.drivers.title,
  description: translations.en.meta.drivers.description,
};

export default function DriversPage() {
  return <DriversContent />;
}
