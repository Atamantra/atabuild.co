import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ata Travel Ltd. — List on Viator, GetYourGuide & Global OTAs for $0",
  description:
    "Publish your tours across Viator, GetYourGuide, Trip.com, Klook, Airbnb, Civitatis & more for $0 upfront, with automated WhatsApp & email guest messaging. Operated by Ata Travel Ltd. (UK).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-3d-stage min-h-screen font-sans text-white antialiased selection:bg-[#DBFF26] selection:text-black relative">
        {/* Global Tactile 3D Grain Overlay */}
        <div
          className="bg-noise-texture pointer-events-none fixed inset-0 z-30"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
