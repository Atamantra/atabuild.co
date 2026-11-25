"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const isTr = pathname.startsWith("/tr");

  let enHref = "/";
  let trHref = "/tr";

  if (pathname.startsWith("/tr/guide") || pathname.startsWith("/guide")) {
    enHref = "/guide";
    trHref = "/tr/guide";
  } else if (pathname.startsWith("/tr/terms") || pathname.startsWith("/terms")) {
    enHref = "/terms";
    trHref = "/tr/terms";
  } else if (
    pathname.startsWith("/tr/privacy") ||
    pathname.startsWith("/privacy")
  ) {
    enHref = "/privacy";
    trHref = "/tr/privacy";
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050608]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 sm:h-28 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href={isTr ? "/tr" : "/"}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBFF26] rounded-xl"
          aria-label="Ata Travel Ltd. Home"
        >
          <Logo size="lg" />
        </Link>

        {/* Minimal EN / TR Language Switcher */}
        <div
          className="inline-flex items-center rounded-full border border-white/15 bg-black/70 p-1 backdrop-blur-md"
          role="group"
          aria-label="Language Switcher"
        >
          <Link
            href={enHref}
            className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold tracking-wide transition ${
              !isTr
                ? "bg-[#DBFF26] text-black shadow"
                : "text-white/65 hover:text-white"
            }`}
          >
            EN
          </Link>
          <Link
            href={trHref}
            className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold tracking-wide transition ${
              isTr
                ? "bg-[#DBFF26] text-black shadow"
                : "text-white/65 hover:text-white"
            }`}
          >
            TR
          </Link>
        </div>
      </div>
    </header>
  );
}
