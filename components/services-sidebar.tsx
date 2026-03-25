import Link from "next/link"

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
  return (
    <aside className="hidden lg:flex flex-col w-[320px] xl:w-[360px] min-h-screen sticky top-0 h-screen border-r border-[#1a1a18] bg-[#0a0a0a] overflow-y-auto flex-shrink-0">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 border-b border-[#1a1a18]">
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
            <div className="pt-1">
              <Link
                href={service.href}
                className={
                  service.variant === "blue"
                    ? "inline-flex items-center px-3 py-1.5 text-[10px] font-medium rounded border text-[#8ab4e8] border-[#1e3a6a] bg-[#080e18] hover:bg-[#0c1420] transition-colors duration-200"
                    : "inline-flex items-center px-3 py-1.5 text-[10px] font-medium rounded border text-[#d4a84a] border-[#4a2e08] bg-[#140d02] hover:bg-[#1c1103] transition-colors duration-200"
                }
              >
                {service.cta}
              </Link>
            </div>
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
