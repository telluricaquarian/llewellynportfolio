"use client";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export default function HireMeButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 [&>button]:rounded-xl [&>button]:px-6 [&>button]:py-6">
      <LiquidMetalButton
        label="Hire Me"
        onClick={() => (window.location.href = "/contact")}
      />
    </div>
  );
}
