import { Github, Linkedin, Mail } from "lucide-react"

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar - Social links */}
      <div className="fixed bottom-0 left-6 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/50">
        <a
          href="https://github.com/lucasmary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/lucasmary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:contact@lucasmary.fr"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Right sidebar - Email */}
      <div className="fixed bottom-0 right-6 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/50">
        <a
          href="mailto:contact@lucasmary.fr"
          className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          contact@lucasmary.fr
        </a>
      </div>
    </>
  )
}
