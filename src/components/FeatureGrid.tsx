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

export function FeatureGrid() {
  return (
    <section
      id="whatsapp-automation"
      className="scroll-mt-24 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Clean, Bold Display Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#DBFF26]">
            Automated WhatsApp, Email &amp; Calendar Engine
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Stop Manually Adding Reservations — Allow Us to Do It For You.
          </h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/80">
            The moment a customer books online, our system automatically adds
            the reservation to your{" "}
            <strong className="text-white">Google Calendar</strong>, alerts your
            crew on <strong className="text-white">WhatsApp</strong>, and sends{" "}
            <strong className="text-white">automated emails</strong> &amp;
            vouchers—with effortless 1-step cancellations whenever plans change.
          </p>
        </div>

        {/* 3 High-Impact 3D Cards: Auto Reservation Entry + Guest Email/WhatsApp + Easy Cancellations */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* CARD 1: Automatic Reservation & Google Calendar Entry */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/35">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Auto Reservation Entry
                  </h3>
                  <p className="text-base text-white/65">
                    WhatsApp + Google Calendar Sync
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl rounded-tl-sm border border-[#25D366]/35 bg-[#0E2419] p-5 shadow-lg">
                  <p className="text-sm font-bold text-[#DBFF26] mb-1.5">
                    Instant Team WhatsApp Alert
                  </p>
                  <p className="text-base leading-relaxed text-white">
                    🚨 <strong>New Reservation Added:</strong>
                    <br />• Guest: <strong>Sarah Jenkins (4 PAX)</strong>
                    <br />• Phone &amp; Email Included
                    <br />• Pickup: <strong>Marina Hotel • 09:30</strong>
                  </p>
                  <div className="mt-2.5 flex items-center justify-end gap-1 text-xs font-bold text-[#25D366]">
                    <span>Synced to Google Calendar</span>
                    <CheckCheck className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-base font-semibold text-white/85">
              <CalendarCheck2 className="h-5 w-5 shrink-0 text-[#DBFF26]" />
              <span>Zero manual typing into notebooks or spreadsheets</span>
            </div>
          </div>

          {/* CARD 2: Automated Guest Email & WhatsApp Vouchers */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DBFF26]/15 text-[#DBFF26] border border-[#DBFF26]/35">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Automated Guest Emails
                  </h3>
                  <p className="text-base text-white/65">
                    Tickets, GPS Pins &amp; Reminders
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-[#0B0D12] p-5 shadow-xl space-y-3.5">
                <p className="text-sm text-white/60 border-b border-white/10 pb-3">
                  Subject:{" "}
                  <strong className="text-white">
                    Confirmed Ticket &amp; Pickup Map (#8842)
                  </strong>
                </p>
                <p className="text-base leading-relaxed text-white/85">
                  Guests automatically receive their confirmation email, live
                  Google Maps pickup pin, and 24h reminder—without you lifting a
                  finger.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 rounded-xl bg-white/[0.06] p-3 border border-white/10">
                    <QrCode className="h-5 w-5 shrink-0 text-[#DBFF26]" />
                    <span className="text-sm font-bold text-white">
                      QR Voucher
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
              <span>Automatic post-tour 5-star review requests</span>
            </div>
          </div>

          {/* CARD 3: Super Easy 1-Step Booking Cancellations */}
          <div className="card-3d rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00D68F]/15 text-[#00D68F] border border-[#00D68F]/35">
                  <RotateCcw className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Effortless Cancellations
                  </h3>
                  <p className="text-base text-white/65">
                    Cancel or Reschedule in Seconds
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-[#0B0D12] p-5 space-y-4">
                <p className="text-base leading-relaxed text-white/85">
                  Bad weather, high wind, or full capacity?{" "}
                  <strong className="text-white">
                    Cancelling a booking takes one quick message.
                  </strong>
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-white/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>
                      Removed from your Google Calendar automatically
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>
                      Instant refund &amp; polite notice sent via WhatsApp &amp;
                      email
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DBFF26]" />
                    <span>
                      <strong className="text-[#DBFF26]">$0.00 fee</strong> —
                      you never pay a cent on cancelled tours
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-base font-semibold text-[#DBFF26]">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Zero penalties • Instant OTA refund handling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
