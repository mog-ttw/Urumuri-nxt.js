import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: translations.en.meta.home.title,
  description: translations.en.meta.home.description,
};

export default function HomePage() {
  return <HomeContent />;
}
