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
  Sparkles,
  Truck,
} from "lucide-react";
import { Logo } from "@/components/Logo";

const INVITE_EMAIL = "info@atatravels.com";

const INFOGRAPHIC_TABS_TR = [
  {
    id: 0,
    tag: "Sayfa 01",
    title: "TripAdvisor Bağlantı Rehberi",
  },
  {
    id: 1,
    tag: "Sayfa 02",
    title: "$0 Ücretsiz Ürün Kaydı",
  },
  {
    id: 2,
    tag: "Sayfa 03",
    title: "8 Maddelik Tur Bilgi Listesi",
  },
  {
    id: 3,
    tag: "Sayfa 04",
    title: "Otomasyon, Takvim & Ödemeler",
  },
];

const TOUR_QUESTIONS_TR = [
  {
    icon: FileText,
    title: "1. Turunuz Ne Hakkında?",
    detail:
      "Turunuzun hikayesini ve misafirlerin yaşayacağı ana deneyimi kısaca anlatın.",
  },
  {
    icon: Camera,
    title: "2. En Az 6 Yüksek Kaliteli Fotoğraf",
    detail:
      "Mutlu misafirlerin, teknenin veya manzaranın net fotoğrafları satışları 3 kat artırır.",
  },
  {
    icon: Truck,
    title: "3. Otelden Alınış Var mı?",
    detail:
      "Transfer sağlıyor musunuz yoksa buluşma noktası mı? Turdan kaç dakika önce alıyorsunuz?",
  },
  {
    icon: MapPin,
    title: "4. Konum ve Rota",
    detail:
      "Misafirlerin nerede buluşacağını ve aktivite boyunca hangi noktaları göreceğini paylaşın.",
  },
  {
    icon: DollarSign,
    title: "5. Saatler ve Fiyatlandırma",
    detail:
      "Günlük kalkış saatleriniz, sezon tarihleri ve yetişkin/çocuk fiyatlarınız.",
  },
  {
    icon: Clock,
    title: "6. Aktivite Ne Kadar Sürüyor?",
    detail: "Alınıştan veya başlangıçtan bitişe kadar toplam tur süresi.",
  },
  {
    icon: ListChecks,
    title: "7. Dahil Olanlar ve Ekstralar",
    detail:
      "Fiyata neler dahil (yemek, ekipman, transfer) ve neler ekstra olarak satılıyor?",
  },
  {
    icon: HelpCircle,
    title: "8. Fark Yaratan Detaylar & Bilinmesi Gerekenler",
    detail:
      "Turunuzu özel kılan noktalar ve misafirlerin gelirken yanına alması gerekenler.",
  },
];

