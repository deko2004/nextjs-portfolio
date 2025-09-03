"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/assets/laptopanimation.json";

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
          <Lottie animationData={animationData} autoplay loop />
        </div>
      </div>
    )
  );
}
