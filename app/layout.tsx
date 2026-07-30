import type { Metadata } from "next";
import "./globals.css";
import { bricolage, dmSans } from "@/lib/fonts";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/ThemeContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: translations.en.meta.home.title,
  description: translations.en.meta.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${dmSans.variable}`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <LanguageProvider>
            <div className="page-shell">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
