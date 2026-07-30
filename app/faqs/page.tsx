import type { Metadata } from "next";
import FaqsContent from "./FaqsContent";

export const metadata: Metadata = {
  title: "FAQs | Urumuri",
  description:
    "Frequently asked questions about Urumuri Transport, Food, Courier, Drivers and Merchants.",
};

export default function FaqsPage() {
  return <FaqsContent />;
}
