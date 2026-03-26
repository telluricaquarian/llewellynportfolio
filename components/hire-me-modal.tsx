"use client"

import { useEffect, useState } from "react"

const SERVICES = [
  {
    label: "W.a.a.S - Premium Site",
    description: "Get a custom built premium / sleek & professionally built site.",
    media: { type: "image" as const, src: "/waas.png" },
  },
  {
    label: "Design Services",
    description: "Brand identity, UI systems & visual direction built to scale.",
    media: { type: "video" as const, src: "/ursz.mp4" },
  },
  {
    label: "Electrolyzer Device",
    description: "Get a Japanese Medical Graded Water Electrolyzer / Ioniser.",
    media: { type: "image" as const, src: "/electrolyzer.png" },
  },
]

interface HireMeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [selected, setSelected] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [social, setSocial] = useState("")

  // ESC key close
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  const service = SERVICES[selected]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0e0e0e] border border-[#1a1a18] rounded-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#525252] hover:text-white transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Left panel — media */}
        <div className="w-full md:w-1/2 bg-[#080808] flex items-center justify-center h-[40vh] md:h-auto max-h-[40vh] md:max-h-full overflow-hidden">
          {service.media.type === "video" ? (
            <video
              key={service.media.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={service.media.src} />
            </video>
          ) : (
            <img
              key={service.media.src}
              src={service.media.src}
              alt={service.label}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Right panel — form */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 p-7">
          <p className="text-white italic text-sm">Select Product or Service:</p>

          {/* Dropdown */}
          <div className="relative">
            <select
              value={selected}
              onChange={(e) => setSelected(Number(e.target.value))}
              className="w-full appearance-none bg-transparent border border-[#333] rounded-full pl-4 pr-10 py-2 text-white text-sm focus:outline-none focus:border-[#555] cursor-pointer"
            >
              {SERVICES.map((s, i) => (
                <option key={s.label} value={i} className="bg-[#0e0e0e]">
                  {s.label}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#555] text-xs">▾</span>
          </div>

          {/* Dynamic description */}
          <p className="text-[#555552] text-xs leading-relaxed">{service.description}</p>

          {/* Input fields */}
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="*Name:"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#444]"
            />
            <input
              type="email"
              placeholder="*Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#444]"
            />
            <input
              type="text"
              placeholder="*Social Media:"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              className="w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[#444]"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            className="self-start bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
