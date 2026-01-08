"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Parcours", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "glass shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="relative group">
          <span className="text-2xl font-bold text-primary font-sans tracking-tight">LM</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-primary text-xs mr-1">0{index + 1}.</span>
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="/cv-lucas-mary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-primary text-lg mr-2">0{index + 1}.</span>
              {item.name}
            </Link>
          ))}
          <a
            href="/cv-lucas-mary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg"
          >
            Mon CV
          </a>
        </div>
      </div>
    </header>
  )
}
