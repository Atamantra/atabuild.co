"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { PricingModelId } from "@/types/pricing";

interface PayoutCalculatorTrProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

const OTA_CHANNEL_FEE_RATE = 0.3; // Sabit %30 OTA Kanal Komisyonu

const MODEL_OPTIONS_TR: {
  id: PricingModelId;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "pro",
    title: "Pro — %7",
    subtitle: "$0/ay • Tam Otomasyon",
  },
  {
    id: "power-boost",
    title: "Power Boost — %2",
    subtitle: "$999.99 tek seferlik + Site",
  },
  {
    id: "starter",
    title: "Starter — %4",
    subtitle: "$0/ay • OTA Senkron",
  },
  {
    id: "scale",
    title: "Scale — $39 + %2.5",
    subtitle: "Ayda 15+ satış için",
  },
];

function formatCurrency(amount: number, decimals = 2): string {
  const abs = Math.abs(amount);
  const formatted = abs.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return amount < 0 ? `-$${formatted}` : `$${formatted}`;
}

export function PayoutCalculatorTr({
  onOpenOnboarding,
}: PayoutCalculatorTrProps) {
  const [retailPrice, setRetailPrice] = useState<number>(120);
  const [monthlyBookings, setMonthlyBookings] = useState<number>(20);
  const [tourCount, setTourCount] = useState<number>(5);
  const [selectedModel, setSelectedModel] = useState<PricingModelId>("pro");

  const metrics = useMemo(() => {
    const grossMonthlyRetail = retailPrice * monthlyBookings;
    const otaFeePerBooking = retailPrice * OTA_CHANNEL_FEE_RATE;
    const totalMonthlyOtaFee = otaFeePerBooking * monthlyBookings;
    const setupFeesSaved = tourCount * 29;

    let perBookingSoftwareFee = 0;
    let totalMonthlySoftwareFee = 0;
    let netPayoutPerBooking = 0;
    let totalMonthlyNetRevenue = 0;
    let feeNote = "";

    if (selectedModel === "starter") {
      perBookingSoftwareFee = Math.max(3, retailPrice * 0.04);
      totalMonthlySoftwareFee = perBookingSoftwareFee * monthlyBookings;
      netPayoutPerBooking =
        retailPrice - otaFeePerBooking - perBookingSoftwareFee;
      totalMonthlyNetRevenue = netPayoutPerBooking * monthlyBookings;
      feeNote = `Satış başına %4 ($0 aylık aidat)`;
    } else if (selectedModel === "pro") {
      perBookingSoftwareFee = Math.max(3, retailPrice * 0.07);
      totalMonthlySoftwareFee = perBookingSoftwareFee * monthlyBookings;
      netPayoutPerBooking =
        retailPrice - otaFeePerBooking - perBookingSoftwareFee;
      totalMonthlyNetRevenue = netPayoutPerBooking * monthlyBookings;
      feeNote = `Satış başına %7 ($0 aylık aidat)`;
    } else if (selectedModel === "power-boost") {
      perBookingSoftwareFee = retailPrice * 0.02;
      totalMonthlySoftwareFee = perBookingSoftwareFee * monthlyBookings;
      netPayoutPerBooking =
        retailPrice - otaFeePerBooking - perBookingSoftwareFee;
      totalMonthlyNetRevenue = netPayoutPerBooking * monthlyBookings;
      feeNote = `Sadece %2 satış başı ($999.99 tek seferlik web sitesi + OTA kurulumu)`;
    } else {
      perBookingSoftwareFee = retailPrice * 0.025;
      totalMonthlySoftwareFee = 39 + perBookingSoftwareFee * monthlyBookings;
      const effectiveSoftwarePerBooking =
        totalMonthlySoftwareFee / monthlyBookings;
      netPayoutPerBooking =
        retailPrice - otaFeePerBooking - effectiveSoftwarePerBooking;
      totalMonthlyNetRevenue =
        grossMonthlyRetail - totalMonthlyOtaFee - totalMonthlySoftwareFee;
      feeNote = `$39/ay sabit + satış başına %2.5`;
    }

    return {
      grossMonthlyRetail,
      totalMonthlyOtaFee,
      setupFeesSaved,
      totalMonthlySoftwareFee,
      netPayoutPerBooking,
      totalMonthlyNetRevenue,
      annualNetRevenue: totalMonthlyNetRevenue * 12,
      feeNote,
    };
  }, [retailPrice, monthlyBookings, tourCount, selectedModel]);

  const retailProgress = ((retailPrice - 20) / (500 - 20)) * 100;
  const bookingsProgress = ((monthlyBookings - 1) / (50 - 1)) * 100;

  return (
    <section
      id="calculator"
      className="scroll-mt-20 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold text-[#DBFF26]">
            Net Kazanç Hesaplayıcı
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Cebinize Kalan Net Tutarı Görün.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/75">
            Tur satış fiyatınızı ve aylık rezervasyon adedinizi (maks. 50)
            kaydırarak standart %30 OTA kanal kesintisi sonrası net kazancınızı
            hesaplayın.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT 3D CONTROLS */}
          <div className="card-3d rounded-3xl p-7 sm:p-9 lg:col-span-7 space-y-8">
            {/* 1. Tur Fiyatı */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="tr-retail-price-slider"
                  className="text-lg font-bold text-white"
                >
                  Tur Satış Fiyatı
                </label>
                <span className="rounded-xl bg-black/80 border border-white/15 px-4 py-1.5 font-mono text-xl font-extrabold text-[#DBFF26] tabular-nums">
                  ${retailPrice}
                </span>
              </div>

              <div className="mt-4">
                <input
                  id="tr-retail-price-slider"
                  type="range"
                  min={20}
                  max={500}
                  step={5}
                  value={retailPrice}
                  onChange={(e) => setRetailPrice(Number(e.target.value))}
                  className="ata-slider"
                  style={{
                    background: `linear-gradient(to right, #DBFF26 0%, #DBFF26 ${retailProgress}%, rgba(255,255,255,0.16) ${retailProgress}%, rgba(255,255,255,0.16) 100%)`,
                  }}
                />
                <div className="mt-2 flex justify-between text-sm font-medium text-white/50">
                  <span>$20</span>
                  <span>$250</span>
                  <span>$500</span>
                </div>
              </div>
            </div>

            {/* 2. Aylık Rezervasyon (Maks 50) */}
            <div className="border-t border-white/10 pt-7">
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="tr-monthly-bookings-slider"
                  className="text-lg font-bold text-white"
                >
                  Aylık Rezervasyon Adedi
                </label>
                <span className="rounded-xl bg-black/80 border border-white/15 px-4 py-1.5 font-mono text-xl font-extrabold text-[#DBFF26] tabular-nums">
                  {monthlyBookings} / ay
                </span>
              </div>

              <div className="mt-4">
                <input
                  id="tr-monthly-bookings-slider"
                  type="range"
                  min={1}
                  max={50}
                  step={1}
                  value={monthlyBookings}
                  onChange={(e) => setMonthlyBookings(Number(e.target.value))}
                  className="ata-slider"
                  style={{
                    background: `linear-gradient(to right, #DBFF26 0%, #DBFF26 ${bookingsProgress}%, rgba(255,255,255,0.16) ${bookingsProgress}%, rgba(255,255,255,0.16) 100%)`,
                  }}
                />
                <div className="mt-2 flex justify-between text-sm font-medium text-white/50">
                  <span>1</span>
                  <span>25</span>
                  <span>50 rezervasyon</span>
                </div>
              </div>
            </div>

            {/* 3. Paket Seçimi */}
            <div className="border-t border-white/10 pt-7">
              <span className="block text-lg font-bold text-white">
                Paket Seçin
              </span>
              <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {MODEL_OPTIONS_TR.map((option) => {
                  const active = selectedModel === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedModel(option.id)}
                      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                        active
                          ? "border-[#DBFF26] bg-[#DBFF26]/15 shadow-md"
                          : "border-white/12 bg-black/50 hover:border-white/30"
                      }`}
                    >
                      <div>
                        <p className="text-base font-extrabold text-white">
                          {option.title}
                        </p>
                        <p className="mt-0.5 text-sm text-white/65">
                          {option.subtitle}
                        </p>
                      </div>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#DBFF26] bg-[#DBFF26]"
                            : "border-white/35"
                        }`}
                      >
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-black" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Tur Sayısı */}
            <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="block text-base font-bold text-white">
                  Eklenecek Tur Sayısı
                </span>
                <span className="text-sm text-white/60">
                  Tur başına $29 inceleme ücreti cebinizde kalır
                </span>
              </div>
              <div className="flex items-center justify-between gap-5 rounded-full border border-white/15 bg-black px-4 py-2 sm:w-56">
                <button
                  type="button"
                  onClick={() => setTourCount((c) => Math.max(1, c - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#DBFF26] hover:text-black transition"
                  aria-label="Tur sayısını azalt"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-base font-extrabold text-white tabular-nums">
                  {tourCount} Tur
                </span>
                <button
                  type="button"
                  onClick={() => setTourCount((c) => Math.min(30, c + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#DBFF26] hover:text-black transition"
                  aria-label="Tur sayısını artır"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT 3D PAYOUT DISPLAY */}
          <div className="card-3d-lime rounded-3xl p-7 sm:p-9 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 rounded-2xl bg-[#DBFF26]/15 border border-[#DBFF26]/40 px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldCheck className="h-5 w-5 text-[#DBFF26]" />
                  Cebinizde Kalan Kurulum
                </span>
                <span className="font-mono text-base font-extrabold text-[#DBFF26] tabular-nums">
                  ${metrics.setupFeesSaved} Tasarruf
                </span>
              </div>

              <div className="mt-7 border-b border-white/15 pb-7">
                <p className="text-base font-semibold text-white/70">
                  Aylık Net Acenta Kazancınız
                </p>
                <motion.div
                  key={`${metrics.totalMonthlyNetRevenue}-${selectedModel}`}
                  initial={{ opacity: 0.75, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16 }}
                  className="mt-2 flex items-baseline gap-2"
                >
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-white tabular-nums">
                    {formatCurrency(metrics.totalMonthlyNetRevenue, 0)}
                  </span>
                  <span className="text-lg font-medium text-white/60">/ ay</span>
                </motion.div>

                <p className="mt-2 flex items-center gap-2 text-base font-bold text-[#DBFF26] tabular-nums">
                  <TrendingUp className="h-5 w-5" />
                  <span>
                    Yıllık tahmini{" "}
                    {formatCurrency(metrics.annualNetRevenue, 0)} net gelir
                  </span>
                </p>
              </div>

              <div className="mt-6 space-y-4 text-base">
                <div className="flex items-center justify-between rounded-2xl bg-black/60 border border-white/12 px-5 py-4">
                  <span className="font-semibold text-white/80">
                    Rezervasyon Başına Net
                  </span>
                  <span className="font-mono text-2xl font-extrabold text-[#DBFF26] tabular-nums">
                    {formatCurrency(metrics.netPayoutPerBooking)}
                  </span>
                </div>

                <div className="rounded-2xl bg-black/50 border border-white/10 p-5 space-y-2.5 text-sm sm:text-base">
                  <div className="flex justify-between text-white/75">
                    <span>Brüt Satış Hacmi</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {formatCurrency(metrics.grossMonthlyRetail, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/65">
                    <span>OTA Kanal Kesintisi (%30)</span>
                    <span className="font-mono tabular-nums">
                      -{formatCurrency(metrics.totalMonthlyOtaFee, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2.5 text-[#DBFF26] font-bold">
                    <span>Yazılım &amp; Otomasyon Payı</span>
                    <span className="font-mono tabular-nums">
                      -{formatCurrency(metrics.totalMonthlySoftwareFee)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/55 pt-1">
                    {metrics.feeNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenOnboarding(selectedModel)}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-lg font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
              >
                <span>Bu Paketle Başla</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/65">
                <CheckCircle2 className="h-4 w-4 text-[#DBFF26]" />
                İptal edilen rezervasyonlarda $0 ücret
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
