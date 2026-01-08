"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-medium mb-4">05. Et maintenant ?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Parlons de votre projet</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Vous avez un projet de site internet ou d&apos;application web ? Je suis disponible pour en discuter et vous
          proposer un <span className="text-primary font-medium">devis gratuit</span>.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
          <a
            href="mailto:contact@lucasmary.fr"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            contact@lucasmary.fr
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Caen, Normandie
          </div>
          <a
            href="tel:+33600000000"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            06 00 00 00 00
          </a>
        </div>

        {isSubmitted ? (
          <div className="glass p-10 rounded-2xl">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-xl text-foreground font-medium">Message envoyé !</p>
            <p className="text-muted-foreground mt-2">Je vous répondrai sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl text-left space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-foreground font-medium mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-foreground font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-foreground font-medium mb-2">
                Type de projet
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all"
              >
                <option value="">Sélectionnez...</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="e-commerce">Site e-commerce</option>
                <option value="application-web">Application web</option>
                <option value="refonte">Refonte de site</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-foreground font-medium mb-2">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décrivez votre projet, vos objectifs..."
                className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground resize-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50"
            >
              {isLoading ? (
                "Envoi en cours..."
              ) : (
                <>
                  Envoyer <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
