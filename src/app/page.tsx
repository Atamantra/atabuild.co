"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PricingSection } from "@/components/PricingSection";
import { PayoutCalculator } from "@/components/PayoutCalculator";
import { TripAdvisorConnectSection } from "@/components/TripAdvisorConnectSection";
import { OnboardingDrawer } from "@/components/OnboardingDrawer";
import { PartnerAgreementModal } from "@/components/PartnerAgreementModal";
import { Footer } from "@/components/Footer";
import { PricingModelId } from "@/types/pricing";

export default function HomePage() {
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
      {/* Minimal Header — Enlarged Official ATA Logo Only */}
      <Navbar />

      <main className="flex-1">
        {/* Entry + 7 Companies & 38+ Tours Proof + Brand-Sparking OTAs + 3D Catches */}
        <Hero onOpenOnboarding={handleOpenOnboarding} />

        {/* Automated Reservation, Google Calendar, Email & Easy Cancellation Engine */}
        <FeatureGrid />

        {/* Pricing Tiers + Flagship Power Boost ($999.99 + 2%) */}
        <PricingSection onOpenOnboarding={handleOpenOnboarding} />

        {/* Interactive Net Payout Calculator (Max 50 Bookings, Fixed 30% OTA Channel Fee) */}
        <PayoutCalculator onOpenOnboarding={handleOpenOnboarding} />

        {/* How to Connect Us to Your TripAdvisor Page (6-Step Permission Infographic + /guide link) */}
        <TripAdvisorConnectSection onOpenOnboarding={handleOpenOnboarding} />
      </main>

      {/* Footer — Ata Travel Ltd. (UK Company) */}
      <Footer
        onOpenOnboarding={handleOpenOnboarding}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Slide-Over Onboarding Drawer */}
      <OnboardingDrawer
        isOpen={onboardingOpen}
        initialModel={selectedModel}
        onClose={() => setOnboardingOpen(false)}
      />

      {/* Partner Agreement Modal */}
      <PartnerAgreementModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}
