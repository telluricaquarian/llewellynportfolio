"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { IdeationStationPreview } from "./previews/ideation-station-preview"

export function FeaturedProject() {
  const projects = [
    {
      id: "areculateir",
      title: "Areculateir",
      funding: null,
      image: "/images/areculateir.png",
      alt: "Areculateir - Brand and systems studio",
      description: "Areculateir is a brand and systems studio focused on building websites, agentic workflows, and productized digital infrastructure. The work spans identity, architecture, and execution—from zero to shipped.",
      sections: [
        {
          title: "The Focus",
          content: "Most studios separate design from development. Areculateir treats them as the same problem. Every engagement starts with understanding what the system needs to do, then building the identity and infrastructure that make it work.",
        },
        {
          title: "What We Build",
          content: "Websites, brand systems, agentic workflow tooling, and digital products. Built to be maintainable, extensible, and visually credible from day one.",
        },
        {
          title: "The Approach",
          content: "Minimal surface area, maximum clarity. Every output is designed to communicate competence and earn trust without requiring explanation.",
        },
      ],
      role: "Founder, Design & Development",
      links: [
        { text: "Areculateir", url: "#" },
      ],
    },
    {
      id: "ideation-station",
      title: "Ideation Station",
      funding: null,
      previewType: "ideationBento",
      image: "/images/sylvan-featured.gif",
      alt: "Ideation Station - Concept and experimentation environment",
      description: "Ideation Station is a concept and experimentation environment for prototyping ideas, interfaces, and design-forward digital products. It exists to keep the creative process fast and the output honest.",
      sections: [
        {
          title: "The Problem",
          content: "Good ideas stall when the path from concept to prototype is too long. Ideation Station compresses that gap—creating a dedicated space where exploration is the point and nothing needs to be production-ready to be valuable.",
        },
        {
          title: "What We Build",
          content: "Interface prototypes, interaction experiments, visual systems, and product concepts. Some become products. All of them inform what gets built next.",
        },
        {
          title: "The Approach",
          content: "Ship the sketch. Learn from it. Refine what matters. The goal is a high volume of honest creative output, not polished work that took too long.",
        },
      ],
      role: "Founder, Product & Design",
      links: [
        { text: "Ideation Station", url: "#" },
      ],
    },
    {
      id: "avantesavante",
      title: "Avantsavant",
      funding: null,
      image: "/images/avantbackground.png",
      alt: "Avantsavant - Intellectual and educational platform",
      description: "Avantesavante is an intellectual and educational platform oriented toward keeping pace with software, AI, and structured learning. It is built for people who take their own development seriously.",
      sections: [
        {
          title: "The Premise",
          content: "The pace of change in software and AI makes deliberate, structured learning a competitive advantage. Avantesavante exists to make that learning organized, honest, and ongoing.",
        },
        {
          title: "What It Covers",
          content: "Software development, AI systems, product thinking, and the intersections between them. Content is practical and grounded in real work rather than abstracted theory.",
        },
        {
          title: "The Approach",
          content: "Depth over volume. Every piece of content is meant to leave you better equipped than before, not just informed.",
        },
      ],
      role: "Founder, Content & Platform",
      links: [
        { text: "Avantesavante", url: "#" },
      ],
    },
    {
      id: "ursubstanz",
      title: "Ursubstanz",
      funding: null,
      image: "/ursubstanz.png",
      alt: "Ursubstanz — editorial fashion and brand concept",
      description: "Ursubstanz is a concept-led fashion and identity study focused on visual language, product framing, and brand atmosphere. The project explores how garment presentation, typography, and composition can work together to create a more distinct and memorable label world.",
      sections: [
        {
          title: "The Premise",
          content: "The aim was to shape a brand presence that feels deliberate, minimal, and culturally aware — something positioned between editorial presentation and product storytelling. The direction centers on silhouette, symbolism, and art direction as much as it does on clothing itself.",
        },
        {
          title: "The Visual Language",
          content: "Every choice in the identity system is load-bearing. Typeface selection, image crop, spacing, and tone of voice are treated as brand signals rather than decoration. The result is a label world that communicates without over-explaining.",
        },
        {
          title: "The Approach",
          content: "Start from atmosphere, not product. Define what the label feels like before defining what it sells. When the visual logic is strong, the product presentation follows naturally.",
        },
      ],
      role: "Brand Direction, Art Direction, Identity",
      links: [
        { text: "Ursubstanz", url: "#" },
      ],
    },
  ]

  return (
    <section id="featured" className="py-12 md:py-16 relative">
      <div className="px-6 md:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.98 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
            className={`${index > 0 ? "mt-16 md:mt-20" : ""}`}
          >
            {/* Section Header - Only show for first project */}
            {index === 0 && (
              <div className="relative mb-8 md:mb-10">
                <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 md:w-6 h-px bg-[#404040]" />
                    <span className="font-mono text-[#737373] text-xs md:text-sm font-medium">featured projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
                    <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
                  </div>
                </div>
              </div>
            )}

            {/* Project Content */}
            <motion.div
              initial={{ opacity: 0.98 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
              className="relative"
            >
              <div className="md:pl-6">
                {/* Featured Image */}
                <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
                  <div className="relative w-full aspect-video md:aspect-[16/9]">
                    {project.previewType === "ideationBento" ? (
                      <IdeationStationPreview />
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-[#525252] transition-all duration-300 hidden md:block" />
                </div>

                {/* Content Section */}
                <div className="space-y-6 md:pl-4">
                  {/* Title and Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-[#fafafa] text-pretty">
                      {project.title}
                      {project.funding && <span className="text-[#737373]"> ({project.funding})</span>}
                    </h3>

                    <div className="space-y-4 text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                      <p>{project.description}</p>

                      <div className="space-y-3 pt-2">
                        {project.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-[#fafafa] font-medium mb-2">{section.title}</h4>
                            <p className="text-sm md:text-base">{section.content}</p>
                          </div>
                        ))}

                        <div className="pt-2">
                          <p className="text-sm text-[#737373]">
                            <span className="text-[#fafafa] font-medium">Role:</span> {project.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-4 flex items-center gap-4 flex-wrap"
                  >
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#fafafa] hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Footer divider */}
            {index < projects.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 md:mt-16 flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
                <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Final divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
