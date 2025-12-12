import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { PageTransition } from "@/components/page-transition"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#00C853",
}

export const metadata: Metadata = {
  title: "Tazty - Hyperlocal Food Delivery in Madurai | ONDC Network",
  description:
    "Order food from your favorite local restaurants in Madurai with Tazty. Fast 15-minute delivery, support local businesses, and enjoy fresh food from hidden gems. Built on the ONDC network.",
  keywords: [
    "food delivery",
    "Madurai",
    "hyperlocal delivery",
    "ONDC",
    "local restaurants",
    "fast food delivery",
    "online food order",
    "Tazty",
    "South Indian food",
    "restaurant delivery",
    "quick commerce",
  ],
  authors: [{ name: "Tazty", url: "https://tazty.in" }],
  creator: "Tazty",
  publisher: "Tazty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tazty.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tazty.in",
    title: "Tazty - Hyperlocal Food Delivery in Madurai",
    description:
      "Order food from your favorite local restaurants in Madurai. Fast 15-minute delivery, support local businesses. Built on the ONDC network.",
    siteName: "Tazty",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tazty - Hyperlocal Food Delivery in Madurai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tazty - Hyperlocal Food Delivery in Madurai",
    description:
      "Order food from your favorite local restaurants in Madurai. Fast 15-minute delivery. Built on ONDC.",
    images: ["/og-image.jpg"],
    creator: "@tazty_in",
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
  icons: {
    icon: [
      { url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicons/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicons/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "food",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tazty",
    url: "https://tazty.in",
    logo: "https://tazty.in/icon.svg",
    description: "Hyperlocal food delivery connecting you with your favorite local restaurants in Madurai.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9952520699",
      contactType: "customer service",
      email: "support@tazty.in",
    },
    sameAs: [
      "https://instagram.com/tazty.in",
      "https://twitter.com/tazty_in",
      "https://facebook.com/tazty.in",
      "https://linkedin.com/company/tazty",
    ],
  }

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} ${openSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <SmoothScrollProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
