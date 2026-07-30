import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import TransportContent from "./TransportContent";

export const metadata: Metadata = {
  title: translations.en.meta.transport.title,
  description: translations.en.meta.transport.description,
};

export default function TransportPage() {
  return <TransportContent />;
}
