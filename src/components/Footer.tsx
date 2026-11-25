"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Logo } from "./Logo";
import { PricingModelId } from "@/types/pricing";

interface FooterProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
  onOpenTerms: () => void;
}

export function Footer({ onOpenOnboarding, onOpenTerms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/90 text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: ATA Logo & Ata Travel Ltd. (UK Company) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="lg" />

            <div className="card-3d rounded-2xl p-5 space-y-3 max-w-md">
              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-extrabold text-white">
                  Ata Travel <span className="text-[#DBFF26]">Ltd.</span>
                </span>
                <span className="rounded-full bg-[#DBFF26]/15 border border-[#DBFF26]/35 px-3 py-0.5 text-xs font-bold text-[#DBFF26]">
                  UK Company
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-white/75">
                Operated by{" "}
                <strong className="text-white">Ata Travel Ltd.</strong>, a
                United Kingdom company registered in England &amp; Wales,
                powering{" "}
                <a
                  href="https://atatravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#DBFF26] underline decoration-[#DBFF26]/60 underline-offset-4 hover:decoration-[#DBFF26]"
                >
                  atatravels.com
                </a>{" "}
                — currently managing{" "}
                <strong className="text-white">
                  7 partner companies &amp; 38+ active tours
                </strong>
                .
              </p>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/15948112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/85 transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
              >
                <Building2 className="h-4 w-4 text-[#DBFF26]" />
                <span>Verify UK Company No. 15948112</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-base">
              <li>
                <a
                  href="#whatsapp-automation"
                  className="transition hover:text-[#DBFF26]"
                >
                  Automated Booking Engine
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-[#DBFF26]">
                  Pricing &amp; Power Boost
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="transition hover:text-[#DBFF26]"
                >
                  Net Payout Calculator
                </a>
              </li>
              <li>
                <a
                  href="#tripadvisor-connect"
                  className="transition hover:text-[#DBFF26]"
                >
                  Connect TripAdvisor Page
                </a>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="transition hover:text-[#DBFF26]"
                >
                  Portfolio Infographic Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-[#DBFF26]"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-[#DBFF26]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onOpenOnboarding("power-boost")}
                  className="font-bold text-[#DBFF26] hover:underline underline-offset-4"
                >
                  Power Boost ($999.99 + 2%) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: UK HQ & Direct Support */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              UK Headquarters &amp; Support
            </h3>

            <div className="space-y-3.5 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <div>
                  <p className="font-bold text-white">
                    Ata Travel Ltd. — London, UK
                  </p>
                  <p className="text-sm text-white/65">
                    71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@atatravels.com"
                className="flex items-center gap-3 text-white/80 transition hover:text-[#DBFF26]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>info@atatravels.com</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://wa.me/905339230963?text=Hi%20Ata%20Travel%20team%2C%20I%27d%20like%20to%20connect%20our%20TripAdvisor%20page%20and%20list%20our%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-3 text-base font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Support</span>
              </a>

              <button
                type="button"
                onClick={onOpenTerms}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
              >
                <FileText className="h-5 w-5 text-[#DBFF26]" />
                <span>Quick Terms</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>
            © {currentYear}{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> — A UK
            Company (Company No. 15948112). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/guide"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              Infographic Guide
            </Link>
            <Link href="/tr" className="hover:text-[#DBFF26]">
              Türkçe (TR)
            </Link>
            <a
              href="https://atatravels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DBFF26]"
            >
              atatravels.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
