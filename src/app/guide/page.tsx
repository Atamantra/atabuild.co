"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarCheck2,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  Layers,
  ListChecks,
  MapPin,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  UserPlus,
} from "lucide-react";
import { Logo } from "@/components/Logo";

const INVITE_EMAIL = "info@atatravels.com";

const INFOGRAPHIC_TABS = [
  {
    id: 0,
    tag: "Page 01",
    title: "TripAdvisor Permission Guide",
  },
  {
    id: 1,
    tag: "Page 02",
    title: "$0 Free Product Submission",
  },
  {
    id: 2,
    tag: "Page 03",
    title: "8-Point Tour Setup Checklist",
  },
  {
    id: 3,
    tag: "Page 04",
    title: "Automation, Calendar & Payments",
  },
];

const TOUR_QUESTIONS = [
  {
    icon: FileText,
    title: "1. What Is Your Product About?",
    detail: "Tell us the story and core experience of your tour in plain words.",
  },
  {
    icon: Camera,
    title: "2. Add 6+ High-Quality Photos",
    detail:
      "Bright action shots of happy guests, boats, or scenery convert 3x higher.",
  },
  {
    icon: Truck,
    title: "3. Do You Offer Pickup?",
    detail:
      "Yes or meeting point? Let us know how long before departure you pick up.",
  },
  {
    icon: MapPin,
    title: "4. Location & Route",
    detail:
      "Explain where travelers meet or visit and what they will experience.",
  },
  {
    icon: DollarSign,
    title: "5. Schedules & Pricing",
    detail: "Daily departure start times, seasonal dates, and adult/child rates.",
  },
  {
    icon: Clock,
    title: "6. How Long Is the Activity?",
    detail: "Total duration from pickup or departure to drop-off.",
  },
  {
    icon: ListChecks,
    title: "7. Inclusions & Exclusions",
    detail:
      "What is included (lunch, gear, transfer) and what is sold as an extra?",
  },
  {
    icon: HelpCircle,
    title: "8. Unique Highlights & Guest Info",
    detail:
      "What makes your tour special, plus anything guests should bring or know.",
  },
];

