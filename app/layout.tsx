import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Lucas Mary | Développeur Web Freelance à Caen - Création de Sites Internet",
  description:
    "Lucas Mary, développeur web freelance à Caen (Normandie). Création de sites internet, applications web sur mesure, e-commerce. Expert React, Next.js, Node.js. Devis gratuit.",
  keywords: [
    "développeur web Caen",
    "développeur freelance Caen",
    "création site internet Caen",
    "développeur web Normandie",
    "freelance web Caen",
    "création site web Caen",
    "développeur React Caen",
    "développeur Next.js Caen",
    "agence web Caen",
    "site e-commerce Caen",
    "Lucas Mary développeur",
    "développeur full-stack Caen",
  ],
  authors: [{ name: "Lucas Mary" }],
  creator: "Lucas Mary",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lucasmary.fr",
    title: "Lucas Mary | Développeur Web Freelance à Caen",
    description:
      "Développeur web freelance à Caen. Création de sites internet et applications web sur mesure. Expert React, Next.js, Node.js.",
    siteName: "Lucas Mary - Développeur Web",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Mary | Développeur Web Freelance à Caen",
    description: "Développeur web freelance à Caen. Création de sites internet et applications web sur mesure.",
    creator: "@lucasmary",
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
    canonical: "https://lucasmary.fr",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lucas Mary - Développeur Web Freelance",
    description: "Développeur web freelance spécialisé dans la création de sites internet et applications web à Caen",
    url: "https://lucasmary.fr",
    telephone: "+33600000000",
    email: "contact@lucasmary.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caen",
      addressRegion: "Normandie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1829,
      longitude: -0.3707,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 49.1829,
        longitude: -0.3707,
      },
      geoRadius: "50000",
    },
    priceRange: "€€",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: ["https://github.com/lucasmary", "https://linkedin.com/in/lucasmary"],
  }

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
