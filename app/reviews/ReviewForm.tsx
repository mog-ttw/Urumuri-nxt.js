"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import styles from "./reviews.module.css";

const STORAGE_REVIEWS = "urumuri_reviews";

export default function ReviewForm() {
  const t = useTranslations();
  const p = t.pages.reviews;
  const router = useRouter();
  const header = useAnimateOnScroll<HTMLDivElement>();
  const successRef = useRef<HTMLDivElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ratingLabel =
    hoverValue > 0
      ? p.form.ratingLabels[hoverValue - 1]
      : rating > 0
        ? p.form.ratingLabels[rating - 1]
        : p.form.ratingSelect;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      service,
      rating,
      review,
      timestamp: new Date().toISOString(),
    };
    try {
      const reviews = JSON.parse(localStorage.getItem(STORAGE_REVIEWS) || "[]");
      reviews.push(formData);
      localStorage.setItem(STORAGE_REVIEWS, JSON.stringify(reviews));
    } catch {
      // ignore storage failures
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setRating(0);
    setHoverValue(0);
    setReview("");

    successRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <section className={`section ${styles.reviewSection}`}>
      <div className={`container ${styles.reviewContent}`}>
        <div
          ref={header.ref}
          className={`${styles.reviewHeader} ${header.className}`}
        >
          <p className="eyebrow">{p.header.eyebrow}</p>
          <h1>{p.header.title}</h1>
          <p>{p.header.subtitle}</p>
        </div>

        <div
          ref={successRef}
          className={`${styles.successMessage} ${submitted ? styles.visible : ""}`}
        >
          <h3>{p.success.title}</h3>
          <p>{p.success.text}</p>
        </div>

        <form className={styles.reviewForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{p.form.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={p.form.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{p.form.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={p.form.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">{p.form.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={p.form.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">{p.form.service}</label>
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">{p.form.servicePlaceholder}</option>
              <option value="transport">Urumuri Transport</option>
              <option value="food">{p.form.services.food}</option>
              <option value="grocery">{p.form.services.grocery}</option>
              <option value="courier">{p.form.services.courier}</option>
              <option value="other">{p.form.services.other}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>{p.form.rating}</label>
            <div className={styles.ratingGroup}>
              <div
                className={styles.starRating}
                id="starRating"
                onMouseLeave={() => setHoverValue(0)}
              >
                {[1, 2, 3, 4, 5].map((value) => {
                  const active = value <= (hoverValue || rating);
                  return (
                    <span
                      key={value}
                      className={`${styles.star} ${
                        value <= rating ? styles.active : ""
                      }`}
                      style={{
                        color: active ? "var(--accent)" : "var(--gray-200)",
                      }}
                      onClick={() => setRating(value)}
                      onMouseOver={() => setHoverValue(value)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <span className={styles.ratingLabel}>{ratingLabel}</span>
            </div>
            <input
              type="hidden"
              id="rating"
              name="rating"
              value={rating > 0 ? rating : ""}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="review">{p.form.review}</label>
            <textarea
              id="review"
              name="review"
              required
              placeholder={p.form.reviewPlaceholder}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.btnSubmit}>
              {p.form.submit}
            </button>
            <Link href="/" className={styles.btnCancel}>
              {p.form.cancel}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
