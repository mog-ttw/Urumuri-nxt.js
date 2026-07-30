import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import ReviewForm from "./ReviewForm";

export const metadata: Metadata = {
  title: translations.en.meta.reviews.title,
  description: translations.en.meta.reviews.description,
};

export default function ReviewsPage() {
  return <ReviewForm />;
}
