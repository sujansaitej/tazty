import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  category: "food",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
