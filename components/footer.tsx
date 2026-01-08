import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t border-border/50">
      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mb-6 lg:hidden">
        <a
          href="https://github.com/lucasmary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/lucasmary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:contact@lucasmary.fr"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <p className="text-sm text-muted-foreground">
        Conçu & développé par{" "}
        <a
          href="https://github.com/lucasmary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Lucas Mary
        </a>
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">Développeur Web Freelance à Caen, Normandie</p>
    </footer>
  )
}
