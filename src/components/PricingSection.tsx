"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  Globe,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PricingModelId } from "@/types/pricing";

interface PricingSectionProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

type PricingTab = "performance" | "net-rate";

export function PricingSection({ onOpenOnboarding }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<PricingTab>("performance");

  return (
    <section
      id="pricing"
      className="scroll-mt-20 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold text-[#DBFF26]">
            Simple, Transparent Pricing
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start for{" "}
            <span className="text-[#DBFF26] underline decoration-[#DBFF26] decoration-4 underline-offset-8">
              $0 Upfront
            </span>{" "}
            — Or Power Boost Your Brand.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/75">
            Pay nothing out-of-pocket until tours complete, or choose our
            one-time Power Boost to get a brand-new Stripe &amp; PayPal website
            plus expanded OTA distribution.
          </p>

          {/* Large, Readable Segmented Toggle */}
          <div className="mt-8 inline-flex flex-col sm:flex-row rounded-full border border-white/15 bg-white/[0.05] p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("performance")}
              className={`rounded-full px-7 py-3 text-base font-bold transition-all ${
                activeTab === "performance"
                  ? "bg-[#DBFF26] text-black shadow-md"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Pay-Per-Booking &amp; Power Boost
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("net-rate")}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-bold transition-all ${
                activeTab === "net-rate"
                  ? "bg-[#DBFF26] text-black shadow-md"
                  : "text-white/75 hover:text-white"
              }`}
            >
              <span>Net-Rate Wholesale (0% Fee)</span>
            </button>
          </div>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {activeTab === "performance" ? (
              <motion.div
                key="performance-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="space-y-10"
              >
                {/* 3 Core Tiers */}
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-stretch">
                  {/* TIER 1: Starter */}
                  <div className="card-3d rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Starter — OTA Sync
                      </h3>
                      <p className="mt-2 text-base text-white/70">
                        Get listed on major OTAs with zero setup cost.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $0
                        </span>
                        <span className="text-base text-white/55">/mo</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          4%
                        </span>
                        <span className="text-sm font-medium text-white/60">
                          per sale
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-6 text-base text-white/85">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>$0 Setup</strong> ($29 review fee waived)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Listed across fair-paying global OTAs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Instant WhatsApp, email &amp; calendar booking sync
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Easy 1-step cancellations ($0 fee)</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("starter")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
                    >
                      <span>Start with Starter</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* TIER 2: Pro (Most Popular) */}
                  <div className="card-3d-lime relative rounded-3xl p-8 flex flex-col justify-between">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DBFF26] px-5 py-1 text-sm font-extrabold uppercase tracking-wide text-black shadow-lg">
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </span>
                    </div>

                    <div>
                      <h3 className="pt-2 text-2xl font-extrabold text-white">
                        Pro — Full Autopilot
                      </h3>
                      <p className="mt-2 text-base text-white/80">
                        Hands-free WhatsApp &amp; email automation for every
                        guest.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $0
                        </span>
                        <span className="text-base text-white/55">/mo</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          7%
                        </span>
                        <span className="text-sm font-medium text-white/65">
                          per sale
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/15 pt-6 text-base text-white">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Everything in Starter</strong>, plus:
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Auto Guest WhatsApp &amp; Emails</strong>{" "}
                            (24h &amp; 2h reminders)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Automatic Google Maps pickup pins &amp; QR vouchers
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Automated 5-star review follow-ups &amp; driver
                            routing
                          </span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("pro")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-4 text-base font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
                    >
                      <span>Start Free with Pro</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* TIER 3: Scale */}
                  <div className="card-3d rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Scale — High Volume
                      </h3>
                      <p className="mt-2 text-base text-white/70">
                        Built for busy operators (15+ bookings/mo) keeping max
                        margin.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $39
                        </span>
                        <span className="text-base text-white/55">/mo</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          2.5%
                        </span>
                        <span className="text-sm font-medium text-white/60">
                          per sale
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-6 text-base text-white/85">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Everything in Pro</strong> included
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Low 2.5% fee per completed booking</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Custom branded WhatsApp &amp; email templates
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Dedicated account manager &amp; multi-currency</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("scale")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
                    >
                      <span>Choose Scale Plan</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* POWER BOOST ($999.99 USD One-Time + 2% Commission Per Sale) — NO Specific OTA Names */}
                <div className="card-3d-boost rounded-3xl p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26] px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-black">
                        <Rocket className="h-4 w-4" />
                        Power Boost — Turnkey Brand + Direct Checkout
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Full Website Redesign + Stripe &amp; PayPal + More OTA
                        Channels
                      </h3>

                      <p className="text-lg leading-relaxed text-white/80">
                        Want direct bookings on your own high-converting website{" "}
                        <strong>and</strong> maximum reach across global OTAs?
                        We redesign your website from scratch, integrate instant{" "}
                        <strong className="text-white">
                          Stripe &amp; PayPal
                        </strong>{" "}
                        payment links, and add your tours to even more OTA
                        channels.
                      </p>

                      <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 text-base font-medium text-white/90">
                        <div className="flex items-center gap-2.5">
                          <CreditCard className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>Stripe &amp; PayPal Direct Payment Links</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Globe className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>Added to More Global OTA Channels</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Check className="h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Complete Custom Website Redesign</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Check className="h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Full WhatsApp, Email &amp; Calendar Sync</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Price Box for Power Boost */}
                    <div className="lg:col-span-5 rounded-3xl border border-white/15 bg-black/75 p-7 sm:p-8 text-center lg:text-left">
                      <p className="text-sm font-bold uppercase tracking-wider text-[#DBFF26]">
                        One-Time Build + Lowest Override
                      </p>
                      <div className="mt-3 flex flex-wrap items-baseline justify-center lg:justify-start gap-2">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                          $999.99
                        </span>
                        <span className="text-base font-bold text-white/70">
                          USD one-time
                        </span>
                      </div>
                      <p className="mt-2 text-xl font-extrabold text-[#DBFF26]">
                        + 2% commission per sale
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        $0 monthly subscription • Direct Stripe &amp; PayPal
                        links included
                      </p>

                      <button
                        type="button"
                        onClick={() => onOpenOnboarding("power-boost")}
                        className="mt-6 group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-lg font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
                      >
                        <span>Launch Power Boost</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* NET-RATE GUARANTEE CARD */
              <motion.div
                key="net-rate-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d-lime mx-auto max-w-4xl rounded-3xl p-8 sm:p-12 text-white"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26] px-4 py-1 text-sm font-extrabold text-black">
                  <ShieldCheck className="h-4 w-4" />
                  $0 Setup • $0 Monthly • 0% Deducted From Your Net Rate
                </span>

                <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
                  Wholesale Net-Rate Guarantee
                </h3>

                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/85">
                  Tell us your exact net price per guest (for example,{" "}
                  <strong className="text-[#DBFF26]">$70</strong>). We handle
                  all OTA commissions, global distribution, and automated
                  WhatsApp &amp; email messaging on top of your rate—so you
                  receive{" "}
                  <strong className="text-white">
                    100% of your quoted net price
                  </strong>{" "}
                  on every completed tour.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenOnboarding("net-rate")}
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-8 py-4 text-lg font-extrabold text-black shadow-glow-lime transition hover:bg-black hover:text-[#DBFF26]"
                  >
                    <span>Send Your Net Tour Rates</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
