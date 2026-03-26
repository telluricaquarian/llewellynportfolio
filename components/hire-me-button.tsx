"use client";
import { useState } from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HireMeModal } from "@/components/hire-me-modal";

export default function HireMeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 [&>button]:rounded-xl [&>button]:px-6 [&>button]:py-6">
        <LiquidMetalButton
          label="Hire Me"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
