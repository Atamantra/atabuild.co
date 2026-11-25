import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ata Travel Ltd. (B2B Partner Agreement)",
  description:
    "Official B2B Terms & Conditions and Partner Agreement for OTA distribution, TripAdvisor connectivity, portfolio management, and automated reservation services by Ata Travel Ltd.",
};

export default function TermsAndConditionsPage() {
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
            href="/privacy"
            className="text-sm font-bold text-[#DBFF26] underline underline-offset-4 hover:text-white"
          >
            View Privacy Policy →
          </Link>
        </div>

        {/* Header Card */}
        <div className="card-3d rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26]/15 border border-[#DBFF26]/35 px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
            <Scale className="h-4 w-4" />
            B2B Partner Terms &amp; Conditions
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Terms &amp; Conditions of Service
          </h1>

          <p className="mt-3 text-base sm:text-lg text-white/75">
            Last Updated: November 2026 • Operated by{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> (Registered
            in England &amp; Wales, Company No. 15948112)
          </p>

          {/* Highlighted Key Portfolio, Detachment & Review Retention Notice */}
          <div className="mt-7 rounded-2xl border-2 border-[#DBFF26] bg-[#DBFF26]/10 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-[#DBFF26] font-extrabold text-lg">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>
                Key Portfolio, Detachment &amp; Review Ownership Terms
              </span>
            </div>
            <ul className="space-y-2.5 text-base text-white/90 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Ata Travels Portfolio Listing:</strong> All tour and
                  activity products created, funded, and distributed under this
                  service are published and managed within the official{" "}
                  <strong>Ata Travels (Ata Travel Ltd.) portfolio</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Deactivation Upon Detachment:</strong> If any kind of
                  detachment, separation, or termination of partnership is
                  requested or initiated, the products managed under Ata
                  Travels&apos; portfolio{" "}
                  <strong>
                    will be deactivated from your current TripAdvisor listing
                  </strong>{" "}
                  and connected OTA channels.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Right to Create Your Own Listing Later:</strong>{" "}
                  Following detachment and deactivation, the TripAdvisor page
                  owner remains completely free to create and submit their own
                  new, independent product listings on their TripAdvisor page at
                  any time if they choose to do so.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Right to Hold Reviews:</strong>{" "}
                  <strong>
                    Ata Travels retains the full right to hold and keep all
                    reviews
                  </strong>{" "}
                  generated and accumulated on the product listings created and
                  operated under the Ata Travels portfolio.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="card-3d mt-8 rounded-3xl p-8 sm:p-10 space-y-8 text-base sm:text-lg leading-relaxed text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-white">
              1. Contracting Parties &amp; Scope of Service
            </h2>
            <p>
              These Terms &amp; Conditions (&ldquo;Agreement&rdquo;) govern the
              business-to-business (&ldquo;B2B&rdquo;) relationship between{" "}
              <strong className="text-white">Ata Travel Ltd.</strong>, a company
              incorporated in England and Wales (Company No. 15948112) with its
              registered office at 71-75 Shelton Street, Covent Garden, London,
              WC2H 9JQ, United Kingdom (&ldquo;Ata Travels&rdquo;,
              &ldquo;AtaBuild&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;),
              and the tour operator, boat owner, activity provider, or travel
              agency (&ldquo;Partner&rdquo;, &ldquo;Operator&rdquo;, or
              &ldquo;you&rdquo;) onboarding onto our OTA distribution, booking
              automation, or web development services.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              2. Ata Travels Portfolio Structure, Detachment &amp; Reviews
            </h2>
            <p>
              <strong>2.1 Portfolio Placement:</strong> By granting Sales
              permission or submitting tour details to us, you acknowledge and
              agree that all bookable tour products we build, fund, optimize,
              and distribute are published under{" "}
              <strong className="text-white">
                Ata Travels&apos; supplier and distribution portfolio
              </strong>{" "}
              and linked to your TripAdvisor attraction/operator listing for
              online booking fulfillment.
            </p>
            <p>
              <strong>2.2 Deactivation Upon Detachment:</strong> Either party
              may request detachment or termination of the partnership by
              providing written notice. If any kind of detachment, removal of
              Sales user permissions, or partnership termination occurs,{" "}
              <strong className="text-white">
                all bookable products created under the Ata Travels portfolio
                will be deactivated and unlinked from your current TripAdvisor
                listing
              </strong>{" "}
              and all connected third-party OTA channels. Any confirmed future
              bookings made prior to deactivation must still be honored by the
              Operator or refunded in accordance with OTA rules.
            </p>
            <p>
              <strong>2.3 Owner&apos;s Freedom to Create New Listings:</strong>{" "}
              We never claim ownership of your underlying TripAdvisor business
              profile or brand name. Once our portfolio products are deactivated
              upon detachment,{" "}
              <strong className="text-white">
                the business owner is completely free to create and publish
                their own new, separate bookable listings
              </strong>{" "}
              directly through TripAdvisor / Viator or any other platform at
              their own expense and discretion.
            </p>
            <p>
              <strong>2.4 Retention of Product Reviews:</strong> Because
              product-level reviews are tied directly to the bookable product
              SKUs, quality assurance, customer support, automated post-tour
              follow-up workflows, and upfront submission sponsorship managed
              under our supplier account,{" "}
              <strong className="text-[#DBFF26]">
                Ata Travels holds and retains all rights to the reviews
                collected on those portfolio products
              </strong>
              . Reviews attached to Ata Travels&apos; portfolio product SKUs are
              not transferable to newly created independent product SKUs, though
              Ata Travels retains the right to hold, archive, or manage those
              product records within its portfolio.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              3. Upfront Fee Waivers &amp; Listing Intellectual Property
            </h2>
            <p>
              Where eligible, Ata Travels covers or waives the standard $29.00
              USD per-product OTA review/submission fee on your behalf. All
              custom-written SEO descriptions, translated copy, structured
              pricing tables, automated WhatsApp/email message templates, and
              calendar automation scripts created by Ata Travels remain the
              intellectual property of Ata Travel Ltd. Photos and trademarks
              supplied by the Operator remain the property of the Operator, with
              a worldwide, royalty-free license granted to Ata Travels for
              active marketing and OTA distribution during the partnership.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              4. Commercial Plans, Commissions &amp; Payout Settlement
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Performance Plans:</strong> Starter (4% per completed
                sale, $3.00 USD minimum floor), Pro (7% per completed sale), and
                Scale ($39.00 USD/month + 2.5% per completed sale) are deducted
                alongside the applicable OTA channel commission (standard 30%
                unless otherwise agreed).
              </li>
              <li>
                <strong>Net-Rate Wholesale Guarantee:</strong> Where agreed in
                writing, Operator quotes a fixed net rate per guest, and Ata
                Travels manages retail pricing, OTA commissions, and software
                automation on top of that rate, settling 100% of the agreed net
                rate per completed guest.
              </li>
              <li>
                <strong>Power Boost Package ($999.99 USD + 2%):</strong>{" "}
                Includes one custom website redesign, integration of direct
                Stripe &amp; PayPal payment links, expanded OTA onboarding, and
                automated reservation workflows for a one-time setup fee of
                $999.99 USD plus a 2% software commission per sale. Once design
                and integration work has commenced, the one-time setup fee is
                non-refundable.
              </li>
              <li>
                <strong>Payout Timing:</strong> Net payouts to the Operator are
                settled strictly for completed, non-disputed, non-refunded
                bookings following receipt of cleared funds from the respective
                OTA or payment processor, minus any bank/wire or FX conversion
                charges imposed by third-party financial institutions.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              5. Cancellations, Refunds &amp; Operator No-Shows
            </h2>
            <p>
              <strong>5.1 Standard &amp; Weather Cancellations:</strong>{" "}
              Traveler cancellations within the published free-cancellation
              window (typically up to 24 hours prior to departure) or legitimate
              unsafe-weather cancellations initiated promptly by the Operator
              incur <strong className="text-[#DBFF26]">$0.00</strong> in Ata
              Travels software fees.
            </p>
            <p>
              <strong>5.2 Operator Fault / No-Show Penalties:</strong> If the
              Operator fails to honor a confirmed booking, arrives materially
              late, overbooks without updating cutoff/calendar availability, or
              cancels last-minute without valid force majeure, any resulting
              customer refunds, chargebacks, or fines/relocation penalties
              imposed by the OTA shall be borne solely by the Operator and may
              be offset against upcoming payouts.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              6. Operator Legal Compliance, Safety &amp; Insurance
            </h2>
            <p>
              Ata Travel Ltd. acts strictly as a technology, marketing, and
              booking distribution partner and is not the physical operator of
              third-party partner tours. The Operator warrants that all vessels,
              vehicles, equipment, captains, pilots, and guides hold all
              mandatory local tourism licenses (e.g., TURSAB, maritime,
              aviation, or municipal permits), comprehensive public/passenger
              liability insurance, and safety certifications required by law.
              The Operator agrees to indemnify and hold harmless Ata Travel Ltd.
              against any personal injury, property damage, regulatory fine, or
              guest claim arising from the physical execution of the tour.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              7. Automated WhatsApp, Email &amp; Calendar Disclaimers
            </h2>
            <p>
              Automated WhatsApp Business messages, email vouchers, and Google
              Calendar entries rely on third-party telecommunications and cloud
              providers (including Meta, Google, Stripe, PayPal, and OTA APIs).
              While we maintain high system availability, Operators must verify
              daily manifests and ensure their designated WhatsApp phone number
              and Google Calendar remain active and monitored.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              8. Rate Parity &amp; Accurate Tour Information
            </h2>
            <p>
              Operators agree to provide accurate schedules, inclusions, pickup
              zones, and safety restrictions, and not to publish higher retail
              rates through Ata Travels than their standard public retail rates
              for identical inclusions on the same OTA channels.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              9. Governing Law &amp; Contact
            </h2>
            <p>
              This Agreement is governed by and construed in accordance with the
              laws of <strong>England and Wales</strong>, and the courts of
              London, United Kingdom shall have exclusive jurisdiction over any
              dispute.
            </p>
            <div className="rounded-2xl border border-white/12 bg-black/60 p-5 text-sm sm:text-base space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#DBFF26]" />
                Ata Travel Ltd. (Company No. 15948112)
              </p>
              <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</p>
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
