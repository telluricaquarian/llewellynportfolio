"use client"

import { motion, useReducedMotion } from "framer-motion"

// ── Network map data ──────────────────────────────────────────────────────────

const NODES = [
  { id: "a", x: 8,  y: 50 },
  { id: "b", x: 27, y: 22 },
  { id: "c", x: 27, y: 75 },
  { id: "d", x: 50, y: 36 },
  { id: "e", x: 50, y: 65 },
  { id: "f", x: 72, y: 22 },
  { id: "g", x: 72, y: 52 },
  { id: "h", x: 88, y: 38 },
]

const EDGES: [string, string][] = [
  ["a", "b"], ["a", "c"],
  ["b", "d"], ["c", "d"], ["c", "e"],
  ["d", "f"], ["d", "g"], ["e", "g"],
  ["f", "h"], ["g", "h"],
]

const METRICS = [
  { label: "SIG", value: 68 },
  { label: "OUT", value: 45 },
  { label: "RND", value: 82 },
]

// ── Waveform data ─────────────────────────────────────────────────────────────

const BARS = [
  38, 62, 28, 75, 50, 42, 68, 32, 57, 72,
  38, 85, 47, 32, 62, 78, 42, 65, 52, 38,
]

// Deterministic min scaleY per bar (0.20 – 0.75)
const BAR_SCALES = BARS.map((_, i) => 0.2 + ((i * 7) % 11) / 20)

// ── Ticker labels ─────────────────────────────────────────────────────────────

const TICKER = [
  "SIGNAL", "INTERFACE", "SYSTEMS", "MOTION",
  "PROTOTYPE", "LOGIC", "RENDER", "ABSTRACT",
]

// ── Noise layer text (static, very low opacity) ───────────────────────────────

const NOISE_TEXT =
  "01 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ○ ≋ · 00 11 01 10 ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 " +
  "01 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ○ ≋ · 00 11 01 10 ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 " +
  "· ◦ ∿ ≈ 01 10 ∷ ↯ ↺ ∞ ◌ ○ ≋ 00 11 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 01 10 " +
  "01 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ○ ≋ · 00 11 01 10 ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 " +
  "· ◦ ∿ ≈ 01 10 ∷ ↯ ↺ ∞ ◌ ○ ≋ 00 11 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 01 10 " +
  "01 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ○ ≋ · 00 11 01 10 ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 " +
  "· ◦ ∿ ≈ 01 10 ∷ ↯ ↺ ∞ ◌ ○ ≋ 00 11 10 · ◦ ∿ ≈ ∷ ↯ ↺ ∞ ◌ ⟩ ⟨ ▪ ≋ 10 01 11 00 01 10 "

// ─────────────────────────────────────────────────────────────────────────────

export function IdeationStationPreview() {
  const reduced = useReducedMotion()

  const nodeById: Record<string, { id: string; x: number; y: number }> =
    Object.fromEntries(NODES.map((n) => [n.id, n]))

  return (
    <div className="relative w-full h-full bg-[#080808] flex overflow-hidden select-none">

      {/* ── Left: system network tile ──────────────────────────────────────── */}
      <div className="relative flex-1 border-r border-[#181818]">

        {/* Terminal caption */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono text-[#2a2a2a] text-[8px] tracking-widest">
            ideation-station
          </span>
          <span className="font-mono text-[#1c1c1c] text-[8px]"> ~ interactive</span>
        </div>

        {/* Network SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Edges */}
          {EDGES.map(([fromId, toId], i) => {
            const a = nodeById[fromId]
            const b = nodeById[toId]
            if (!a || !b) return null
            return (
              <motion.line
                key={`e${i}`}
                x1={a.x} y1={a.y}
                x2={b.x} y2={b.y}
                stroke="#242424"
                strokeWidth="0.35"
                initial={{ opacity: 0 }}
                animate={{ opacity: reduced ? 0.7 : [0.2, 0.7, 0.2] }}
                transition={
                  reduced
                    ? { duration: 0.3 }
                    : {
                        duration: 3 + i * 0.12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }
                }
              />
            )
          })}

          {/* Nodes */}
          {NODES.map((node, i) => (
            <g key={node.id}>
              {/* Expanding pulse ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={1.2}
                fill="none"
                stroke="#282828"
                strokeWidth="0.25"
                animate={
                  reduced
                    ? {}
                    : { r: [1.2, 4, 1.2], opacity: [0.6, 0, 0.6] }
                }
                transition={
                  reduced
                    ? {}
                    : { duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 0.28 }
                }
              />
              {/* Core dot */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={1.0}
                fill="#3a3a3a"
                animate={
                  reduced
                    ? { opacity: 1 }
                    : { opacity: [0.5, 1, 0.5] }
                }
                transition={
                  reduced
                    ? {}
                    : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.28 }
                }
              />
            </g>
          ))}
        </svg>

        {/* Metric mini-cards — hidden on xs to avoid overflow */}
        <div className="absolute bottom-3 left-3 hidden sm:flex gap-2">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="bg-[#0d0d0d] border border-[#1c1c1c] rounded px-2 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            >
              <div className="font-mono text-[#2e2e2e] text-[7px] tracking-widest mb-1">
                {m.label}
              </div>
              <div className="w-10 h-px bg-[#1c1c1c] overflow-hidden">
                <motion.div
                  className="h-full bg-[#454545]"
                  initial={{ width: 0 }}
                  animate={{ width: `${m.value}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                />
              </div>
              <div className="font-mono text-[#3e3e3e] text-[7px] mt-1">{m.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Right: waveform + ticker ────────────────────────────────────────── */}
      <div className="flex flex-col" style={{ width: "30%" }}>

        {/* Waveform panel */}
        <div className="flex-1 flex items-end justify-center gap-px px-2 pb-3 pt-7 relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <span className="font-mono text-[#1e1e1e] text-[7px] tracking-widest">
              WAVEFORM
            </span>
          </div>
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-[#252525] rounded-t-sm"
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
              animate={reduced ? {} : { scaleY: [1, BAR_SCALES[i], 1] }}
              transition={{
                duration: 1.6 + (i % 7) * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.07,
              }}
            />
          ))}
        </div>

        {/* Ticker strip */}
        <div className="h-8 flex items-center overflow-hidden border-t border-[#181818] bg-[#060606]">
          <motion.div
            className="flex items-center gap-6 font-mono text-[#222222] text-[7px] tracking-widest whitespace-nowrap"
            animate={reduced ? {} : { x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <span key={i} className="flex-shrink-0">
                {item}
                <span className="ml-4 text-[#181818]">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Noise layer: static chars at very low opacity ──────────────────── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="font-mono text-white text-[7px] leading-[11px] tracking-widest break-all p-3 w-full h-full"
          style={{ opacity: 0.06 }}
        >
          {NOISE_TEXT}
        </div>
      </div>

      {/* ── Typographic overlay: "Ideation / Station" ──────────────────────── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center gap-0"
        aria-hidden="true"
      >
        {(["Ideation", "Station"] as const).map((word) => (
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
    </div>
  )
}
