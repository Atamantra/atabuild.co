"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileCheck2, ShieldCheck, X } from "lucide-react";

interface PartnerAgreementModalTrProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerAgreementModalTr({
  isOpen,
  onClose,
}: PartnerAgreementModalTrProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-agreement-tr-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0D0F14] text-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-black px-7 py-5">
              <div className="flex items-center gap-3">
                <FileCheck2 className="h-6 w-6 text-[#DBFF26]" />
                <h3
                  id="partner-agreement-tr-title"
                  className="text-xl font-extrabold text-white"
                >
                  Partnerlik Şartları &amp; Portfolyo Sözleşmesi Özeti
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Kapat"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-7 space-y-5 text-base leading-relaxed text-white/80">
              <div className="rounded-2xl border border-[#DBFF26]/35 bg-[#DBFF26]/10 p-5 text-sm sm:text-base text-white flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#DBFF26] mt-0.5" />
                <span>
                  <strong className="text-[#DBFF26]">Resmi Şirket:</strong>{" "}
                  Hizmetlerimiz İngiltere &amp; Galler&apos;de kayıtlı Birleşik
                  Krallık şirketi <strong>Ata Travel Ltd.</strong> (Şirket No:
                  15948112 • 71-75 Shelton Street, Covent Garden, London, WC2H
                  9JQ) tarafından yürütülmektedir.
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#DBFF26]">
                  1. Ata Travels Portfolyosu, Ayrılık ve Yorum Hakları
                </h4>
                <p className="mt-1">
                  Bu iş birliği kapsamında açılan tüm ürünler{" "}
                  <strong className="text-white">
                    Ata Travels resmi portfolyosu
                  </strong>{" "}
                  altında listelenir. Herhangi bir ayrılık veya iş birliği
                  sonlandırması söz konusu olduğunda, ürünler{" "}
                  <strong className="text-white">
                    mevcut TripAdvisor sayfanızdan devre dışı bırakılır
                  </strong>
                  . İşletme sahibi isterse daha sonra kendi TripAdvisor
                  sayfasında kendi bağımsız ilanını oluşturabilir.{" "}
                  <strong className="text-white">
                    Ata Travels, portfolyosu altındaki ürünlerde biriken tüm
                    yorumları elinde tutma hakkına sahiptir.
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  2. TripAdvisor Yetki Daveti ve $0 Ürün Başlangıcı
                </h4>
                <p className="mt-1">
                  Şifre paylaşımı gerekmez; yalnızca TripAdvisor üzerinden
                  &ldquo;Sales (Satış)&rdquo; kullanıcı yetkisi verilir ve ana
                  işletme sayfanızın mülkiyeti sizde kalır. Uygun turlarda $29
                  inceleme ücreti tarafımızca karşılanır.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  3. Power Boost, Hakedişler ve Kolay İptal
                </h4>
                <p className="mt-1">
                  Power Boost ($999.99 USD tek seferlik + satış başına %2) özel
                  web sitesi yenilemesini, Stripe &amp; PayPal ödeme linklerini
                  ve genişletilmiş OTA kayıtlarını kapsar. Standart ve hava
                  muhalefeti iptallerinde{" "}
                  <strong className="text-[#DBFF26]">$0.00</strong> kesinti
                  uygulanır; yasal ruhsat ve sigorta sorumluluğu Operatöre
                  aittir.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black px-7 py-4">
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                <Link
                  href="/tr/terms"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[#DBFF26] hover:underline"
                >
                  <span>Tüm Şartlar ve Koşullar</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tr/privacy"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-white/75 hover:text-white hover:underline"
                >
                  <span>Gizlilik Politikası</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#DBFF26] px-6 py-2.5 text-sm font-extrabold text-black hover:bg-[#c8eb1f]"
              >
                Kapat
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
