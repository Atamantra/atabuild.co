import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ata Travel Ltd. — Turlarınızı Viator, GetYourGuide ve Global OTA Kanallarına $0 Ön Ödemeyle Ekleyin",
  description:
    "Turlarınızı $0 kurulum ücretiyle Viator, GetYourGuide, Trip.com, Klook, Airbnb, Civitatis ve daha fazlasında satışa açın; otomatik WhatsApp, e-posta ve Google Takvim sistemiyle yönetin.",
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
