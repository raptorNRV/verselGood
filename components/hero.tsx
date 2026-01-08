"use client"

import { ArrowDown, Download, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className={`space-y-6 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Greeting */}
          <p className="text-primary text-base md:text-lg tracking-wide">Bonjour, je suis</p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
            Lucas Mary.
          </h1>

          {/* Tagline with gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight">
            Je crée des <span className="gradient-text">expériences web</span>
            <br />
            exceptionnelles.
          </h2>

          {/* Description */}
          <p className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            <strong className="text-foreground">Développeur web freelance basé à Caen</strong>, je conçois et développe
            des sites internet et applications web sur mesure. Spécialisé en <span className="text-primary">React</span>
            , <span className="text-primary">Next.js</span> et <span className="text-primary">Node.js</span>.
          </p>

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Caen, Normandie</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400">Disponible</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">Demander un devis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/cv-lucas-mary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-muted text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Télécharger CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
