"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingOverlay from "../components/LoadingOverlay";
import Aside from "../components/aside";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() =>
  import("../components/FloatingWhatsApp")
);

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <LoadingOverlay show={loading} />
      <div className="MainApp min-h-screen bg-primary flex relative">
        <Aside />
        <div
          className={`flex-1 overflow-y-auto transition-opacity duration-300 md:ml-[21rem] ${
            loading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {children}
        </div>
        <FloatingWhatsApp />
      </div>
    </>
  );
}
