"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", "G-DY2PYJKGNR", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
