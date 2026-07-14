import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ABMS Limited — Mining Services & General Trading, Zambia",
    template: "%s — ABMS Limited",
  },
  description:
    "African Brotherhood Mining Services & General Trading Limited delivers mining services, mining support, general trading and logistics solutions across Zambia. United in Strength. Driven by Excellence.",
  keywords: [
    "ABMS Limited",
    "mining services Zambia",
    "mining support Zambia",
    "general trading Zambia",
    "Lusaka mining company",
    "PPE supply Zambia",
    "earthmoving Zambia",
  ],
  icons: {
    icon: "/favicon.png",
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
        {/* Template webfonts -- swap for self-hosted versions later if you prefer */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Sterial template stylesheets -- paste the template's asset
            folders into /public (see README.md) and these will resolve */}
        <link rel="stylesheet" href="/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/flatpickr.min.css" />
        <link rel="stylesheet" href="/css/glightbox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {/* Mobile menu shell -- populated/toggled by js/navbar.js + js/custom.js */}
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        {children}

        <Footer />

        {/* Preloader */}
        <div id="overlayer"></div>
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        {/* Sterial template scripts -- paste js/ into /public/js (see README.md) */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/tiny-slider.js" strategy="afterInteractive" />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/navbar.js" strategy="afterInteractive" />
        <Script src="/js/counter.js" strategy="afterInteractive" />
        <Script src="/js/rellax.js" strategy="afterInteractive" />
        <Script src="/js/flatpickr.js" strategy="afterInteractive" />
        <Script src="/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
