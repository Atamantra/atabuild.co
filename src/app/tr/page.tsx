"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroTr } from "@/components/tr/HeroTr";
import { FeatureGridTr } from "@/components/tr/FeatureGridTr";
import { PricingSectionTr } from "@/components/tr/PricingSectionTr";
import { PayoutCalculatorTr } from "@/components/tr/PayoutCalculatorTr";
import { TripAdvisorConnectSectionTr } from "@/components/tr/TripAdvisorConnectSectionTr";
import { OnboardingDrawerTr } from "@/components/tr/OnboardingDrawerTr";
import { PartnerAgreementModalTr } from "@/components/tr/PartnerAgreementModalTr";
import { FooterTr } from "@/components/tr/FooterTr";
import { PricingModelId } from "@/types/pricing";

export default function TurkishHomePage() {
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<PricingModelId>("pro");
  const [termsOpen, setTermsOpen] = useState(false);

  const handleOpenOnboarding = (preferredModel?: PricingModelId) => {
    if (preferredModel) {
      setSelectedModel(preferredModel);
    }
    setOnboardingOpen(true);
  };

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      {/* Üst Bar — Büyütülmüş ATA Logosu + EN/TR Dil Geçişi */}
      <Navbar />

      <main className="flex-1">
        {/* Giriş + 7 Şirket & 38+ Tur + Marka Renkli OTA'lar + 3D Avantaj Kartları */}
        <HeroTr onOpenOnboarding={handleOpenOnboarding} />

        {/* Otomatik Rezervasyon, Google Takvim, E-Posta & Kolay İptal Sistemi */}
        <FeatureGridTr />

        {/* Paketler + Power Boost ($999.99 + %2) */}
        <PricingSectionTr onOpenOnboarding={handleOpenOnboarding} />

        {/* Net Kazanç Hesaplayıcı (Maks 50 Rezervasyon, Sabit %30 OTA Komisyonu) */}
        <PayoutCalculatorTr onOpenOnboarding={handleOpenOnboarding} />

        {/* TripAdvisor Sayfanızı Bize Nasıl Bağlarsınız? (6 Adımlı İnfografik) */}
        <TripAdvisorConnectSectionTr onOpenOnboarding={handleOpenOnboarding} />
      </main>

      {/* Alt Bilgi — Ata Travel Ltd. (Birleşik Krallık Şirketi) */}
      <FooterTr
        onOpenOnboarding={handleOpenOnboarding}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Başvuru Çekmecesi */}
      <OnboardingDrawerTr
        isOpen={onboardingOpen}
        initialModel={selectedModel}
        onClose={() => setOnboardingOpen(false)}
      />

      {/* Sözleşme Özeti Modalı */}
      <PartnerAgreementModalTr
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}