export default function GuideInfographicsPage() {
  const [activePage, setActivePage] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(INVITE_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col pb-20">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050608]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Back to Home">
            <Logo size="md" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-black/70 p-1">
              <span className="rounded-full bg-[#DBFF26] px-3 py-1 text-xs sm:text-sm font-extrabold text-black">
                EN
              </span>
              <Link
                href="/tr/guide"
                className="rounded-full px-3 py-1 text-xs sm:text-sm font-extrabold text-white/65 hover:text-white transition"
              >
                TR
              </Link>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm sm:text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Main Page</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 pt-10 sm:px-8 sm:pt-14">
        {/* Title & Infographic Deck Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#DBFF26]">
              Ata Travel Ltd. • Partner Portfolio Infographics
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Visual Onboarding &amp; TripAdvisor Guide
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="self-start rounded-full border border-[#DBFF26]/40 bg-[#DBFF26]/10 px-5 py-2.5 text-sm font-extrabold text-[#DBFF26] transition hover:bg-[#DBFF26] hover:text-black"
          >
            {showAll ? "Switch to Slide Deck View" : "View All 4 Pages Stacked"}
          </button>
        </div>

        {/* Page Selector Pills */}
        {!showAll && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INFOGRAPHIC_TABS.map((tab) => {
              const active = activePage === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActivePage(tab.id)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? "border-[#DBFF26] bg-[#DBFF26] text-black shadow-glow-lime"
                      : "card-3d text-white hover:border-[#DBFF26]/50"
                  }`}
                >
                  <p
                    className={`text-xs font-extrabold uppercase tracking-wider ${
                      active ? "text-black/70" : "text-[#DBFF26]"
                    }`}
                  >
                    {tab.tag}
                  </p>
                  <p className="mt-1 text-base font-extrabold">{tab.title}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* Infographic Pages Container */}
        <div className="mt-10 space-y-12">
          <AnimatePresence mode="wait">
            {/* PAGE 1: HOW TO GIVE US TRIPADVISOR CONNECTION */}
            {(showAll || activePage === 0) && (
              <motion.section
                key="infographic-page-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[#00D68F]">
                      Infographic 01 • How To Give Us Connection
                    </span>
                    <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                      Connect Your TripAdvisor Page in 6 Simple Clicks
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#00D68F]/15 border border-[#00D68F]/40 px-4 py-1.5 text-sm font-extrabold text-[#00D68F]">
                    Only Permission Invite Needed
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      num: "1",
                      title: "Login To Your Account",
                      desc: "Sign in to TripAdvisor and click your profile icon at the top-right corner.",
                    },
                    {
                      num: "2",
                      title: 'Click On "My Business"',
                      desc: 'Select "My business" from your top-right account dropdown menu.',
                    },
                    {
                      num: "3",
                      title: 'Find Listing & Click "Manage"',
                      desc: 'Locate your company listing and click the "Manage" button.',
                    },
                    {
                      num: "4",
                      title: 'Click "User Permissions"',
                      desc: 'Open "User permissions" on the left sidebar, then click "View original user permissions".',
                    },
                  ].map((s) => (
                    <div
                      key={s.num}
                      className="rounded-2xl border border-white/12 bg-black/55 p-6"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                        {s.num}
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-base text-white/75">{s.desc}</p>
                    </div>
                  ))}

                  {/* Step 5 Highlight */}
                  <div className="rounded-2xl border-2 border-[#DBFF26] bg-[#DBFF26]/10 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBFF26] text-lg font-extrabold text-black">
                      5
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      Invite New User
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/85">
                      Click <strong>+ Invite New User</strong> and enter this
                      exact email:
                    </p>
                    <div className="mt-3 rounded-xl bg-black p-3 border border-white/15">
                      <p className="font-mono text-sm font-extrabold text-[#DBFF26] break-all">
                        {INVITE_EMAIL}
                      </p>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#DBFF26] py-2 text-xs sm:text-sm font-extrabold text-black hover:bg-[#c8eb1f]"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy Exact Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Step 6 + Finish */}
                  <div className="rounded-2xl border border-[#00D68F]/40 bg-[#00D68F]/10 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                      6
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      Give &ldquo;Sales&rdquo; Affiliation — Finish!
                    </h3>
                    <p className="mt-2 text-base text-white/85">
                      Select <strong>Sales</strong> in the Affiliation dropdown.
                      Congratulations—all steps are complete! We&apos;ll reach
                      out only if a final confirmation is required.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}

            {/* PAGE 2: FREE $0 PRODUCT SUBMISSION & BADGE OF EXCELLENCE */}
            {(showAll || activePage === 1) && (
              <motion.section
                key="infographic-page-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d-lime rounded-3xl p-7 sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
                  <div>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                      Infographic 02 • Adding Your Product
                    </span>
                    <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                      You Are Eligible for{" "}
                      <span className="underline decoration-[#DBFF26] underline-offset-8 text-[#DBFF26]">
                        FREE
                      </span>{" "}
                      Product Submission!
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Fee Waiver Ticket */}
                  <div className="lg:col-span-5 rounded-3xl border-2 border-[#DBFF26] bg-black p-8 text-center shadow-2xl">
                    <Sparkles className="mx-auto h-10 w-10 text-[#DBFF26]" />
                    <p className="mt-3 text-base font-bold uppercase tracking-wider text-white/70">
                      OTA Product Submission Fee
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <span className="font-mono text-2xl font-bold text-red-400 line-through">
                        $29.00 USD
                      </span>
                      <span className="font-display text-5xl font-extrabold text-[#DBFF26]">
                        $0.00
                      </span>
                    </div>
                    <p className="mt-4 text-base text-white/80">
                      We cover the $29.00 review fee for every qualifying tour.
                      Zero upfront investment—we only succeed when you do.
                    </p>
                  </div>

                  {/* Right: Launch Assist + Badge of Excellence */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="rounded-2xl border border-white/12 bg-black/60 p-6">
                      <h3 className="flex items-center gap-2.5 text-2xl font-extrabold text-white">
                        <Layers className="h-6 w-6 text-[#DBFF26]" />
                        Launch Assist Included
                      </h3>
                      <ul className="mt-3 space-y-2.5 text-base text-white/80">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>
                            Personalized listing insights tailored to traveler
                            search demand.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>
                            SEO-structured descriptions and pricing tiers built
                            to secure your first bookings and reviews fast.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/12 bg-black/60 p-6">
                      <h3 className="flex items-center gap-2.5 text-2xl font-extrabold text-white">
                        <Award className="h-6 w-6 text-[#DBFF26]" />
                        Badge of Excellence Optimization
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-white/80">
                        Products structured to meet top quality standards are
                        rewarded by OTA algorithms with higher search visibility,
                        Badge of Excellence eligibility, and stronger booking
                        conversions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* PAGE 3: 8-POINT PRODUCT COMPLETION CHECKLIST */}
            {(showAll || activePage === 2) && (
              <motion.section
                key="infographic-page-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="border-b border-white/10 pb-6">
                  <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                    Infographic 03 • Product Information Sheet
                  </span>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                    8 Simple Details to Unlock Your Tour&apos;s Full Potential
                  </h2>
                  <p className="mt-2 text-lg text-white/75">
                    Send us these quick details via WhatsApp or email and our
                    team builds the entire listing for you.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {TOUR_QUESTIONS.map((q) => {
                    const Icon = q.icon;
                    return (
                      <div
                        key={q.title}
                        className="rounded-2xl border border-white/12 bg-black/60 p-6 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DBFF26]/15 text-[#DBFF26] border border-[#DBFF26]/30">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="mt-4 text-xl font-extrabold text-white">
                            {q.title}
                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-white/75">
                            {q.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* PAGE 4: AUTOMATION, CALENDAR, CANCELLATION & WORLDWIDE PAYMENTS */}
            {(showAll || activePage === 3) && (
              <motion.section
                key="infographic-page-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="border-b border-white/10 pb-6">
                  <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                    Infographic 04 • Automated Booking &amp; Payment Architecture
                  </span>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                    Zero Manual Reservation Entry &amp; Effortless Payments
                  </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-7 w-7 text-[#25D366]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Instant Team WhatsApp &amp; Email Dispatch
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Every new booking immediately sends your team the customer
                      name, PAX count, phone number, email address, hotel/pickup
                      point, and tour date &amp; time.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarCheck2 className="h-7 w-7 text-[#DBFF26]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Automatic Google Calendar Integration
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Reservations appear automatically on your real-time Google
                      Calendar—eliminating manual booking entry and scheduling
                      mistakes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <RotateCcw className="h-7 w-7 text-[#00D68F]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        1-Step Easy Cancellations ($0 Fee)
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Need to cancel due to weather or availability? One quick
                      message removes the calendar slot, notifies the guest, and
                      processes the refund with $0 software cost.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-7 w-7 text-[#DBFF26]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Stripe &amp; PayPal Payment Links (Power Boost)
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Upgrade with Power Boost ($999.99 USD + 2%) to get a
                      custom-redesigned website with direct Card, Apple Pay,
                      Stripe, and PayPal checkout links.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Next / Previous Navigation Controls when in Slide Mode */}
        {!showAll && (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              disabled={activePage === 0}
              onClick={() => setActivePage((p) => Math.max(0, p - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-base font-bold text-white transition enabled:hover:border-[#DBFF26] enabled:hover:text-[#DBFF26] disabled:opacity-35"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous Page</span>
            </button>

            <button
              type="button"
              disabled={activePage === INFOGRAPHIC_TABS.length - 1}
              onClick={() =>
                setActivePage((p) =>
                  Math.min(INFOGRAPHIC_TABS.length - 1, p + 1)
                )
              }
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-3 text-base font-extrabold text-black transition enabled:hover:bg-black enabled:hover:text-[#DBFF26] disabled:opacity-35"
            >
              <span>Next Infographic</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
