import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "md" | "lg";
  className?: string;
}

export function Logo({ size = "lg", className = "" }: LogoProps) {
  const dimensions =
    size === "lg"
      ? "h-16 sm:h-20 w-auto"
      : "h-12 sm:h-14 w-auto";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/assets/logo-ata-white.png"
        alt="Ata Travel Ltd."
        width={112}
        height={112}
        className={`${dimensions} object-contain drop-shadow-[0_6px_18px_rgba(255,255,255,0.18)] transition-transform duration-200 hover:scale-105`}
        priority
      />
    </div>
  );
}
