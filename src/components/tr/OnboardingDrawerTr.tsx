"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  MessageSquare,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { COUNTRY_CODES, PricingModelId } from "@/types/pricing";
import { Logo } from "../Logo";

interface OnboardingDrawerTrProps {
  isOpen: boolean;
  initialModel?: PricingModelId;
  onClose: () => void;
}

type TourBucket = "1-3" | "4-10" | "10+";

const TOUR_BUCKETS_TR: { value: TourBucket; label: string }[] = [
  { value: "1-3", label: "1–3 Tur" },
  { value: "4-10", label: "4–10 Tur" },
  { value: "10+", label: "10+ Tur" },
];

const PRICING_MODELS_TR: {
  id: PricingModelId;
  label: string;
  badge?: string;
}[] = [
  {
    id: "pro",
    label: "Pro — $0 Kurulum + %7 Tam Otomasyon",
    badge: "En Popüler",
  },
  {
    id: "power-boost",
    label: "Power Boost — $999.99 Web Sitesi + %2",
    badge: "Site + Stripe/PayPal",
  },
  {
    id: "starter",
    label: "Starter — $0 Kurulum + %4 OTA Senkron",
  },
  {
    id: "scale",
    label: "Scale — $39/ay + %2.5 Satış Başına",
  },
  {
    id: "net-rate",
    label: "Net Fiyat Garantisi (%100 Net Ödeme)",
  },
];

