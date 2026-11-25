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

interface TripAdvisorConnectSectionProps {
  onOpenOnboarding: (preferredModel?: PricingModelId) => void;
}

const INVITE_EMAIL = "info@atatravels.com";

export function TripAdvisorConnectSection({
  onOpenOnboarding,
}: TripAdvisorConnectSectionProps) {
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
      <div id="how-it-works" className="scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D68F]/40 bg-[#00D68F]/15 px-4 py-1.5 text-sm font-extrabold text-[#00D68F]">
            <ShieldCheck className="h-4 w-4" />
            No Passwords Needed • Only a Permission Request
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            How to Connect Us to Your{" "}
            <span className="text-[#00D68F]">TripAdvisor</span> Page
          </h2>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/80">
            Connecting takes less than 60 seconds. You keep full ownership of
            your account—simply send a{" "}
            <strong className="text-white">Sales User Permission</strong> invite
            in 6 easy clicks.
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
                  Login To Your Account
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Click Your Profile Icon
              </h3>
              <p className="mt-2 text-base text-white/75">
                Log in to TripAdvisor and click your profile picture at the{" "}
                <strong className="text-white">top-right corner</strong>.
              </p>
            </div>

            {/* Mini UI Infographic Mockup */}
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
                  <span className="text-xs font-bold text-slate-400">USD</span>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-4 ring-[#00D68F]">
                    YOU
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
                  Profile Menu
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Click &ldquo;My Business&rdquo;
              </h3>
              <p className="mt-2 text-base text-white/75">
                In the dropdown menu that opens, click on{" "}
                <strong className="text-white">My business</strong>.
              </p>
            </div>

            {/* Mini UI Infographic Mockup */}
            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-3 text-slate-800 shadow-lg space-y-1 text-xs font-semibold">
              <div className="px-3 py-1 text-slate-400">Profile</div>
              <div className="px-3 py-1 text-slate-400">Bookings</div>
              <div className="flex items-center justify-between rounded-lg bg-[#00AA6C] px-3 py-2 text-sm font-extrabold text-white shadow">
                <span>My business</span>
                <span>← Click</span>
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
                  Find Your Listing
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Click on &ldquo;Manage&rdquo;
              </h3>
              <p className="mt-2 text-base text-white/75">
                Locate your company or tour listing and click the{" "}
                <strong className="text-white">Manage</strong> button next to
                it.
              </p>
            </div>

            {/* Mini UI Infographic Mockup */}
            <div className="mt-6 rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 shrink-0 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center font-bold text-amber-800 text-xs">
                  TOUR
                </div>
                <div className="truncate">
                  <p className="text-xs font-extrabold uppercase text-slate-900">
                    Your Listing
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    Operator Dashboard
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
                  Access Settings
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Open &ldquo;User Permissions&rdquo;
              </h3>
              <p className="mt-2 text-base text-white/75">
                Click <strong className="text-white">User permissions</strong>{" "}
                on the left menu, then click{" "}
                <strong className="text-white">
                  View original user permissions
                </strong>
                .
              </p>
            </div>

            {/* Mini UI Infographic Mockup */}
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

          {/* STEP 5 — Interactive Copy Email Card */}
          <div className="card-3d-lime rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBFF26] text-lg font-extrabold text-black">
                  5
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#DBFF26]">
                  Invite New User
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Send Invite to Our Email
              </h3>
              <p className="mt-2 text-base text-white/85">
                Click <strong>+ Invite New User</strong>, paste the exact email
                below, and click <strong>Send Invite</strong>:
              </p>
            </div>

            {/* Copyable Official Email Box */}
            <div className="mt-6 space-y-2.5">
              <div className="rounded-2xl border border-[#DBFF26]/50 bg-black p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D68F] mb-1.5">
                  <UserPlus className="h-4 w-4" />
                  <span>+ Invite New User Email:</span>
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
                      <span>Copied Exact Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email Address</span>
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
                  Set Affiliation &amp; Finish
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Select &ldquo;Sales&rdquo; Affiliation
              </h3>
              <p className="mt-2 text-base text-white/75">
                Assign <strong className="text-white">Sales</strong> under
                Affiliation. That&apos;s it—we build and launch your listings
                from there!
              </p>
            </div>

            {/* Mini UI Infographic Dropdown Mockup */}
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

        {/* Link to Full Interactive Infographic Pages + Onboarding Trigger */}
        <div className="card-3d mt-12 rounded-3xl p-8 sm:p-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want the Complete Visual Portfolio &amp; Tour Setup Infographics?
            </h3>
            <p className="mt-2 text-base sm:text-lg text-white/75">
              Explore our step-by-step infographic pages covering the{" "}
              <strong className="text-white">$29 → $0 Free Launch</strong>, the{" "}
              <strong className="text-white">8-Point Tour Checklist</strong>,
              and <strong className="text-white">Automated Workflows</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#DBFF26] bg-[#DBFF26] px-7 py-4 text-base sm:text-lg font-extrabold text-black shadow-glow-lime transition hover:bg-black hover:text-[#DBFF26]"
            >
              <BookOpen className="h-5 w-5" />
              <span>Open Infographic Pages</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <button
              type="button"
              onClick={() => onOpenOnboarding("pro")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-4 text-base font-bold text-white transition hover:border-[#DBFF26] hover:text-[#DBFF26]"
            >
              <span>Sent Invite? Let Us Know</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
