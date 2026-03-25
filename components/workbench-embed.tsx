"use client"

import { motion } from "framer-motion"

// ── Static data ───────────────────────────────────────────────────────────────

const GRID_COLS = 14
const GRID_ROWS = 9

const TICKS = ["100", "200", "300", "400", "500", "600", "700", "800"]

// ─────────────────────────────────────────────────────────────────────────────

export function WorkbenchEmbed() {
  return (
    <motion.section
      className="py-12 md:py-16 relative"
      initial={{ opacity: 0.98 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
    >
      <div className="px-6 md:px-8">
        {/* Section Header - Minimalist */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="relative mb-10 md:mb-12"
        >
          <div className="h-px bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm font-medium">workbench</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Canvas Container */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative group"
        >
          <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-white/10 bg-[#080808]">

            {/* ── Grid background ──────────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical lines */}
              <div className="absolute inset-0 flex">
                {Array.from({ length: GRID_COLS }).map((_, i) => (
                  <div key={i} className="flex-1 border-r border-[#131313]" />
                ))}
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-0 flex flex-col">
                {Array.from({ length: GRID_ROWS }).map((_, i) => (
                  <div key={i} className="flex-1 border-b border-[#131313]" />
                ))}
              </div>
              {/* Center crosshair */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1c1c1c] -translate-x-px" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1c1c1c] -translate-y-px" />
            </div>

            {/* ── Ruler tick strip — top ────────────────────────────────── */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-[#0c0c0c] border-b border-[#1c1c1c] flex items-end px-2 gap-0 pointer-events-none z-10">
              {TICKS.map((t) => (
                <div key={t} className="flex-1 flex items-end justify-start gap-px pb-0.5">
                  <div className="w-px h-1.5 bg-[#2a2a2a]" />
                  <span className="font-mono text-[#2e2e2e] text-[7px] ml-0.5">{t}</span>
                </div>
              ))}
            </div>

            {/* ── Ruler tick strip — left ───────────────────────────────── */}
            <div className="absolute top-0 left-0 bottom-0 w-5 bg-[#0c0c0c] border-r border-[#1c1c1c] flex flex-col items-end pt-5 pointer-events-none z-10">
              {TICKS.map((t) => (
                <div key={t} className="flex-1 flex flex-col items-end justify-start gap-px pr-0.5 pt-0.5">
                  <div className="h-px w-1.5 bg-[#2a2a2a]" />
                  <span
                    className="font-mono text-[#2e2e2e] text-[7px]"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Canvas workspace area (offset by ruler strips) ─────────── */}
            <div className="absolute top-5 left-5 right-0 bottom-0">

              {/* ── Main large frame ─────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="absolute"
                style={{ top: "8%", left: "5%", width: "52%", height: "74%" }}
              >
                {/* Frame label */}
                <div className="absolute -top-4 left-0 flex items-center gap-1">
                  <span className="font-mono text-[#2e2e2e] text-[7px] tracking-widest">Frame 1</span>
                </div>
                <div className="w-full h-full border border-[#2a2a2a] rounded-sm bg-[#0e0e0e] overflow-hidden">
                  {/* Inner header bar */}
                  <div className="h-6 bg-[#111111] border-b border-[#1e1e1e] flex items-center px-2 gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#242424]" />
                    <div className="flex-1" />
                    <div className="w-8 h-1 bg-[#1e1e1e] rounded-full" />
                  </div>
                  {/* Inner body */}
                  <div className="p-3 space-y-2">
                    {/* Hero text placeholder */}
                    <div className="w-3/4 h-2 bg-[#1c1c1c] rounded-full" />
                    <div className="w-1/2 h-2 bg-[#181818] rounded-full" />
                    <div className="mt-3 w-full h-16 bg-[#111111] border border-[#1c1c1c] rounded-sm" />
                    {/* Card row */}
                    <div className="flex gap-1.5 mt-2">
                      {[40, 55, 40].map((w, i) => (
                        <div
                          key={i}
                          className="h-10 bg-[#111111] border border-[#1c1c1c] rounded-sm"
                          style={{ flex: w }}
                        />
                      ))}
                    </div>
                    <div className="w-2/3 h-1.5 bg-[#181818] rounded-full mt-2" />
                    <div className="w-1/3 h-1.5 bg-[#161616] rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* ── Secondary tall frame — right ─────────────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="absolute hidden md:block"
                style={{ top: "8%", right: "4%", width: "22%", height: "74%" }}
              >
                <div className="absolute -top-4 left-0">
                  <span className="font-mono text-[#2e2e2e] text-[7px] tracking-widest">Frame 2</span>
                </div>
                <div className="w-full h-full border border-[#222222] rounded-sm bg-[#0d0d0d] overflow-hidden">
                  <div className="h-5 bg-[#111111] border-b border-[#1c1c1c]" />
                  <div className="p-2 space-y-1.5">
                    <div className="w-full h-12 bg-[#111111] border border-[#1c1c1c] rounded-sm" />
                    <div className="w-3/4 h-1.5 bg-[#1c1c1c] rounded-full" />
                    <div className="w-1/2 h-1.5 bg-[#181818] rounded-full" />
                    <div className="mt-2 w-full h-8 bg-[#111111] border border-[#1c1c1c] rounded-sm" />
                    <div className="w-full h-8 bg-[#111111] border border-[#1c1c1c] rounded-sm" />
                    <div className="mt-1 w-2/3 h-1 bg-[#181818] rounded-full" />
                    <div className="w-1/2 h-1 bg-[#161616] rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* ── Small card — bottom-right of main frame ───────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="absolute hidden sm:block"
                style={{ bottom: "4%", left: "30%", width: "22%", height: "14%" }}
              >
                <div className="absolute -top-4 left-0">
                  <span className="font-mono text-[#2a2a2a] text-[7px] tracking-widest">Component/Button</span>
                </div>
                <div className="w-full h-full border border-[#222222] rounded-sm bg-[#0f0f0f] flex items-center justify-center gap-2 px-3">
                  <div className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
                  <div className="flex-1 h-1.5 bg-[#1e1e1e] rounded-full" />
                </div>
              </motion.div>

              {/* ── Accent module — contrast tile ─────────────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute hidden sm:block"
                style={{ top: "8%", left: "60%", width: "16%", height: "22%" }}
              >
                <div className="absolute -top-4 left-0">
                  <span className="font-mono text-[#2a2a2a] text-[7px] tracking-widest">Token/Color</span>
                </div>
                <div className="w-full h-full border border-[#242424] rounded-sm bg-[#101010] overflow-hidden">
                  <div className="h-1/2 bg-[#181818] border-b border-[#1e1e1e]" />
                  <div className="p-1.5 space-y-1">
                    <div className="w-full h-1 bg-[#1c1c1c] rounded-full" />
                    <div className="w-2/3 h-1 bg-[#191919] rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* ── Selection box (suggested selection) ──────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute pointer-events-none hidden md:block"
                style={{ top: "36%", left: "5%", width: "26%", height: "22%" }}
              >
                <div className="w-full h-full border border-[#3a3a3a]/60 rounded-sm">
                  {/* Corner handles */}
                  {[
                    "top-0 left-0 -translate-x-0.5 -translate-y-0.5",
                    "top-0 right-0 translate-x-0.5 -translate-y-0.5",
                    "bottom-0 left-0 -translate-x-0.5 translate-y-0.5",
                    "bottom-0 right-0 translate-x-0.5 translate-y-0.5",
                  ].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} w-1.5 h-1.5 border border-[#484848] bg-[#0e0e0e]`} />
                  ))}
                </div>
              </motion.div>

            </div>{/* end canvas workspace */}

            {/* ── Typographic overlay: "Llewellyn's Workbench" ─────────── */}
            <div
              className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center gap-0"
              aria-hidden="true"
            >
              {(["Llewellyn's", "Workbench"] as const).map((word) => (
                <span
                  key={word}
                  className="font-mono font-light leading-none tracking-tighter block text-4xl sm:text-5xl md:text-6xl"
                  style={{
                    background: [
                      "repeating-linear-gradient(180deg,",
                      "  transparent 0px, transparent 2px,",
                      "  rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 3px",
                      "),",
                      "linear-gradient(180deg, #ffffff 0%, #9a9a9a 100%)",
                    ].join(" "),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>

            {/* ── Interface controls — top overlay ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="absolute top-7 left-7 flex items-center gap-2 z-20 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 bg-[#0e0e0e] border border-[#232323] rounded px-2 py-1">
                <div className="w-1.5 h-1.5 bg-[#343434] rounded-sm" />
                <span className="font-mono text-[#3a3a3a] text-[7px] tracking-widest">Center View</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="absolute top-7 right-3 flex items-center gap-2 z-20 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 bg-[#0e0e0e] border border-[#232323] rounded px-2 py-1">
                <span className="font-mono text-[#3a3a3a] text-[7px] tracking-widest">300%</span>
              </div>
              <div className="flex items-center gap-1 bg-[#0e0e0e] border border-[#232323] rounded px-2 py-1">
                <div className="w-1.5 h-1.5 border border-[#343434]" />
                <div className="w-1.5 h-1.5 border border-[#2a2a2a]" />
              </div>
            </motion.div>

            {/* ── Status bar — bottom ───────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-6 bg-[#0b0b0b] border-t border-[#191919] flex items-center px-3 gap-4 z-20 pointer-events-none"
            >
              <span className="font-mono text-[#282828] text-[7px] tracking-widest">Lew&apos;s Work Station</span>
              <div className="flex-1" />
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#2e2e2e]" />
                <span className="font-mono text-[#282828] text-[7px]">x: 240  y: 180</span>
                <div className="w-px h-2.5 bg-[#1e1e1e]" />
                <span className="font-mono text-[#282828] text-[7px]">w: 1440  h: 900</span>
              </div>
            </motion.div>

          </div>

          {/* Subtle hover indicator for desktop */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-2.5 h-px bg-[#525252] transition-all duration-300 ease-out hidden md:block will-change-transform" />
        </motion.div>

        {/* CTA — points to # since no live embed is available */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="mt-6 md:mt-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[#525252] cursor-default select-none">
            <span>Workbench</span>
            <span className="font-mono text-[7px] tracking-widest text-[#383838] border border-[#232323] rounded px-1.5 py-0.5">in progress</span>
          </span>
        </motion.div>

        {/* Decorative separator */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