export function OnboardingDrawerTr({
  isOpen,
  initialModel = "pro",
  onClose,
}: OnboardingDrawerTrProps) {
  const [agencyName, setAgencyName] = useState("");
  const [tripAdvisorUrl, setTripAdvisorUrl] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [tourBucket, setTourBucket] = useState<TourBucket>("4-10");
  const [preferredModel, setPreferredModel] =
    useState<PricingModelId>(initialModel);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("ATA-4829");

  useEffect(() => {
    if (initialModel) {
      setPreferredModel(initialModel);
    }
  }, [initialModel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agencyName.trim() || !whatsappNumber.trim()) return;
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setReferenceCode(`ATA-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAgencyName("");
    setTripAdvisorUrl("");
    setWhatsappNumber("");
  };

  const selectedModelMeta =
    PRICING_MODELS_TR.find((m) => m.id === preferredModel) ??
    PRICING_MODELS_TR[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="onboarding-drawer-tr-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col border-l border-white/15 bg-[#0A0C10] text-white shadow-2xl"
          >
            {/* Header */}
            <div className="border-b border-white/10 bg-black/70 px-7 py-6">
              <div className="flex items-center justify-between">
                <Logo size="md" />
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                  aria-label="Paneli kapat"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <h2
                id="onboarding-drawer-tr-title"
                className="mt-4 text-2xl sm:text-3xl font-extrabold text-white"
              >
                48 Saatte Turlarınızı Satışa Açın
              </h2>
              <p className="mt-1 text-base text-white/70">
                Bilgilerinizi bırakın; ekibimiz WhatsApp ve e-posta üzerinden
                sizinle hemen iletişime geçsin.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-7 py-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="tr-agency-name"
                      className="block text-sm font-bold text-white/85"
                    >
                      Acenta / İşletme Adı{" "}
                      <span className="text-[#DBFF26]">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                      <input
                        id="tr-agency-name"
                        type="text"
                        required
                        placeholder="Örn: Fethiye Tekne & Doğa Turları"
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tr-tripadvisor-url"
                      className="block text-sm font-bold text-white/85"
                    >
                      TripAdvisor veya Mevcut Web Siteniz (İsteğe Bağlı)
                    </label>
                    <div className="relative mt-2">
                      <Globe className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                      <input
                        id="tr-tripadvisor-url"
                        type="text"
                        placeholder="tripadvisor.com.tr/... veya siteniz.com"
                        value={tripAdvisorUrl}
                        onChange={(e) => setTripAdvisorUrl(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tr-whatsapp-number"
                      className="block text-sm font-bold text-white/85"
                    >
                      WhatsApp Numaranız{" "}
                      <span className="text-[#DBFF26]">*</span>
                    </label>
                    <div className="mt-2 flex gap-2.5">
                      <select
                        aria-label="Ülke kodu"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-40 shrink-0 rounded-2xl border border-white/15 bg-black px-3 py-3.5 text-base font-medium text-white focus:border-[#DBFF26] focus:outline-none"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option
                            key={c.code}
                            value={c.code}
                            className="bg-black text-white"
                          >
                            {c.flag} {c.code} ({c.country})
                          </option>
                        ))}
                      </select>

                      <div className="relative flex-1">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                        <input
                          id="tr-whatsapp-number"
                          type="tel"
                          required
                          placeholder="532 123 45 67"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-white/85">
                      Tur Sayınız
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-3">
                      {TOUR_BUCKETS_TR.map((bucket) => {
                        const active = tourBucket === bucket.value;
                        return (
                          <button
                            key={bucket.value}
                            type="button"
                            onClick={() => setTourBucket(bucket.value)}
                            className={`rounded-2xl border py-3 px-3 text-center text-base font-bold transition ${
                              active
                                ? "border-[#DBFF26] bg-[#DBFF26]/15 text-[#DBFF26]"
                                : "border-white/15 bg-black text-white/80 hover:border-white/35"
                            }`}
                          >
                            {bucket.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-white/85">
                      Paket Seçimi
                    </span>
                    <div className="mt-2 space-y-2.5">
                      {PRICING_MODELS_TR.map((model) => {
                        const active = preferredModel === model.id;
                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => setPreferredModel(model.id)}
                            className={`flex w-full items-center justify-between gap-2 rounded-2xl border px-4 py-3.5 text-left transition ${
                              active
                                ? "border-[#DBFF26] bg-[#DBFF26]/15"
                                : "border-white/15 bg-black hover:border-white/35"
                            }`}
                          >
                            <span className="text-base font-bold text-white">
                              {model.label}
                            </span>

                            {model.badge && (
                              <span className="shrink-0 rounded-full bg-[#DBFF26] px-2.5 py-0.5 text-xs font-extrabold text-black">
                                {model.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-lg font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
                    >
                      <span>Başvuruyu Gönder</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-3 text-center text-xs sm:text-sm text-white/60 leading-relaxed">
                      Başvurarak{" "}
                      <a
                        href="/tr/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#DBFF26] underline underline-offset-2"
                      >
                        Şartlar ve Koşullar
                      </a>{" "}
                      ile{" "}
                      <a
                        href="/tr/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#DBFF26] underline underline-offset-2"
                      >
                        Gizlilik Politikasını
                      </a>{" "}
                      kabul etmiş olursunuz • Ata Travel Ltd. (UK)
                    </p>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="py-4 space-y-6"
                >
                  <div className="rounded-3xl border border-[#DBFF26]/40 bg-[#DBFF26]/10 p-7 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DBFF26] text-black">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>

                    <p className="mt-3 font-mono text-sm font-bold text-[#DBFF26]">
                      Referans #{referenceCode}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-white">
                      Talebiniz Alındı, {agencyName}!
                    </h3>
                    <p className="mt-2 text-base text-white/80">
                      Seçilen Paket:{" "}
                      <strong className="text-[#DBFF26]">
                        {selectedModelMeta.label}
                      </strong>
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-black p-6 space-y-3 text-base text-white/80">
                    <p>
                      Entegrasyon uzmanımız 2 saat içinde{" "}
                      <strong className="text-white">
                        {countryCode} {whatsappNumber}
                      </strong>{" "}
                      numaranıza WhatsApp üzerinden ulaşarak kurulumunuzu
                      başlatacaktır.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/905339230963?text=${encodeURIComponent(
                        `Merhaba Ata Travel ekibi! ${agencyName} için ${referenceCode} referans koduyla başvuru oluşturdum.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#DBFF26] px-6 py-4 text-base font-extrabold text-black hover:bg-[#c8eb1f]"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Hemen WhatsApp&apos;tan Yazın</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        handleReset();
                        onClose();
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-base font-bold text-white hover:border-white/50"
                    >
                      Tamam
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
