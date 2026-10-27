import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prayosha Threading & Wax Bar | Toronto's Favourite Since 2017",
    template: "%s | Prayosha Threading & Wax Bar",
  },
  description:
    "Expert brow shaping, facial threading, and full-body waxing across 5 convenient Toronto locations. Walk in or book ahead. Toronto's trusted beauty destination since 2017.",
  keywords: [
    "threading Toronto",
    "waxing Toronto",
    "eyebrow threading",
    "facial threading",
    "brow shaping Toronto",
    "wax bar Toronto",
    "Prayosha",
    "beauty salon Toronto",
    "lash tinting Toronto",
    "facials Toronto",
  ],
  openGraph: {
    title: "Prayosha Threading & Wax Bar",
    description:
      "Expert threading, waxing, tinting & facials at 5 Toronto locations. Book online or walk in.",
    url: "https://www.prayoshathreadingbar.ca",
    siteName: "Prayosha Threading & Wax Bar",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayosha Threading & Wax Bar",
    description:
      "Expert threading, waxing, tinting & facials at 5 Toronto locations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.prayoshathreadingbar.ca",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Prayosha Threading & Wax Bar",
    description:
      "Expert brow shaping, facial threading, and full-body waxing across 5 convenient Toronto locations.",
    url: "https://www.prayoshathreadingbar.ca",
    telephone: "+1-416-483-2301",
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2714 Yonge Street",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M4N 2H9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7095,
      longitude: -79.3985,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "10000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-gray-600 bg-cream">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
