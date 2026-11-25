"use client";

import React from "react";
import {
  CalendarCheck2,
  CheckCheck,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  QrCode,
  RotateCcw,
} from "lucide-react";

export function FeatureGridTr() {
  return (
    <section
      id="whatsapp-automation"
      className="scroll-mt-24 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#DBFF26]">
            Otomatik WhatsApp, E-Posta ve Takvim Sistemi
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Rezervasyonları Elle Eklemeyi Bırakın — Bırakın Biz Sizin İçin
            Yapalım.
          </h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/80">
            Misafir online rezervasyon yaptığı anda sistemimiz kaydı{" "}
            <strong className="text-white">Google Takviminize</strong> otomatik
            ekler, ekibinize <strong className="text-white">WhatsApp</strong>{" "}
            üzerinden tüm detayları iletir ve misafire{" "}
            <strong className="text-white">otomatik e-posta</strong> ile bilet
            gönderir. İptal gerektiğinde ise tek adımda halledilir.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* CARD 1: Auto Reservation & Calendar */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/35">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Otomatik Rezervasyon
                  </h3>
                  <p className="text-base text-white/65">
                    WhatsApp + Google Takvim Kaydı
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl rounded-tl-sm border border-[#25D366]/35 bg-[#0E2419] p-5 shadow-lg">
                  <p className="text-sm font-bold text-[#DBFF26] mb-1.5">
                    Anında Ekip WhatsApp Bildirimi
                  </p>
                  <p className="text-base leading-relaxed text-white">
                    🚨 <strong>Yeni Rezervasyon Eklendi:</strong>
                    <br />• Misafir: <strong>Sarah Jenkins (4 Kişi)</strong>
                    <br />• Telefon &amp; E-Posta Eklendi
                    <br />• Alınış: <strong>Marina Otel • 09:30</strong>
                  </p>
                  <div className="mt-2.5 flex items-center justify-end gap-1 text-xs font-bold text-[#25D366]">
                    <span>Google Takvime İşlendi</span>
                    <CheckCheck className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-base font-semibold text-white/85">
              <CalendarCheck2 className="h-5 w-5 shrink-0 text-[#DBFF26]" />
              <span>Deftere veya tabloya tek tek elle yazmaya son</span>
            </div>
          </div>

          {/* CARD 2: Automated Guest Email & Vouchers */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DBFF26]/15 text-[#DBFF26] border border-[#DBFF26]/35">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Otomatik E-Posta &amp; Bilet
                  </h3>
                  <p className="text-base text-white/65">
                    QR Bilet, Konum Pini ve Hatırlatma
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-[#0B0D12] p-5 shadow-xl space-y-3.5">
                <p className="text-sm text-white/60 border-b border-white/10 pb-3">
                  Konu:{" "}
                  <strong className="text-white">
                    Onaylı Tur Biletiniz ve Alınış Haritası (#8842)
                  </strong>
                </p>
                <p className="text-base leading-relaxed text-white/85">
                  Misafirleriniz onay e-postasını, canlı Google Haritalar buluşma
                  pinini ve 24 saat öncesi hatırlatmasını otomatik alır.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 rounded-xl bg-white/[0.06] p-3 border border-white/10">
                    <QrCode className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                    <span className="text-sm font-bold text-white">
                      QR Bilet
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/[0.06] p-3 border border-white/10">
                    <MapPin className="h-5 w-5 shrink-0 text-[#00D68F]" />
                    <span className="text-sm font-bold text-white">
                      GPS Pin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-base font-semibold text-white/85">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#DBFF26]" />
              <span>Tur sonrası otomatik 5 yıldızlı yorum daveti</span>
            </div>
          </div>

          {/* CARD 3: Super Easy Cancellations */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00D68F]/15 text-[#00D68F] border border-[#00D68F]/35">
                  <RotateCcw className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Çok Kolay İptal İşlemi
                  </h3>
                  <p className="text-base text-white/65">
                    Saniyeler İçinde İptal &amp; İade
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-[#0B0D12] p-5 space-y-4">
                <p className="text-base leading-relaxed text-white/85">
                  Hava muhalefeti, sert rüzgar veya dolu kontenjan mı var?{" "}
                  <strong className="text-white">
                    Bir rezervasyonu iptal etmek tek bir mesaj kadar kolaydır.
                  </strong>
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-white/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>Google Takviminizden anında otomatik silinir</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>
                      Misafire WhatsApp ve e-posta ile anında bilgi &amp; iade
                      iletilir
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>
                      <strong className="text-[#DBFF26]">$0.00 kesinti</strong>{" "}
                      — iptal edilen rezervasyonlarda komisyon ödemezsiniz
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-base font-semibold text-[#DBFF26]">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Ceza yok • Zahmetsiz otomatik OTA iadesi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
