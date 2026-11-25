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

interface PricingSectionTrProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

type PricingTab = "performance" | "net-rate";

export function PricingSectionTr({ onOpenOnboarding }: PricingSectionTrProps) {
  const [activeTab, setActiveTab] = useState<PricingTab>("performance");

  return (
    <section
      id="pricing"
      className="scroll-mt-20 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold text-[#DBFF26]">
            Şeffaf ve Net Fiyatlandırma
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="text-[#DBFF26] underline decoration-[#DBFF26] decoration-4 underline-offset-8">
              $0 Ön Ödemeyle
            </span>{" "}
            Başlayın — Veya Markanızı Power Boost İle Uçurun.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/75">
            Satış gerçekleşene kadar cebinizden tek kuruş çıkmasın; ya da tek
            seferlik Power Boost ile Stripe &amp; PayPal altyapılı yepyeni bir
            web sitesine ve daha geniş OTA ağına sahip olun.
          </p>

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
              Satış Başına Ödeme &amp; Power Boost
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
              <span>Net Fiyat Garantisi (%0 Kesinti)</span>
            </button>
          </div>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {activeTab === "performance" ? (
              <motion.div
                key="performance-tr"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-stretch">
                  {/* TIER 1: Starter */}
                  <div className="card-3d rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Starter — OTA Senkron
                      </h3>
                      <p className="mt-2 text-base text-white/70">
                        Sıfır kurulum maliyetiyle global OTA kanallarına açılın.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $0
                        </span>
                        <span className="text-base text-white/55">/ay</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          %4
                        </span>
                        <span className="text-sm font-medium text-white/60">
                          satış başına
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-6 text-base text-white/85">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>$0 Kurulum</strong> ($29 inceleme ücreti
                            bizden)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Adil ödeme yapan global OTA kanallarında listeleme
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Anında WhatsApp, e-posta ve Google Takvim kaydı
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Tek adımda kolay iptal ($0 kesinti)</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("starter")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
                    >
                      <span>Starter İle Başla</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* TIER 2: Pro */}
                  <div className="card-3d-lime relative rounded-3xl p-8 flex flex-col justify-between">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DBFF26] px-5 py-1 text-sm font-extrabold uppercase tracking-wide text-black shadow-lg">
                        <Sparkles className="h-4 w-4" />
                        En Popüler
                      </span>
                    </div>

                    <div>
                      <h3 className="pt-2 text-2xl font-extrabold text-white">
                        Pro — Tam Otopilot
                      </h3>
                      <p className="mt-2 text-base text-white/80">
                        Her misafir için el değmeden WhatsApp ve e-posta
                        otomasyonu.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $0
                        </span>
                        <span className="text-base text-white/55">/ay</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          %7
                        </span>
                        <span className="text-sm font-medium text-white/65">
                          satış başına
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/15 pt-6 text-base text-white">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Starter paketindeki her şey</strong>, ek
                            olarak:
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Otomatik Misafir WhatsApp &amp; E-Posta</strong>{" "}
                            (24s &amp; 2s önce hatırlatma)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Otomatik Google Haritalar alınış pini ve QR bilet
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Otomatik 5 yıldızlı yorum takibi ve şoför/ekip
                            yönlendirme
                          </span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("pro")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-4 text-base font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
                    >
                      <span>Pro İle Ücretsiz Başla</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* TIER 3: Scale */}
                  <div className="card-3d rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Scale — Yüksek Hacim
                      </h3>
                      <p className="mt-2 text-base text-white/70">
                        Yoğun çalışan acentalar (ayda 15+ satış) için maksimum
                        kâr marjı.
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-white tabular-nums">
                          $39
                        </span>
                        <span className="text-base text-white/55">/ay</span>
                        <span className="mx-1 text-white/40">+</span>
                        <span className="text-3xl font-extrabold text-[#DBFF26] tabular-nums">
                          %2.5
                        </span>
                        <span className="text-sm font-medium text-white/60">
                          satış başına
                        </span>
                      </div>

                      <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-6 text-base text-white/85">
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            <strong>Pro paketindeki her şey</strong> dahil
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Tamamlanan tur başına düşük %2.5 kesinti</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>
                            Acentanıza özel markalı WhatsApp ve e-posta
                            şablonları
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Özel müşteri temsilcisi &amp; çoklu döviz</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOnboarding("scale")}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
                    >
                      <span>Scale Paketini Seç</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* POWER BOOST ($999.99 USD + %2) — NO Specific OTA Names */}
                <div className="card-3d-boost rounded-3xl p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26] px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-black">
                        <Rocket className="h-4 w-4" />
                        Power Boost — Anahtar Teslim Marka + Direkt Ödeme
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Baştan Sona Web Sitesi Yenileme + Stripe &amp; PayPal +
                        Daha Fazla OTA Kanalı
                      </h3>

                      <p className="text-lg leading-relaxed text-white/80">
                        Hem kendi yüksek dönüşümlü web sitenizden direkt
                        rezervasyon almak <strong>hem de</strong> global OTA
                        kanallarında maksimum görünürlüğe ulaşmak mı
                        istiyorsunuz? Web sitenizi sıfırdan yeniliyor,{" "}
                        <strong className="text-white">
                          Stripe &amp; PayPal
                        </strong>{" "}
                        ödeme linklerini entegre ediyor ve turlarınızı daha
                        fazla global OTA kanalına ekliyoruz.
                      </p>

                      <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 text-base font-medium text-white/90">
                        <div className="flex items-center gap-2.5">
                          <CreditCard className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>Stripe &amp; PayPal Direkt Ödeme Linkleri</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Globe className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>Daha Fazla Global OTA Kanalına Ekleme</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Check className="h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Sıfırdan Özel Web Sitesi Yenileme</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Check className="h-5 w-5 shrink-0 text-[#DBFF26] stroke-[2.5]" />
                          <span>Tam WhatsApp, E-Posta &amp; Takvim Senkronu</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-3xl border border-white/15 bg-black/75 p-7 sm:p-8 text-center lg:text-left">
                      <p className="text-sm font-bold uppercase tracking-wider text-[#DBFF26]">
                        Tek Seferlik Kurulum + En Düşük Komisyon
                      </p>
                      <div className="mt-3 flex flex-wrap items-baseline justify-center lg:justify-start gap-2">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                          $999.99
                        </span>
                        <span className="text-base font-bold text-white/70">
                          USD tek seferlik
                        </span>
                      </div>
                      <p className="mt-2 text-xl font-extrabold text-[#DBFF26]">
                        + %2 satış başına komisyon
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        $0 aylık abonelik • Direkt Stripe &amp; PayPal ödeme
                        linkleri dahil
                      </p>

                      <button
                        type="button"
                        onClick={() => onOpenOnboarding("power-boost")}
                        className="mt-6 group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-lg font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
                      >
                        <span>Power Boost Başlat</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="net-rate-tr"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d-lime mx-auto max-w-4xl rounded-3xl p-8 sm:p-12 text-white"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26] px-4 py-1 text-sm font-extrabold text-black">
                  <ShieldCheck className="h-4 w-4" />
                  $0 Kurulum • $0 Aidat • Net Fiyatınızdan %0 Kesinti
                </span>

                <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
                  Net Fiyat (Wholesale) Garantisi
                </h3>

                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/85">
                  Bize kişi başı net fiyatınızı söyleyin (örneğin{" "}
                  <strong className="text-[#DBFF26]">$70</strong>). Tüm OTA
                  komisyonlarını, global dağıtımı ve otomatik WhatsApp &amp;
                  e-posta iletişimini net fiyatınızın üzerine ekleyerek biz
                  yönetelim—tamamlanan her turda{" "}
                  <strong className="text-white">
                    belirttiğiniz net tutarın %100&apos;ünü
                  </strong>{" "}
                  eksiksiz alın.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenOnboarding("net-rate")}
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-8 py-4 text-lg font-extrabold text-black shadow-glow-lime transition hover:bg-black hover:text-[#DBFF26]"
                  >
                    <span>Net Fiyatlarınızı Gönderin</span>
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
