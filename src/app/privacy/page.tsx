import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, Lock, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Ata Travel Ltd.",
  description:
    "Privacy Policy and UK GDPR data protection notice for tour operators and travelers using Ata Travel Ltd. (atabuild.co / atatravels.com) booking and automation services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col pb-24">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 pt-6 sm:px-8 sm:pt-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/terms"
            className="text-sm font-bold text-[#DBFF26] underline underline-offset-4 hover:text-white"
          >
            View Terms &amp; Conditions →
          </Link>
        </div>

        {/* Header Card */}
        <div className="card-3d rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26]/15 border border-[#DBFF26]/35 px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
            <Lock className="h-4 w-4" />
            UK GDPR &amp; Data Protection Policy
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="mt-3 text-base sm:text-lg text-white/75">
            Last Updated: November 2026 • Data Controller:{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> (UK Company
            No. 15948112)
          </p>
        </div>

        {/* Policy Body */}
        <div className="card-3d mt-8 rounded-3xl p-8 sm:p-10 space-y-8 text-base sm:text-lg leading-relaxed text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-white">
              1. Who We Are
            </h2>
            <p>
              <strong className="text-white">Ata Travel Ltd.</strong>{" "}
              (&ldquo;Ata Travels&rdquo;, &ldquo;AtaBuild&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;), registered in England and
              Wales under Company No. 15948112 at 71-75 Shelton Street, Covent
              Garden, London, WC2H 9JQ, United Kingdom, respects your privacy
              and processes personal data in compliance with the UK General Data
              Protection Regulation (UK GDPR), the Data Protection Act 2018, and
              applicable international data protection laws (including Turkish
              KVKK No. 6698 where applicable).
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              2. Data We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>B2B Partner / Operator Data:</strong> Agency or company
                name, contact person name, WhatsApp/telephone numbers, email
                addresses, TripAdvisor/website URLs, tour content and media, and
                bank/payout settlement details.
              </li>
              <li>
                <strong>Traveler Reservation Data (Processed for Tours):</strong>{" "}
                Guest full name, party size (PAX), phone/WhatsApp number, email
                address, hotel or pickup location, booking reference, and
                selected tour date/time received via connected OTAs or direct
                website checkouts.
              </li>
              <li>
                <strong>Technical &amp; Usage Data:</strong> IP address, browser
                type, device identifiers, and essential session analytics used
                to keep our portal secure and functional.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              3. How &amp; Why We Use Personal Data
            </h2>
            <p>
              We process data strictly on lawful bases (contractual performance,
              legitimate business interests, and legal compliance) to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Onboard, structure, and publish tour listings across connected
                Online Travel Agencies (OTAs).
              </li>
              <li>
                Send transactional booking notifications, dispatch manifests,
                24-hour pickup reminders, Google Maps pins, mobile vouchers,
                cancellation notices, and post-tour review invitations via{" "}
                <strong>WhatsApp Business API</strong> and{" "}
                <strong>automated email</strong>.
              </li>
              <li>
                Synchronize confirmed and cancelled reservations automatically
                with the Operator&apos;s designated{" "}
                <strong>Google Calendar</strong>.
              </li>
              <li>
                Process direct payments and B2B settlements via{" "}
                <strong>Stripe</strong>, <strong>PayPal</strong>, Wise, or bank
                transfer, and comply with UK tax and accounting obligations.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              4. Data Sharing &amp; Trusted Sub-Processors
            </h2>
            <p>
              <strong>We never sell personal data to third parties.</strong> We
              share reservation and operational data solely with the necessary
              infrastructure providers required to fulfill your bookings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Connected OTA platforms (such as Viator / TripAdvisor,
                GetYourGuide, Trip.com, Klook, Airbnb, Civitatis, Manawa,
                Tripster) for inventory, booking, and cancellation sync.
              </li>
              <li>
                The fulfilling local Tour Operator / Captain / Guide assigned to
                deliver the booked experience.
              </li>
              <li>
                Cloud communication, calendar, and payment providers (Meta
                WhatsApp Cloud API, Google Workspace / Calendar APIs, Stripe,
                and PayPal).
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              5. International Transfers, Security &amp; Retention
            </h2>
            <p>
              Because travel bookings involve international guests and local
              tour operators across jurisdictions (including the UK, EU, and
              Türkiye), data may be transferred internationally under standard
              contractual safeguards and encrypted TLS connections. Financial
              and booking records are retained only as long as necessary to
              fulfill contracts and meet statutory UK tax/accounting retention
              periods (typically 6 years).
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              6. Your Data Protection Rights
            </h2>
            <p>
              Under UK GDPR and applicable privacy laws, you have the right to
              request access to, correction of, deletion of, or restriction of
              your personal data, as well as data portability and the right to
              object to certain processing. To exercise any right, contact us
              directly:
            </p>
            <div className="rounded-2xl border border-white/12 bg-black/60 p-5 text-sm sm:text-base space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#DBFF26]" />
                Data Protection Contact — Ata Travel Ltd.
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-white/50" />
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@atatravels.com"
                  className="text-[#DBFF26] underline"
                >
                  info@atatravels.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
