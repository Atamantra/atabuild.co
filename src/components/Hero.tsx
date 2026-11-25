"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calculator,
  Compass,
  Globe2,
  MailCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { PricingModelId } from "@/types/pricing";

interface HeroProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

const OTA_PARTNERS = [
  { name: "Viator", src: "/partners/viator-logo.svg", width: 108, height: 32 },
  {
    name: "GetYourGuide",
    src: "/partners/getyourguide-logo.png",
    width: 84,
    height: 44,
  },
  {
    name: "Trip.com",
    src: "/partners/tripcom-logo.png",
    width: 118,
    height: 30,
  },
  { name: "Klook", src: "/partners/klook-logo.png", width: 108, height: 32 },
  { name: "Airbnb", src: "/partners/airbnb-logo.png", width: 106, height: 34 },
  { name: "Manawa", src: "/partners/manawa-logo.png", width: 122, height: 30 },
  {
    name: "Civitatis",
    src: "/partners/civitatis-logo.png",
    width: 114,
    height: 34,
  },
  {
    name: "Tripster",
    src: "/partners/tripster-logo.png",
    width: 116,
    height: 36,
  },
];

const QUICK_CATCHES = [
  {
    icon: Wallet,
    highlight: "$0 Upfront",
    title: "Zero Setup Fees",
    text: "We cover Viator's $29/tour submission fee. You pay $0 out-of-pocket and only split completed sales.",
  },
  {
    icon: Globe2,
    highlight: "Every Fair OTA",
    title: "Global Distribution",
    text: "We add your tours to every single OTA channel that pays fairly—maximizing bookings all season.",
  },
  {
    icon: MailCheck,
    highlight: "WhatsApp + Email",
    title: "Zero Manual Booking Entry",
    text: "Reservations sync straight to your calendar with automated WhatsApp & email tickets—plus 1-click cancellations.",
  },
];

export function Hero({ onOpenOnboarding }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-4 pb-20 sm:pt-8 sm:pb-28">
      {/* 3D Perspective Grid Backdrop */}
      <div
        className="bg-3d-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Shorter, Stronger, High-Impact Hero Intro */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Live Track Record Pill: 7 Companies + 38+ Tours */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#DBFF26]/35 bg-[#DBFF26]/10 px-5 py-2 text-sm sm:text-base font-bold text-white shadow-lg"
          >
            <span className="inline-flex items-center gap-1.5 text-[#DBFF26]">
              <Building2 className="h-4 w-4" />7 Companies Listed
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-white">
              <Compass className="h-4 w-4 text-[#DBFF26]" />
              38+ Active Tours Live
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.15rem] lg:leading-[1.08]"
          >
            Put Your Tours on{" "}
            <span className="viator-spark inline-flex items-baseline gap-1">
              Viator
              <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-[#00D68F] inline shrink-0" />
            </span>
            ,{" "}
            <span className="gyg-spark inline-flex items-baseline gap-1">
              GetYourGuide
              <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-[#FF5533] inline shrink-0" />
            </span>{" "}
            &amp; Every Fair-Paying OTA for{" "}
            <span className="text-[#DBFF26] underline decoration-[#DBFF26] decoration-4 underline-offset-8">
              $0
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mx-auto mt-6 max-w-3xl text-lg sm:text-2xl font-medium leading-relaxed text-white/80"
          >
            We publish your tours to every global OTA that pays fairly—at zero
            upfront cost—and handle reservations automatically with{" "}
            <strong className="text-white">
              instant WhatsApp &amp; email
            </strong>{" "}
            confirmations, calendar sync, and pickup pins.
          </motion.p>

          {/* Dual High-Contrast 3D CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => onOpenOnboarding("pro")}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-8 py-4 text-lg font-extrabold text-black shadow-glow-lime transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-[#DBFF26]"
            >
              <span>Start Free — $0 Setup</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#tripadvisor-connect"
              className="card-3d inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-8 py-4 text-lg font-bold text-white hover:text-[#DBFF26]"
            >
              <span>How TripAdvisor Connect Works</span>
            </a>

            <a
              href="#calculator"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-3 text-base font-bold text-white/75 hover:text-[#DBFF26] transition"
            >
              <Calculator className="h-5 w-5 text-[#DBFF26]" />
              <span>Payout Calculator</span>
            </a>
          </motion.div>
        </div>

        {/* Live Proof Stats Bar: 7 Companies Listed + 38+ Tours + $0 Setup */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.18 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <div className="card-3d rounded-2xl px-6 py-5 text-center">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#DBFF26] tabular-nums">
              7
            </p>
            <p className="mt-1 text-base sm:text-lg font-bold text-white">
              Partner Companies Listed
            </p>
          </div>
          <div className="card-3d rounded-2xl px-6 py-5 text-center">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#DBFF26] tabular-nums">
              38+
            </p>
            <p className="mt-1 text-base sm:text-lg font-bold text-white">
              Active Tours Selling Online
            </p>
          </div>
          <div className="card-3d rounded-2xl px-6 py-5 text-center">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#00D68F] tabular-nums">
              $0
            </p>
            <p className="mt-1 text-base sm:text-lg font-bold text-white">
              Upfront Listing &amp; Setup Cost
            </p>
          </div>
        </motion.div>

        {/* Immediate Attention-Grabbing 3D Catches Right Up Front */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {QUICK_CATCHES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBFF26]/15 text-[#DBFF26] border border-[#DBFF26]/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#DBFF26] px-3.5 py-1 text-sm font-extrabold text-black">
                      {item.highlight}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 text-base sm:text-lg leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Global OTA Showcase — Trip.com, Klook, Airbnb, Manawa, Civitatis, Tripster, Viator & GetYourGuide */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {OTA_PARTNERS.map((ota) => (
              <div
                key={ota.name}
                className="flex h-20 items-center justify-center rounded-2xl bg-white/95 px-4 py-3 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.85),inset_0_2px_0_#ffffff] transition-transform duration-200 hover:-translate-y-1"
              >
                <Image
                  src={ota.src}
                  alt={ota.name}
                  width={ota.width}
                  height={ota.height}
                  unoptimized={ota.src.endsWith(".svg")}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 text-base font-bold text-[#DBFF26] underline decoration-[#DBFF26]/60 underline-offset-4 hover:decoration-[#DBFF26]"
            >
              <span>View Full Step-by-Step Visual Portfolio Infographics →</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
