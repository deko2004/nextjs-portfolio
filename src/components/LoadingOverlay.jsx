"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load the shared animation component to reduce bundle size
const LaptopAnimation = dynamic(() => import("./LaptopAnimation"), {
  ssr: false,
  loading: () => (
    <div className="w-40 h-40 bg-gray-800 rounded-lg animate-pulse" />
  ),
});

export default function LoadingOverlay({ show }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) setVisible(true);
    else {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    visible && (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-primary bg-opacity-90 transition-opacity duration-400 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "opacity 0.4s" }}
        aria-busy={show}
        aria-live="polite"
      >
        <div className="w-40 h-40">
          <LaptopAnimation />
        </div>
      </div>
    )
  );
}
