import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./interactions.css";

import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";

const siteUrl = "https://abmslimited.com";

export const metadata: Metadata = {
  title: "ABMS Limited | Mining Services & General Trading Zambia",

  description:
    "African Brotherhood Mining Services & General Trading Limited provides mining services, mining support, general trading, logistics and industrial solutions across Zambia.",

  alternates: {
    canonical: "https://abmslimited.com",
  },

  openGraph: {
    type: "website",
    url: "https://abmslimited.com",

    title:
      "ABMS Limited | Mining Services & General Trading Zambia",

    description:
      "Mining services, mining support, general trading, logistics and industrial solutions across Zambia.",

    images: [
      {
        url: "https://abmslimited.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ABMS Limited — Mining Services & General Trading Zambia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ABMS Limited | Mining Services & General Trading Zambia",

    description:
      "Mining services, mining support, general trading, logistics and industrial solutions across Zambia.",

    images: ["https://abmslimited.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/flatpickr.min.css" />
        <link rel="stylesheet" href="/css/glightbox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body>
        <ScrollProgress />

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>

          <div className="site-mobile-menu-body"></div>
        </div>

        <Loader />

        <Script
  id="abms-organization-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
>
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://abmslimited.com/#organization",

    name:
      "African Brotherhood Mining Services & General Trading Limited",

    alternateName: "ABMS Limited",

    url: "https://abmslimited.com",

    logo: {
      "@type": "ImageObject",
      url: "https://abmslimited.com/images/logo.png",
    },

    description:
      "African Brotherhood Mining Services & General Trading Limited provides mining services, mining support, general trading, logistics and industrial solutions across Zambia.",

    areaServed: {
      "@type": "Country",
      name: "Zambia",
    },

    sameAs: [
      // Add official social media URLs here
      // "https://www.linkedin.com/company/...",
      // "https://www.facebook.com/...",
    ],
  })}
</Script>

        {children}

        <Footer />

        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/tiny-slider.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/aos.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/navbar.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/counter.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/rellax.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/flatpickr.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/glightbox.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/js/custom.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}