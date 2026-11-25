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
import { Logo } from "../Logo";
import { PricingModelId } from "@/types/pricing";

interface FooterTrProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
  onOpenTerms: () => void;
}

export function FooterTr({ onOpenOnboarding, onOpenTerms }: FooterTrProps) {
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
                  Birleşik Krallık Şirketi
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-white/75">
                İngiltere &amp; Galler&apos;de kayıtlı Birleşik Krallık şirketi{" "}
                <strong className="text-white">Ata Travel Ltd.</strong>{" "}
                tarafından işletilmekte olup{" "}
                <a
                  href="https://atatravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#DBFF26] underline decoration-[#DBFF26]/60 underline-offset-4 hover:decoration-[#DBFF26]"
                >
                  atatravels.com
                </a>{" "}
                altyapısına güç vermektedir — halihazırda{" "}
                <strong className="text-white">
                  7 partner şirket ve 38+ aktif tur
                </strong>{" "}
                yönetilmektedir.
              </p>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/15948112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/85 transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
              >
                <Building2 className="h-4 w-4 text-[#DBFF26]" />
                <span>UK Şirket Kaydını Doğrula: 15948112</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Bağlantılar &amp; Yasal
            </h3>
            <ul className="space-y-2.5 text-base">
              <li>
                <a
                  href="#whatsapp-automation"
                  className="transition hover:text-[#DBFF26]"
                >
                  Otomatik Rezervasyon Sistemi
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-[#DBFF26]">
                  Paketler &amp; Power Boost
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="transition hover:text-[#DBFF26]"
                >
                  Net Kazanç Hesaplayıcı
                </a>
              </li>
              <li>
                <a
                  href="#tripadvisor-connect"
                  className="transition hover:text-[#DBFF26]"
                >
                  TripAdvisor Sayfası Bağlama
                </a>
              </li>
              <li>
                <Link
                  href="/tr/guide"
                  className="transition hover:text-[#DBFF26]"
                >
                  Portfolyo İnfografik Sayfaları
                </Link>
              </li>
              <li>
                <Link
                  href="/tr/terms"
                  className="transition hover:text-[#DBFF26]"
                >
                  Şartlar ve Koşullar
                </Link>
              </li>
              <li>
                <Link
                  href="/tr/privacy"
                  className="transition hover:text-[#DBFF26]"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onOpenOnboarding("power-boost")}
                  className="font-bold text-[#DBFF26] hover:underline underline-offset-4"
                >
                  Power Boost ($999.99 + %2) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: UK HQ & Direct Support */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Birleşik Krallık Merkezi &amp; Destek
            </h3>

            <div className="space-y-3.5 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <div>
                  <p className="font-bold text-white">
                    Ata Travel Ltd. — Londra, Birleşik Krallık
                  </p>
                  <p className="text-sm text-white/65">
                    71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
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
                href="https://wa.me/905339230963?text=Merhaba%20Ata%20Travel%20ekibi%2C%20TripAdvisor%20sayfam%C4%B1z%C4%B1%20ba%C4%9Flamak%20ve%20turlar%C4%B1m%C4%B1z%C4%B1%20global%20OTA%20kanallar%C4%B1na%20eklemek%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-3 text-base font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Destek</span>
              </a>

              <button
                type="button"
                onClick={onOpenTerms}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
              >
                <FileText className="h-5 w-5 text-[#DBFF26]" />
                <span>Kısa Şartlar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>
            © {currentYear}{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> — Birleşik
            Krallık Şirketi (Şirket No: 15948112). Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/tr/terms"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              Şartlar ve Koşullar
            </Link>
            <Link
              href="/tr/privacy"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/tr/guide"
              className="underline underline-offset-4 hover:text-[#DBFF26]"
            >
              İnfografik Rehber
            </Link>
            <Link href="/" className="hover:text-[#DBFF26]">
              English (EN)
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
