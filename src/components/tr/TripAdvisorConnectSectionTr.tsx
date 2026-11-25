"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { PricingModelId } from "@/types/pricing";

interface TripAdvisorConnectSectionTrProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

const INVITE_EMAIL = "info@atatravels.com";

export function TripAdvisorConnectSectionTr({
  onOpenOnboarding,
}: TripAdvisorConnectSectionTrProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(INVITE_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="tripadvisor-connect"
      className="scroll-mt-20 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D68F]/40 bg-[#00D68F]/15 px-4 py-1.5 text-sm font-extrabold text-[#00D68F]">
            <ShieldCheck className="h-4 w-4" />
            Şifre Paylaşımı Yok • Yalnızca Yetki Daveti Gerekir
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="text-[#00D68F]">TripAdvisor</span> Sayfanızı Bize
            Nasıl Bağlarsınız?
          </h2>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/80">
            Bağlantı işlemi 60 saniyeden kısa sürer. Hesabınızın tüm kontrolü
            sizde kalır—yalnızca 6 kolay adımda{" "}
            <strong className="text-white">
              Satış (Sales) Kullanıcı Yetkisi
            </strong>{" "}
            göndermeniz yeterlidir.
          </p>
        </div>

        {/* 6-Step Visual TripAdvisor Permission Infographic Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* STEP 1 */}
          <div className="card-3d rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                  1
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#00D68F]">
                  Hesabınıza Giriş Yapın
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Profil İkonuna Tıklayın
              </h3>
              <p className="mt-2 text-base text-white/75">
                TripAdvisor hesabınıza giriş yapın ve{" "}
                <strong className="text-white">sağ üst köşedeki</strong> profil
                ikonunuza tıklayın.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-3.5 text-slate-900 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00AA6C] text-xs font-black text-white">
                    🦉
                  </span>
                  <span className="text-sm font-extrabold tracking-tight">
                    Tripadvisor
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">TRY</span>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-4 ring-[#00D68F]">
                    SİZ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="card-3d rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                  2
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#00D68F]">
                  Profil Menüsü
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                &ldquo;My Business&rdquo; Seçin
              </h3>
              <p className="mt-2 text-base text-white/75">
                Açılan menüden{" "}
                <strong className="text-white">
                  My business (İşletmem)
                </strong>{" "}
                sekmesine tıklayın.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-3 text-slate-800 shadow-lg space-y-1 text-xs font-semibold">
              <div className="px-3 py-1 text-slate-400">Profile</div>
              <div className="px-3 py-1 text-slate-400">Bookings</div>
              <div className="flex items-center justify-between rounded-lg bg-[#00AA6C] px-3 py-2 text-sm font-extrabold text-white shadow">
                <span>My business</span>
                <span>← Tıklayın</span>
              </div>
              <div className="px-3 py-1 text-slate-400">Account info</div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="card-3d rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                  3
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#00D68F]">
                  İşletmenizi Bulun
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                &ldquo;Manage&rdquo; Butonuna Tıklayın
              </h3>
              <p className="mt-2 text-base text-white/75">
                Listelenen işletmenizin yanındaki{" "}
                <strong className="text-white">Manage (Yönet)</strong> butonuna
                basın.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center font-bold text-amber-800 text-xs">
                  TUR
                </div>
                <div className="truncate">
                  <p className="text-xs font-extrabold uppercase text-slate-900">
                    İşletme Sayfanız
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    Acenta Paneli
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-[#DBFF26] ring-2 ring-[#00D68F]">
                Manage
              </span>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="card-3d rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                  4
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#00D68F]">
                  Yetki Ayarları
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                &ldquo;User Permissions&rdquo; Açın
              </h3>
              <p className="mt-2 text-base text-white/75">
                Sol menüden{" "}
                <strong className="text-white">User permissions</strong>{" "}
                sekmesine, ardından{" "}
                <strong className="text-white">
                  View original user permissions
                </strong>{" "}
                butonuna tıklayın.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-3.5 text-slate-800 shadow-lg space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 border border-[#00AA6C] px-3 py-1.5 font-extrabold text-[#008052]">
                <span>1. User permissions</span>
                <span>✓</span>
              </div>
              <div className="flex items-center justify-between rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 font-bold text-slate-900">
                <span>2. View original user permissions</span>
              </div>
            </div>
          </div>

          {/* STEP 5 — Copy Email */}
          <div className="card-3d-lime rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBFF26] text-lg font-extrabold text-black">
                  5
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#DBFF26]">
                  Yeni Kullanıcı Davet Et
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                E-Posta Adresimizi Davet Edin
              </h3>
              <p className="mt-2 text-base text-white/85">
                <strong>+ Invite New User</strong> butonuna tıklayın, aşağıdaki
                e-posta adresini yapıştırıp <strong>Send Invite</strong> deyin:
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="rounded-2xl border border-[#DBFF26]/50 bg-black p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D68F] mb-1.5">
                  <UserPlus className="h-4 w-4" />
                  <span>+ Davet Edilecek E-Posta:</span>
                </div>
                <p className="font-mono text-sm sm:text-base font-extrabold text-white break-all">
                  {INVITE_EMAIL}
                </p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#DBFF26] py-2.5 text-sm font-extrabold text-black transition hover:bg-[#c8eb1f]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>E-Posta Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>E-Posta Adresini Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="card-3d rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D68F] text-lg font-extrabold text-black">
                  6
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#00D68F]">
                  Yetki Seçimi &amp; Bitiş
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                &ldquo;Sales&rdquo; Yetkisi Verin
              </h3>
              <p className="mt-2 text-base text-white/75">
                Affiliation (Görev) listesinden{" "}
                <strong className="text-white">Sales (Satış)</strong> seçeneğini
                işaretleyin. Hepsi bu kadar—gerisini biz kuruyoruz!
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-slate-900 p-3.5 text-white shadow-lg space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-white/50 px-2">
                <span>Affiliation</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="px-2.5 py-1 text-white/45">Marketing</div>
              <div className="flex items-center justify-between rounded-lg bg-[#00D68F] px-3 py-2 text-sm font-extrabold text-black">
                <span>Sales</span>
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Link to Full Interactive Infographic Pages */}
        <div className="card-3d mt-12 rounded-3xl p-8 sm:p-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tüm Görsel Portfolyo ve Tur Hazırlık İnfografiklerini Görmek İster
              misiniz?
            </h3>
            <p className="mt-2 text-base sm:text-lg text-white/75">
              <strong className="text-white">
                $29 → $0 Ücretsiz Ürün Kaydı
              </strong>
              , <strong className="text-white">8 Maddelik Tur Listesi</strong>{" "}
              ve <strong className="text-white">Otomatik İş Akışı</strong>{" "}
              sayfalarını inceleyin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/tr/guide"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-base sm:text-lg font-extrabold text-black shadow-glow-lime transition hover:bg-black hover:text-[#DBFF26]"
            >
              <BookOpen className="h-5 w-5" />
              <span>İnfografik Sayfalarını Aç</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <button
              type="button"
              onClick={() => onOpenOnboarding("pro")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
            >
              <span>Davet Gönderdim, Başlayalım</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
