"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "La Normandise",
    title: "Stage Développeur Full-Stack",
    period: "Juillet 2025 - Septembre 2025",
    description: [
      "Développement d'applications web avec React, Next.js et Node.js",
      "Mise en place d'architectures CI/CD optimisées",
      "Collaboration avec les équipes design et produit",
      "Optimisation des performances et de l'accessibilité",
    ],
  },
  {
    company: "Freelance",
    title: "Développeur Web Indépendant",
    period: "2024 - Présent",
    description: [
      "Création de sites internet sur mesure pour entreprises locales",
      "Développement d'applications web avec React et Next.js",
      "Intégration de solutions e-commerce et paiement en ligne",
      "Accompagnement et formation des clients",
    ],
  },
  {
    company: "Formation",
    title: "Études en Développement Web",
    period: "2022 - 2025",
    description: [
      "Formation complète en développement web full-stack",
      "Apprentissage des technologies modernes (React, Node.js, TypeScript)",
      "Projets pratiques et stages en entreprise",
      "Veille technologique constante",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-32 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-12 line-decoration">
          <span className="text-primary mr-3">02.</span>
          Mon parcours
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 text-left relative",
                  "hover:bg-primary/5 hover:text-primary",
                  "border-b-2 md:border-b-0 md:border-l-2",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-muted",
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[350px] py-2">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">{experiences[activeTab].title}</h3>
            <p className="text-primary font-medium mb-2">@ {experiences[activeTab].company}</p>
            <p className="text-sm text-muted-foreground mb-6 tracking-wide">{experiences[activeTab].period}</p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed group">
                  <span className="text-primary mt-1.5 group-hover:translate-x-1 transition-transform">▹</span>
                  <span className="group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
