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
import {
  COUNTRY_CODES,
  PRICING_MODELS,
  PricingModelId,
} from "@/types/pricing";
import { Logo } from "./Logo";

interface OnboardingDrawerProps {
  isOpen: boolean;
  initialModel?: PricingModelId;
  onClose: () => void;
}

type TourBucket = "1-3" | "4-10" | "10+";

const TOUR_BUCKETS: { value: TourBucket; label: string }[] = [
  { value: "1-3", label: "1–3 Tours" },
  { value: "4-10", label: "4–10 Tours" },
  { value: "10+", label: "10+ Tours" },
];

export function OnboardingDrawer({
  isOpen,
  initialModel = "pro",
  onClose,
}: OnboardingDrawerProps) {
  const [agencyName, setAgencyName] = useState("");
  const [tripAdvisorUrl, setTripAdvisorUrl] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
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
    PRICING_MODELS.find((m) => m.id === preferredModel) ?? PRICING_MODELS[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="onboarding-drawer-title"
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
                  aria-label="Close drawer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <h2
                id="onboarding-drawer-title"
                className="mt-4 text-2xl sm:text-3xl font-extrabold text-white"
              >
                Get Started in 48 Hours
              </h2>
              <p className="mt-1 text-base text-white/70">
                Leave your details below—our team will reach out on WhatsApp &amp;
                email.
              </p>
            </div>

            {/* Form / Confirmation Body */}
            <div className="flex-1 overflow-y-auto px-7 py-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="agency-name"
                      className="block text-sm font-bold text-white/85"
                    >
                      Agency / Operator Name{" "}
                      <span className="text-[#DBFF26]">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                      <input
                        id="agency-name"
                        type="text"
                        required
                        placeholder="e.g., Sunset Boat & Adventure Tours"
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tripadvisor-url"
                      className="block text-sm font-bold text-white/85"
                    >
                      TripAdvisor or Current Website (Optional)
                    </label>
                    <div className="relative mt-2">
                      <Globe className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                      <input
                        id="tripadvisor-url"
                        type="text"
                        placeholder="tripadvisor.com/... or yoursite.com"
                        value={tripAdvisorUrl}
                        onChange={(e) => setTripAdvisorUrl(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp-number"
                      className="block text-sm font-bold text-white/85"
                    >
                      WhatsApp Number <span className="text-[#DBFF26]">*</span>
                    </label>
                    <div className="mt-2 flex gap-2.5">
                      <select
                        aria-label="Country code"
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
                          id="whatsapp-number"
                          type="tel"
                          required
                          placeholder="7700 900123"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          className="w-full rounded-2xl border border-white/15 bg-black py-3.5 pl-12 pr-4 text-base text-white placeholder:text-white/35 focus:border-[#DBFF26] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-white/85">
                      Number of Tours
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-3">
                      {TOUR_BUCKETS.map((bucket) => {
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
                      Select Package
                    </span>
                    <div className="mt-2 space-y-2.5">
                      {PRICING_MODELS.map((model) => {
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
                              {model.drawerLabel}
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
                      <span>Continue</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-white/60">
                      <ShieldCheck className="h-4 w-4 text-[#DBFF26]" />
                      Operated by Ata Travel Ltd. (UK)
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
                      Reference #{referenceCode}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-white">
                      We&apos;ve Got Your Request, {agencyName}!
                    </h3>
                    <p className="mt-2 text-base text-white/80">
                      Selected Plan:{" "}
                      <strong className="text-[#DBFF26]">
                        {selectedModelMeta.drawerLabel}
                      </strong>
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-black p-6 space-y-3 text-base text-white/80">
                    <p>
                      Our onboarding specialist will message{" "}
                      <strong className="text-white">
                        {countryCode} {whatsappNumber}
                      </strong>{" "}
                      within 2 hours to get your tours live across global OTAs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/905339230963?text=${encodeURIComponent(
                        `Hi Ata Travel team! Submitted request ${referenceCode} for ${agencyName} (${selectedModelMeta.shortLabel}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#DBFF26] px-6 py-4 text-base font-extrabold text-black hover:bg-[#c8eb1f]"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        handleReset();
                        onClose();
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-base font-bold text-white hover:border-white/50"
                    >
                      Done
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