export default function TurkishGuideInfographicsPage() {
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
          <Link href="/tr" aria-label="Ana Sayfaya Dön">
            <Logo size="md" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-black/70 p-1">
              <Link
                href="/guide"
                className="rounded-full px-3 py-1 text-xs sm:text-sm font-extrabold text-white/65 hover:text-white transition"
              >
                EN
              </Link>
              <span className="rounded-full bg-[#DBFF26] px-3 py-1 text-xs sm:text-sm font-extrabold text-black">
                TR
              </span>
            </div>

            <Link
              href="/tr"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm sm:text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Ana Sayfaya Dön</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 pt-10 sm:px-8 sm:pt-14">
        {/* Title & Infographic Deck Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#DBFF26]">
              Ata Travel Ltd. • Partner Portfolyo İnfografikleri
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Görsel Kurulum ve TripAdvisor Rehberi
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="self-start rounded-full border border-[#DBFF26]/40 bg-[#DBFF26]/10 px-5 py-2.5 text-sm font-extrabold text-[#DBFF26] transition hover:bg-[#DBFF26] hover:text-black"
          >
            {showAll
              ? "Slayt Görünümüne Geç"
              : "4 Sayfanın Tamamını Alt Alta Gör"}
          </button>
        </div>

        {/* Page Selector Pills */}
        {!showAll && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INFOGRAPHIC_TABS_TR.map((tab) => {
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
            {/* SAYFA 1: TRIPADVISOR YETKİ BAĞLANTISI */}
            {(showAll || activePage === 0) && (
              <motion.section
                key="tr-infographic-page-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[#00D68F]">
                      İnfografik 01 • Bize Nasıl Bağlantı Verirsiniz?
                    </span>
                    <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                      6 Kolay Tıklamayla TripAdvisor Sayfanızı Bağlayın
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#00D68F]/15 border border-[#00D68F]/40 px-4 py-1.5 text-sm font-extrabold text-[#00D68F]">
                    Yalnızca Yetki Daveti Yeterli
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      num: "1",
                      title: "Hesabınıza Giriş Yapın",
                      desc: "TripAdvisor'a giriş yapın ve sağ üst köşedeki profil ikonunuza tıklayın.",
                    },
                    {
                      num: "2",
                      title: '"My Business" Seçin',
                      desc: 'Sağ üstten açılan menüde "My business (İşletmem)" seçeneğine tıklayın.',
                    },
                    {
                      num: "3",
                      title: 'İşletmenizi Bulup "Manage" Deyin',
                      desc: 'Listelenen işletmenizin yanındaki "Manage (Yönet)" butonuna tıklayın.',
                    },
                    {
                      num: "4",
                      title: '"User Permissions" Açın',
                      desc: 'Soldaki menüden "User permissions" sekmesine, ardından "View original user permissions" butonuna tıklayın.',
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

                  {/* Adım 5 */}
                  <div className="rounded-2xl border-2 border-[#DBFF26] bg-[#DBFF26]/10 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBFF26] text-lg font-extrabold text-black">
                      5
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      Yeni Kullanıcı Davet Edin
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/85">
                      <strong>+ Invite New User</strong> butonuna tıklayın ve
                      aşağıdaki e-posta adresini eksiksiz girin:
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
                            <span>Kopyalandı!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>E-Postayı Kopyala</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Adım 6 */}
                  <div className="rounded-2xl border border-[#00D68F]/40 bg-[#00D68F]/10 p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                      6
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      &ldquo;Sales&rdquo; Yetkisi Verin — Tamamlandı!
                    </h3>
                    <p className="mt-2 text-base text-white/85">
                      Affiliation menüsünden <strong>Sales (Satış)</strong>{" "}
                      yetkisini seçin. Tebrikler—tüm adımları tamamladınız! Son
                      onay gerekirse ekibimiz size ulaşacaktır.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}

            {/* SAYFA 2: $0 ÜCRETSİZ ÜRÜN KAYDI */}
            {(showAll || activePage === 1) && (
              <motion.section
                key="tr-infographic-page-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d-lime rounded-3xl p-7 sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
                  <div>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                      İnfografik 02 • Ürününüzün Eklenmesi
                    </span>
                    <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                      <span className="underline decoration-[#DBFF26] underline-offset-8 text-[#DBFF26]">
                        ÜCRETSİZ
                      </span>{" "}
                      Ürün Başvurusu Hakkı Kazandınız!
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5 rounded-3xl border-2 border-[#DBFF26] bg-black p-8 text-center shadow-2xl">
                    <Sparkles className="mx-auto h-10 w-10 text-[#DBFF26]" />
                    <p className="mt-3 text-base font-bold uppercase tracking-wider text-white/70">
                      OTA Ürün İnceleme Ücreti
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
                      Uygun her tur için $29.00 inceleme ücretini biz
                      karşılıyoruz. Cebinizden $0 ön yatırım çıkar—yalnızca siz
                      kazandığınızda kazanırız.
                    </p>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div className="rounded-2xl border border-white/12 bg-black/60 p-6">
                      <h3 className="flex items-center gap-2.5 text-2xl font-extrabold text-white">
                        <Layers className="h-6 w-6 text-[#DBFF26]" />
                        Launch Assist Desteği Dahil
                      </h3>
                      <ul className="mt-3 space-y-2.5 text-base text-white/80">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>
                            Yabancı turist aramalarına göre özelleştirilmiş
                            listeleme stratejisi.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                          <span>
                            İlk rezervasyonlarınızı ve yorumlarınızı hızla
                            almanızı sağlayan profesyonel tur açıklamaları.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/12 bg-black/60 p-6">
                      <h3 className="flex items-center gap-2.5 text-2xl font-extrabold text-white">
                        <Award className="h-6 w-6 text-[#DBFF26]" />
                        Mükemmellik Rozeti (Badge of Excellence) Optimizasyonu
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-white/80">
                        Yüksek kalite standartlarına uygun yapılandırılan
                        turlar, OTA algoritmaları tarafından üst sıralarda
                        gösterilir ve çok daha yüksek rezervasyon dönüşümü
                        yakalar.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* SAYFA 3: 8 MADDELİK TUR BİLGİ LİSTESİ */}
            {(showAll || activePage === 2) && (
              <motion.section
                key="tr-infographic-page-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="border-b border-white/10 pb-6">
                  <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                    İnfografik 03 • Tur Hazırlık Soruları
                  </span>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                    Turunuzun Tam Potansiyelini Açığa Çıkaran 8 Basit Bilgi
                  </h2>
                  <p className="mt-2 text-lg text-white/75">
                    Aşağıdaki kısa bilgileri bize WhatsApp veya e-posta ile
                    iletin; tüm profesyonel listelemeyi biz hazırlayalım.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {TOUR_QUESTIONS_TR.map((q) => {
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

            {/* SAYFA 4: OTOMASYON, TAKVİM, İPTAL VE ÖDEME SİSTEMLERİ */}
            {(showAll || activePage === 3) && (
              <motion.section
                key="tr-infographic-page-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card-3d rounded-3xl p-7 sm:p-12"
              >
                <div className="border-b border-white/10 pb-6">
                  <span className="text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
                    İnfografik 04 • Otomatik Rezervasyon &amp; Ödeme Mimarisi
                  </span>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                    Sıfır Manuel Rezervasyon Girişi ve Güvenli Ödeme Çözümleri
                  </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-7 w-7 text-[#25D366]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Anında Ekip WhatsApp &amp; E-Posta Bildirimi
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Rezervasyon geldiği anda misafir adı, kişi sayısı (PAX),
                      telefon, e-posta, otel/alınış noktası ve tur saati
                      ekibinize otomatik iletilir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarCheck2 className="h-7 w-7 text-[#DBFF26]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Otomatik Google Takvim Entegrasyonu
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Tüm yeni rezervasyonlar anında Google Takviminize otomatik
                      işlenir; elle kayıt girme zahmeti ve karışıklık tamamen
                      biter.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <RotateCcw className="h-7 w-7 text-[#00D68F]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Tek Adımda Kolay İptal ($0 Kesinti)
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Hava muhalefeti veya kontenjan değişikliğinde tek mesajla
                      rezervasyon iptal edilir, takvim güncellenir ve misafire
                      otomatik bilgi gider—$0 yazılım ücretiyle.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/60 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-7 w-7 text-[#DBFF26]" />
                      <h3 className="text-2xl font-extrabold text-white">
                        Stripe &amp; PayPal Ödeme Linkleri (Power Boost)
                      </h3>
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      Power Boost ($999.99 USD + %2) ile yenilenen web
                      sitenizden Kredi Kartı, Apple Pay, Stripe ve PayPal ödeme
                      linkleriyle dünyanın her yerinden ödeme alın.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Next / Previous Navigation */}
        {!showAll && (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              disabled={activePage === 0}
              onClick={() => setActivePage((p) => Math.max(0, p - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-base font-bold text-white transition enabled:hover:border-[#DBFF26] enabled:hover:text-[#DBFF26] disabled:opacity-35"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Önceki Sayfa</span>
            </button>

            <button
              type="button"
              disabled={activePage === INFOGRAPHIC_TABS_TR.length - 1}
              onClick={() =>
                setActivePage((p) =>
                  Math.min(INFOGRAPHIC_TABS_TR.length - 1, p + 1)
                )
              }
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-6 py-3 text-base font-extrabold text-black transition enabled:hover:bg-black enabled:hover:text-[#DBFF26] disabled:opacity-35"
            >
              <span>Sonraki İnfografik</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
