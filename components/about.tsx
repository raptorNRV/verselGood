import Image from "next/image"

export function About() {
  const technologies = ["JavaScript (ES6+)", "TypeScript", "React / Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]

  return (
    <section id="about" className="py-32 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-12 line-decoration">
          <span className="text-primary mr-3">01.</span>À propos
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Passionné par le développement web depuis plusieurs années, je suis{" "}
              <span className="text-primary font-medium">Lucas Mary</span>, développeur freelance basé à{" "}
              <strong className="text-foreground">Caen</strong>, en Normandie.
            </p>
            <p>
              Mon expertise me permet d&apos;accompagner les entreprises et entrepreneurs dans leur transformation
              digitale : de la <strong className="text-foreground">création de sites vitrines</strong> aux{" "}
              <strong className="text-foreground">applications web complexes</strong>, en passant par les{" "}
              <strong className="text-foreground">solutions e-commerce</strong>.
            </p>
            <p>
              Je travaille avec des clients dans toute la <strong className="text-foreground">Normandie</strong> (Caen,
              Rouen, Le Havre) et partout en France grâce au télétravail. Mon objectif : créer des expériences web
              performantes, accessibles et qui convertissent.
            </p>
            <p className="text-foreground font-medium pt-2">Technologies que j&apos;utilise au quotidien :</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {technologies.map((tech) => (
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
