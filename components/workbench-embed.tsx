"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

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

        {/* Canvas Container - Optimized for all devices */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative group"
        >
          <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-white/10 bg-black">
            {/* If still showing placeholder, replace src with the exact value from Figma's "Copy embed code" dialog */}
            <iframe
              src="https://www.figma.com/proto/RQ8hnPJ0wS2PMNeHqaO2kE/Team-Library?page-id=0%3A1&node-id=1-2&p=f&viewport=109%2C366%2C0.4&t=3FCdY3neu34Yii4S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Subtle hover indicator for desktop */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-2.5 h-px bg-[#525252] transition-all duration-300 ease-out hidden md:block will-change-transform" />
        </motion.div>

        {/* Premium Fullscreen CTA - Primary interaction */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="mt-6 md:mt-8"
        >
          <a
            href="https://www.figma.com/design/7epMMjqEYLXxHSEfxa5POC/Lew-s-Work-Station?node-id=0-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[#fafafa] hover:text-white transition-all duration-300 ease-out hover:gap-3.5 active:scale-95 md:active:scale-100"
          >
            <span>Explore fullscreen</span>
            <ExternalLink className="w-4 h-4 text-[#737373] group-hover/cta:text-white group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all duration-300 ease-out will-change-transform" />
          </a>
        </motion.div>

        {/* Decorative separator - elegant spacing */}
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
