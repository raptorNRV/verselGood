import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Plateforme E-commerce",
    description:
      "Une solution e-commerce complète avec gestion des produits, panier intelligent, paiement sécurisé via Stripe et tableau de bord administrateur.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/ecommerce-dashboard-modern.jpg",
  },
  {
    title: "Application de Gestion",
    description:
      "SaaS de gestion de projets avec collaboration en temps réel, système de notifications et intégrations avec les outils existants.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/project-management-dashboard.png",
  },
  {
    title: "Site Vitrine Premium",
    description:
      "Site web moderne pour une entreprise locale avec animations fluides, optimisation SEO et performances maximales.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/modern-business-website.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-16 line-decoration">
          <span className="text-primary mr-3">03.</span>
          Mes projets
        </h2>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 relative group ${index % 2 === 1 ? "lg:col-start-6 lg:row-start-1" : ""}`}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`lg:col-span-6 lg:row-start-1 relative z-10 ${
                  index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-6"
                }`}
              >
                <p className="text-primary text-sm font-medium mb-2">Projet</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5 hover:text-primary transition-colors">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="glass p-6 rounded-lg mb-5 shadow-xl">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm text-muted-foreground mb-5 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className="hover:text-primary transition-colors">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-5 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Voir sur GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Voir le site"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
