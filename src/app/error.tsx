"use client";

import React, { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050608] px-6 text-center text-white">
      <h2 className="text-3xl font-extrabold text-white">
        Refreshing Page State...
      </h2>
      <p className="mt-3 max-w-md text-base text-white/70">
        The development cache was updated. Click below to reload cleanly.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-[#DBFF26] px-7 py-3.5 text-base font-extrabold text-black hover:bg-[#c8eb1f]"
      >
        Reload Page
      </button>
    </div>
  );
}
