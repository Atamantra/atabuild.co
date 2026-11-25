import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Şartlar ve Koşullar | Ata Travel Ltd. (B2B Partnerlik Sözleşmesi)",
  description:
    "Ata Travel Ltd. OTA dağıtımı, TripAdvisor bağlantısı, portfolyo yönetimi, yorum hakları ve otomatik rezervasyon hizmetlerine ilişkin resmi B2B Şartlar ve Koşullar.",
};

export default function TurkishTermsAndConditionsPage() {
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
            href="/tr/privacy"
            className="text-sm font-bold text-[#DBFF26] underline underline-offset-4 hover:text-white"
          >
            Gizlilik Politikasını İncele →
          </Link>
        </div>

        {/* Header Card */}
        <div className="card-3d rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DBFF26]/15 border border-[#DBFF26]/35 px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#DBFF26]">
            <Scale className="h-4 w-4" />
            B2B Partnerlik Şartlar ve Koşulları
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Hizmet Şartları ve Koşulları
          </h1>

          <p className="mt-3 text-base sm:text-lg text-white/75">
            Son Güncelleme: Kasım 2026 • İşletici Şirket:{" "}
            <strong className="text-white">Ata Travel Ltd.</strong> (İngiltere
            &amp; Galler Kayıtlı Şirket No: 15948112)
          </p>

          {/* Önemli Portfolyo, Ayrılık ve Yorum Mülkiyeti Bildirimi */}
          <div className="mt-7 rounded-2xl border-2 border-[#DBFF26] bg-[#DBFF26]/10 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-[#DBFF26] font-extrabold text-lg">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>
                Önemli Portfolyo, Ayrılık ve Yorum Sahipliği Kuralları
              </span>
            </div>
            <ul className="space-y-2.5 text-base text-white/90 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Ata Travels Portfolyosunda Listeleme:</strong> Bu iş
                  birliği kapsamında oluşturulan, finanse edilen ve yayına
                  alınan tüm tur ve aktivite ürünleri resmi{" "}
                  <strong>Ata Travels (Ata Travel Ltd.) portfolyosu</strong>{" "}
                  altında listelenir ve yönetilir.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>
                    Ayrılık Durumunda Ürünlerin Devre Dışı Bırakılması:
                  </strong>{" "}
                  Herhangi bir ayrılık, iş birliğinin sonlandırılması veya yetki
                  iptali söz konusu olduğunda, Ata Travels portfolyosundaki
                  ürünler{" "}
                  <strong>
                    mevcut TripAdvisor işletme sayfasından ve bağlı OTA
                    kanallarından devre dışı bırakılır (pasife alınır)
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Sonradan Kendi İlanınızı Oluşturma Hakkı:</strong>{" "}
                  Ayrılık ve ürünlerin devre dışı bırakılmasının ardından,
                  TripAdvisor işletme sahibi dilerse daha sonra kendi
                  TripAdvisor sayfasında kendi adına yeni ve bağımsız ürün
                  listelemeleri oluşturmakta tamamen özgürdür.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#DBFF26]" />
                <span>
                  <strong>Yorumları Elinde Tutma Hakkı:</strong>{" "}
                  <strong>
                    Ata Travels, kendi portfolyosu altında oluşturulan ve
                    yönetilen ürün ilanlarında biriken tüm müşteri yorumlarını
                    elinde tutma ve muhafaza etme hakkına sahiptir.
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detaylı Maddeler */}
        <div className="card-3d mt-8 rounded-3xl p-8 sm:p-10 space-y-8 text-base sm:text-lg leading-relaxed text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-white">
              1. Taraflar ve Hizmetin Kapsamı
            </h2>
            <p>
              İşbu Hizmet Şartları ve Koşulları (&ldquo;Sözleşme&rdquo;);
              merkezi 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ,
              Birleşik Krallık adresinde bulunan ve İngiltere &amp;
              Galler&apos;de 15948112 şirket numarasıyla kayıtlı olan{" "}
              <strong className="text-white">Ata Travel Ltd.</strong>{" "}
              (&ldquo;Ata Travels&rdquo;, &ldquo;AtaBuild&rdquo; veya
              &ldquo;Biz&rdquo;) ile OTA dağıtımı, rezervasyon otomasyonu veya
              web geliştirme hizmetlerimizi kullanan tur operatörü, tekne
              sahibi, aktivite sağlayıcısı veya seyahat acentası
              (&ldquo;Partner&rdquo;, &ldquo;Operatör&rdquo; veya
              &ldquo;Siz&rdquo;) arasındaki ticari (B2B) ilişkiyi düzenler.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              2. Ata Travels Portfolyo Yapısı, Ayrılık ve Yorum Hakları
            </h2>
            <p>
              <strong>2.1 Portfolyo Kaydı:</strong> TripAdvisor üzerinden Satış
              (Sales) yetkisi vererek veya tur bilgilerinizi tarafımıza
              ileterek; hazırladığımız, başvuru ücretini karşıladığımız,
              optimize ettiğimiz ve dağıttığımız tüm satılabilir tur ürünlerinin{" "}
              <strong className="text-white">
                Ata Travels tedarikçi ve dağıtım portfolyosu
              </strong>{" "}
              altında yayınlanacağını ve online rezervasyon akışı için mevcut
              TripAdvisor işletme sayfanıza bağlanacağını kabul ve beyan
              edersiniz.
            </p>
            <p>
              <strong>2.2 Ayrılık Halinde Devre Dışı Bırakma:</strong> Taraflardan
              herhangi biri yazılı bildirimle iş birliğini sonlandırma (ayrılık)
              talebinde bulunabilir. Herhangi bir ayrılık talebi, Satış
              kullanıcı yetkisinin kaldırılması veya sözleşmenin sona ermesi
              durumunda,{" "}
              <strong className="text-white">
                Ata Travels portfolyosu altında oluşturulan tüm satılabilir
                ürünler mevcut TripAdvisor sayfanızdan ve bağlı tüm global OTA
                kanallarından devre dışı bırakılır ve bağlantısı kesilir
              </strong>
              . Devre dışı bırakma tarihinden önce onaylanmış olan ileri tarihli
              rezervasyonlar Operatör tarafından eksiksiz gerçekleştirilmek veya
              OTA kurallarına uygun şekilde iade edilmek zorundadır.
            </p>
            <p>
              <strong>
                2.3 İşletme Sahibinin Sonradan Yeni İlan Açma Özgürlüğü:
              </strong>{" "}
              Ana TripAdvisor işletme profilinizin veya marka adınızın mülkiyeti
              üzerinde hiçbir hak iddia etmeyiz. Ayrılık sonrası portfolyo
              ürünlerimiz devre dışı bırakıldığında,{" "}
              <strong className="text-white">
                işletme sahibi dilerse daha sonra kendi TripAdvisor sayfasında
                doğrudan kendi adına yeni ve bağımsız ürün ilanları oluşturmakta
                tamamen özgürdür
              </strong>{" "}
              (ilgili platformların standart başvuru ücretleri ve kuralları
              işletme sahibine aittir).
            </p>
            <p>
              <strong>2.4 Yorumların Muhafaza Edilmesi Hakkı:</strong> Ürün
              bazlı müşteri yorumları doğrudan Ata Travels tedarikçi hesabı
              altında yönetilen ürün kodlarına (SKU), kalite kontrolüne, müşteri
              iletişimine, otomatik tur sonrası yorum davetlerine ve ön başvuru
              sponsorluğuna bağlı olduğundan;{" "}
              <strong className="text-[#DBFF26]">
                Ata Travels, bu portfolyo ürünlerinde biriken tüm yorumları
                elinde tutma ve muhafaza etme hakkına münhasıran sahiptir
              </strong>
              . Ata Travels portfolyo ürünlerine bağlı yorumlar sonradan
              oluşturulacak yeni bağımsız ürün kodlarına devredilemez.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              3. $29 Başvuru Ücreti Muafiyeti ve İçerik Mülkiyeti
            </h2>
            <p>
              Uygun bulunan turlarda standart $29.00 USD tutarındaki OTA ürün
              inceleme/başvuru ücreti Ata Travels tarafından karşılanır. Ata
              Travels ekibi tarafından yazılan yabancı dil SEO metinleri,
              fiyatlandırma kurguları, otomatik WhatsApp/e-posta şablonları ve
              takvim entegrasyon yazılımları Ata Travel Ltd.&apos;nin fikri
              mülkiyetindedir. Operatörün sağladığı fotoğraf ve logolar
              Operatöre ait olup, iş birliği süresince global pazarlama ve satış
              amacıyla Ata Travels&apos;a ücretsiz kullanım izni verilmiş
              sayılır.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              4. Ticari Paketler, Komisyonlar ve Hakediş Ödemeleri
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Performans Paketleri:</strong> Starter (tamamlanan satış
                başına %4, min. $3.00 USD), Pro (tamamlanan satış başına %7) ve
                Scale (aylık $39.00 USD + tamamlanan satış başına %2.5)
                oranları, ilgili OTA kanal komisyonuna (aksi yazılı
                kararlaştırılmadıkça standart %30) ek olarak uygulanır.
              </li>
              <li>
                <strong>Net Fiyat (Wholesale) Garantisi:</strong> Yazılı olarak
                mutabık kalınan turlarda Operatör kişi başı sabit net fiyatını
                belirler; Ata Travels perakende satış fiyatını, OTA
                komisyonlarını ve otomasyon giderlerini bu tutarın üzerine
                ekleyerek yönetir ve tamamlanan her misafir için net tutarın
                %100&apos;ünü öder.
              </li>
              <li>
                <strong>Power Boost Paketi ($999.99 USD + %2):</strong> Tek
                seferlik $999.99 USD kurulum ücreti ve satış başına %2 yazılım
                komisyonu karşılığında özel web sitesi yenilemesini, direkt
                Stripe &amp; PayPal ödeme linklerini, genişletilmiş OTA kanal
                kayıtlarını ve tam otomasyonu kapsar. Tasarım ve teknik kurulum
                başladıktan sonra tek seferlik kurulum ücreti iade edilmez.
              </li>
              <li>
                <strong>Hakediş Ödeme Takvimi:</strong> Operatör hakedişleri,
                yalnızca sorunsuz tamamlanmış ve iade/itiraz konusu olmamış
                rezervasyonlar için, ilgili OTA veya ödeme kuruluşundan tahsilat
                gerçekleştikten sonra banka/döviz transfer masrafları düşülerek
                ödenir.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              5. İptaller, İadeler ve Operatör Kaynaklı Aksaklıklar
            </h2>
            <p>
              <strong>5.1 Standart ve Hava Muhalefeti İptalleri:</strong>{" "}
              Misafirin ücretsiz iptal süresi içinde (genellikle turdan 24 saat
              öncesine kadar) yaptığı iptallerde veya Operatörün güvenli olmayan
              hava/deniz koşulları nedeniyle zamanında bildirdiği iptallerde{" "}
              <strong className="text-[#DBFF26]">$0.00</strong> yazılım ücreti
              alınır.
            </p>
            <p>
              <strong>5.2 Operatör Kusuru / Tura Çıkmama (No-Show):</strong>{" "}
              Operatörün onaylanmış bir rezervasyonu geçerli mücbir sebep
              olmaksızın gerçekleştirmemesi, kontenjanını kapatmayı unutması
              veya misafiri mağdur etmesi halinde; doğacak misafir iadeleri,
              ters ibrazlar (chargeback) ve ilgili OTA platformunun keseceği
              cezai kesintiler tamamen Operatöre aittir ve bekleyen
              hakedişlerden mahsup edilebilir.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              6. Yasal Ruhsatlar, Güvenlik ve Sigorta Sorumluluğu
            </h2>
            <p>
              Ata Travel Ltd. yalnızca teknoloji, dijital pazarlama ve online
              rezervasyon dağıtım altyapısı sunar; partner turların sahadaki
              fiziki uygulayıcısı değildir. Operatör; kullanılan tüm tekne,
              araç, ekipman, kaptan, pilot ve rehberlerin yürürlükteki tüm resmi
              belgelere (TÜRSAB, Liman Başkanlığı, Sivil Havacılık vb. izinler),
              zorunlu yolcu/üçüncü şahıs mali mesuliyet sigortalarına ve
              güvenlik standartlarına sahip olduğunu beyan ve taahhüt eder. Tur
              sırasında meydana gelebilecek her türlü kaza, yaralanma, maddi
              hasar veya idari yaptırımdan münhasıran Operatör sorumludur.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              7. Otomatik WhatsApp, E-Posta ve Takvim Bildirimleri
            </h2>
            <p>
              Otomatik WhatsApp Business mesajları, e-posta biletleri ve Google
              Takvim kayıtları üçüncü taraf bulut sağlayıcıları (Meta, Google,
              Stripe, PayPal ve OTA API&apos;leri) üzerinden çalışır. Operatör,
              bildirim numarasını ve Google Takvimini aktif tutmakla ve günlük
              operasyon listesini kontrol etmekle yükümlüdür.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              8. Fiyat Eşitliği ve Doğru Bilgi Paylaşımı
            </h2>
            <p>
              Operatör; tur saatlerini, dahil olan hizmetleri ve alınış
              bölgelerini doğru bildirmeyi ve Ata Travels üzerinden yayınlanan
              perakende satış fiyatlarını aynı kanallardaki standart halka açık
              fiyatlarından daha yüksek tutmamayı kabul eder.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-extrabold text-white">
              9. Uygulanacak Hukuk ve İletişim
            </h2>
            <p>
              İşbu Sözleşme <strong>İngiltere ve Galler</strong> yasalarına
              tabidir ve doğabilecek uyuşmazlıklarda Londra (Birleşik Krallık)
              mahkemeleri yetkilidir.
            </p>
            <div className="rounded-2xl border border-white/12 bg-black/60 p-5 text-sm sm:text-base space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#DBFF26]" />
                Ata Travel Ltd. (UK Şirket No: 15948112)
              </p>
              <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</p>
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
