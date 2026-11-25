"use client";

import React from "react";
import { ArrowRight, Layers, Link2, Rocket } from "lucide-react";
import { PricingModelId } from "@/types/pricing";

interface OnboardingTimelineProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

const STEPS = [
  {
    step: "Step 1",
    title: "Send Your Tour Link",
    description:
      "Share your TripAdvisor page or existing tour list and prices. Zero technical forms.",
    icon: Link2,
  },
  {
    step: "Step 2",
    title: "We List You Everywhere",
    description:
      "We waive Viator's $29 fee, publish to every fair-paying OTA, and connect WhatsApp & email.",
    icon: Layers,
  },
  {
    step: "Step 3",
    title: "Bookings Run on Autopilot",
    description:
      "Confirmations, pickup pins, and vouchers go out automatically while payouts hit your account.",
    icon: Rocket,
  },
];

export function OnboardingTimeline({
  onOpenOnboarding,
}: OnboardingTimelineProps) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 relative py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg sm:text-xl font-bold text-[#DBFF26]">
            Go Live in 48 Hours
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Three Simple Steps. Zero Headaches.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="card-3d rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBFF26]/15 text-[#DBFF26] border border-[#DBFF26]/35">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold text-[#DBFF26]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Contrast 3D Bottom CTA Card */}
        <div className="card-3d-lime mt-14 rounded-3xl p-8 sm:p-12 text-white">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to fill more seats on autopilot?
              </h3>
              <p className="mt-3 text-lg sm:text-xl text-white/80">
                Get listed across Viator, GetYourGuide, Trip.com, Klook &amp;
                more for <strong className="text-[#DBFF26]">$0 upfront</strong>
                —or upgrade your entire direct-booking website with{" "}
                <strong className="text-white">Power Boost</strong>.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenOnboarding("pro")}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-8 py-4 text-lg font-extrabold text-black shadow-glow-lime transition duration-200 hover:bg-black hover:text-[#DBFF26]"
            >
              <span>Connect Your Tours Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
