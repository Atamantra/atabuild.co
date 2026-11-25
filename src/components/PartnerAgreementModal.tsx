"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileCheck2, ShieldCheck, X } from "lucide-react";

interface PartnerAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerAgreementModal({
  isOpen,
  onClose,
}: PartnerAgreementModalProps) {
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
          aria-labelledby="partner-agreement-title"
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
                  id="partner-agreement-title"
                  className="text-xl font-extrabold text-white"
                >
                  Partner Terms &amp; Portfolio Agreement Summary
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-7 space-y-5 text-base leading-relaxed text-white/80">
              <div className="rounded-2xl border border-[#DBFF26]/35 bg-[#DBFF26]/10 p-5 text-sm sm:text-base text-white flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#DBFF26] mt-0.5" />
                <span>
                  <strong className="text-[#DBFF26]">UK Entity:</strong>{" "}
                  Operated by <strong>Ata Travel Ltd.</strong>, a United Kingdom
                  company registered in England &amp; Wales (Company No.
                  15948112), 71-75 Shelton Street, Covent Garden, London, WC2H
                  9JQ.
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#DBFF26]">
                  1. Ata Travels Portfolio, Detachment &amp; Review Rights
                </h4>
                <p className="mt-1">
                  All products created and published under this service are
                  listed on{" "}
                  <strong className="text-white">
                    Ata Travels&apos; official portfolio
                  </strong>
                  . If any detachment or termination is initiated, the products
                  will be{" "}
                  <strong className="text-white">
                    deactivated from your current TripAdvisor listing
                  </strong>
                  . Following detachment, the TripAdvisor listing owner is free
                  to create their own independent listings later if they wish.{" "}
                  <strong className="text-white">
                    Ata Travels retains the right to hold and keep all reviews
                  </strong>{" "}
                  accumulated on the products created under its portfolio.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  2. TripAdvisor Permission &amp; $0 Product Launch
                </h4>
                <p className="mt-1">
                  Connection requires only a standard TripAdvisor
                  &ldquo;Sales&rdquo; user permission invite—you retain full
                  ownership of your business profile. We cover the $29/product
                  review fee on eligible tours and distribute across fair-paying
                  global OTAs.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  3. Power Boost, Payouts &amp; Easy Cancellations
                </h4>
                <p className="mt-1">
                  Power Boost ($999.99 USD one-time + 2% per sale) includes a
                  custom website redesign, Stripe &amp; PayPal payment links,
                  and expanded OTA onboarding. Standard or weather cancellations
                  incur <strong className="text-[#DBFF26]">$0.00</strong> in
                  software fees; Operators remain responsible for valid tourism
                  licenses, insurance, and honoring confirmed departures.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black px-7 py-4">
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                <Link
                  href="/terms"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[#DBFF26] hover:underline"
                >
                  <span>Full Terms &amp; Conditions</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/privacy"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-white/75 hover:text-white hover:underline"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#DBFF26] px-6 py-2.5 text-sm font-extrabold text-black hover:bg-[#c8eb1f]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
