const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Outils & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
  },
  {
    title: "Design & UX",
    icon: "✨",
    skills: ["Figma", "UI/UX Design", "Responsive", "Accessibilité", "SEO"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-16 line-decoration">
          <span className="text-primary mr-3">04.</span>
          Compétences
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass hover-card p-6 rounded-xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
