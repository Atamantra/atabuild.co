import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, Lock, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Ata Travel Ltd.",
  description:
    "Ata Travel Ltd. (atabuild.co / atatravels.com) rezervasyon ve otomasyon hizmetleri için UK GDPR ve KVKK uyumlu Gizlilik Politikası.",
};

export default function TurkishPrivacyPolicyPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col pb-24">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 pt-6 sm:px-8 sm:pt-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/tr"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <Link
            href="/tr/terms"
            className="text-sm font-bold text-[#DBFF26] underline underline-offset-4 hover:text-white"
          >
            Şartlar ve Koşulları İncele →
          </Link>
        </div>

        {/* Header Card */}
        <div className="card-3d rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26]/15 border border-[#DBFF26]/35 px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
            <Lock className="h-4 w-4" />
            UK GDPR &amp; KVKK Veri Koruma Politikası
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Gizlilik Politikası
          </h1>

          <p className="mt-3 text-base sm:text-lg text-white/75">
            Son Güncelleme: Kasım 2026 • Veri Sorumlusu:{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> (Birleşik
            Krallık Şirket No: 15948112)
          </p>
        </div>

        {/* Policy Body */}
        <div className="card-3d mt-8 rounded-3xl p-8 sm:p-10 space-y-8 text-base sm:text-lg leading-relaxed text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-white">
              1. Veri Sorumlusu Kimdir?
            </h2>
            <p>
              İngiltere ve Galler&apos;de 15948112 numarasıyla kayıtlı olan ve
              merkezi 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ,
              Birleşik Krallık adresinde bulunan{" "}
              <strong className="text-white">Ata Travel Ltd.</strong>{" "}
              (&ldquo;Ata Travels&rdquo;, &ldquo;AtaBuild&rdquo;,
              &ldquo;Biz&rdquo;), kişisel verilerinizi Birleşik Krallık Genel
              Veri Koruma Tüzüğü (UK GDPR), Data Protection Act 2018 ve ilgili
              hallerde 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
              ilkelerine uygun olarak işler ve korur.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              2. Hangi Verileri Topluyoruz?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>B2B Partner / Acenta Verileri:</strong> İşletme veya
                acenta adı, yetkili adı, WhatsApp/telefon numaraları, e-posta
                adresleri, TripAdvisor ve web sitesi bağlantıları, tur görselleri
                ve hakediş ödemeleri için banka/ödeme bilgileri.
              </li>
              <li>
                <strong>Misafir Rezervasyon Verileri:</strong> Bağlı OTA
                kanallarından veya direkt web sitesi ödemelerinden gelen misafir
                ad-soyadı, kişi sayısı (PAX), telefon/WhatsApp numarası, e-posta
                adresi, otel/alınış noktası, rezervasyon kodu ve tur tarih/saat
                bilgileri.
              </li>
              <li>
                <strong>Teknik ve Güvenlik Verileri:</strong> Platform
                güvenliğini ve performansını sağlamak amacıyla işlenen IP
                adresi, tarayıcı tipi ve temel oturum kayıtları.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              3. Verileri Hangi Amaçlarla Kullanıyoruz?
            </h2>
            <p>
              Kişisel veriler yalnızca sözleşmenin ifası, meşru ticari
              menfaatler ve yasal yükümlülükler kapsamında şu amaçlarla
              kullanılır:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Tur ilanlarınızın global Online Seyahat Acentalarında (OTA)
                yapılandırılması ve satışa açılması.
              </li>
              <li>
                <strong>WhatsApp Business API</strong> ve{" "}
                <strong>otomatik e-posta</strong> aracılığıyla ekip rezervasyon
                bildirimlerinin, 24 saat öncesi hatırlatmaların, Google
                Haritalar konum pinlerinin, QR biletlerin, iptal bildirimlerinin
                ve tur sonrası yorum davetlerinin iletilmesi.
              </li>
              <li>
                Onaylanan ve iptal edilen rezervasyonların Operatörün{" "}
                <strong>Google Takvimine</strong> otomatik olarak işlenmesi.
              </li>
              <li>
                <strong>Stripe</strong>, <strong>PayPal</strong>, Wise veya
                banka havalesi üzerinden ödemelerin ve acenta hakedişlerinin
                güvenle gerçekleştirilmesi.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              4. Veri Paylaşımı ve Altyapı Sağlayıcıları
            </h2>
            <p>
              <strong>
                Kişisel verileriniz hiçbir koşulda üçüncü şahıslara satılmaz.
              </strong>{" "}
              Veriler yalnızca rezervasyonun gerçekleştirilmesi için zorunlu
              olan şu iş ortaklarıyla paylaşılır:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Envanter, rezervasyon ve iptal senkronizasyonu için bağlı OTA
                platformları (Viator / TripAdvisor, GetYourGuide, Trip.com,
                Klook, Airbnb, Civitatis, Manawa, Tripster vb.).
              </li>
              <li>
                Misafirin satın aldığı turu gerçekleştirecek olan ilgili yerel
                Tur Operatörü / Kaptan / Rehber.
              </li>
              <li>
                Resmi bulut iletişim, takvim ve ödeme altyapıları (Meta WhatsApp
                Cloud API, Google Calendar API, Stripe ve PayPal).
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              5. Yurt Dışı Aktarım, Güvenlik ve Saklama Süresi
            </h2>
            <p>
              Uluslararası turizm operasyonları gereği veriler Birleşik Krallık,
              Avrupa Birliği ve Türkiye arasında şifreli TLS bağlantıları ve
              standart veri güvenliği önlemleriyle aktarılabilir. Finansal ve
              rezervasyon kayıtları, sözleşmenin ifası ve Birleşik Krallık vergi
              mevzuatı gereklilikleri süresince (genellikle 6 yıl) muhafaza
              edilir.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              6. Veri Sahibi Olarak Haklarınız
            </h2>
            <p>
              UK GDPR ve KVKK kapsamında kişisel verilerinize erişme, düzeltme
              talep etme, silinmesini veya işlenmesinin kısıtlanmasını isteme ve
              itiraz etme haklarına sahipsiniz. Talepleriniz için bizimle
              doğrudan iletişime geçebilirsiniz:
            </p>
            <div className="rounded-2xl border border-white/12 bg-black/60 p-5 text-sm sm:text-base space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#DBFF26]" />
                Veri Koruma İletişim — Ata Travel Ltd.
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-white/50" />
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
              </p>
              <p>
                E-Posta:{" "}
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
