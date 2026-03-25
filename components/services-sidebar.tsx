"use client"

import { useState, useEffect } from "react"

const CLOCKS = [
  { label: "Sydney Time", tz: "Australia/Sydney" },
  { label: "Los Angeles Time", tz: "America/Los_Angeles" },
]

function useTick() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

const services = [
  {
    title: "W.A.A.S — Premium site",
    description: "Get a custom built premium / sleek & professionally built site.",
    note: "*Includes set-up & maintenance guide",
    cta: "Hire Me",
    variant: "blue" as const,
    href: "/contact",
  },
  {
    title: "Design Services",
    description: "Brand identity, UI systems & visual direction built to scale.",
    note: "*From logo to full design system",
    cta: "Get a Quote",
    variant: "blue" as const,
    href: "/contact",
  },
  {
    title: "Electrochemical Medical Graded Device",
    description: "Get a Japanese Medical Graded Water Electrolyzer / Ioniser.",
    note: "*Purchase process includes completing documentation",
    cta: "Inquire Now",
    variant: "amber" as const,
    href: "/contact",
  },
]

export function ServicesSidebar() {
  const now = useTick()

  return (
    <aside className="hidden lg:flex flex-col w-[320px] xl:w-[360px] min-h-screen sticky top-0 h-screen border-r border-[#1a1a18] bg-[#0a0a0a] overflow-y-auto flex-shrink-0">
      {/* Dual clock */}
      <div className="pt-4 px-7 flex flex-col gap-2.5">
        {CLOCKS.map(({ label, tz }) => (
          <div key={tz}>
            <p className="text-[11px] font-mono text-[#3a3a38]">{label}</p>
            <p className="text-[11px] text-[#555552]">
              {now
                ? now.toLocaleTimeString("en-US", {
                    timeZone: tz,
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })
                : "—"}
            </p>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <img src="/lp.png" alt="Logo" width={40} height={40} style={{ borderRadius: '10px', width: '40px', height: '40px', objectFit: 'cover' }} className="mb-3" />
        <p className="text-[11px] italic text-[#3a3a38] leading-relaxed">
          Services &amp; Products offered
        </p>
      </div>

      {/* Service entries */}
      <div className="flex-1 px-6 py-6 space-y-7">
        {services.map((service) => (
          <div key={service.title} className="space-y-2">
            <p className="text-[13px] font-medium text-[#d0d0cc] leading-snug">
              {service.title}
            </p>
            <p className="text-[11px] text-[#424240] leading-relaxed">
              {service.description}
            </p>
            <p className="text-[10px] italic text-[#2e4a72]">
              {service.note}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-[#1a1a18] mt-auto">
        <p className="text-[11px] text-[#262624]">Llewellyn Y. Fisher</p>
        <p className="text-[11px] text-[#262624]">©2026</p>
      </div>
    </aside>
  )
}
