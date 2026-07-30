import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: translations.en.meta.contact.title,
  description: translations.en.meta.contact.description,
};

export default function ContactPage() {
  return <ContactContent />;
}
