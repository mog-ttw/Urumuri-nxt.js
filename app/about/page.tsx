import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: translations.en.meta.about.title,
  description: translations.en.meta.about.description,
};

export default function AboutPage() {
  return <AboutContent />;
}
