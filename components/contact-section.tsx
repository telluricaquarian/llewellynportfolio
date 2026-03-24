"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Instagram", value: "@thethinkingspirit", href: "https://www.instagram.com/thethinkingspirit" },
]

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <section id="across-the-web" className="py-8 pb-12 md:py-12 md:pb-16 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">elsewhere</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#404040] via-[#2a2a2a] to-transparent hidden md:block" />

          <div className="md:pl-6 space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12">
            {links.map((link) => (
              <motion.div
                key={link.label}
                className="group flex items-center justify-between py-3 md:py-3 border-b border-[#1a1a1a] hover:border-[#404040] transition-colors duration-300 md:pl-4"
              >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 w-full min-w-0"
                  >
                    <span className="text-mono text-[#737373] group-hover:text-[#a1a1a1] transition-colors text-xs md:text-sm flex-shrink-0">
                      {link.label}
                    </span>
                    <span className="text-sm md:text-base text-[#a1a1a1] group-hover:text-[#fafafa] transition-colors duration-300 truncate">
                      {link.value}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#525252] group-hover:text-[#fafafa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                  </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
