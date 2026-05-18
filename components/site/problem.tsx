"use client"

import { Reveal, Stagger, StaggerItem } from "./reveal"
import { X, ChevronDown } from "lucide-react"

const points = [
  { text: "Tu es bon dans ce que tu fais, tes clients sont contents, mais ", bold: "personne ne le sait", suffix: " en dehors de ton cercle." },
  { text: "Tu ouvres LinkedIn tous les jours, tu scrolles, tu likes, mais ", bold: "tu ne publies jamais", suffix: "." },
  { text: "Tu as 500, 1 000 ou 3 000 connexions et tu ", bold: "n'as jamais eu un seul client", suffix: " grâce à elles." },
  { text: "Tu changes de prix, d'offre ou de cible ", bold: "tous les 3 mois", suffix: " parce que rien ne semble fonctionner." },
  { text: "Tu as déjà payé une formation ou un coaching, mais tu ", bold: "n'as rien appliqué concrètement", suffix: " derrière." },
  { text: "Tu passes plus de temps ", bold: "à te demander quoi poster", suffix: " qu'à parler à des prospects." },
  { text: "Tu reçois des demandes de connexion tous les jours et ", bold: "tu ne sais pas quoi en faire", suffix: "." },
  { text: "Tu sais que tu devrais créer du contenu, mais tu te dis que ", bold: "tu n'as rien d'intéressant à raconter", suffix: "." },
  { text: "Tu fais du ", bold: "bouche-à-oreille depuis des années", suffix: " et tu sais que ça ne tiendra pas éternellement." },
  { text: "Tu vois des concurrents ", bold: "moins bons que toi", suffix: " signer des clients parce qu'ils sont plus visibles." },
]

export function Problem() {
  return (
    <section id="probleme" className="bg-white/[0.02] py-24 sm:py-32 relative border-b border-white/[0.05]">
      <div className="mx-auto max-w-3xl px-6">
        
        <Reveal as="h2" className="text-center text-3xl sm:text-4xl md:text-5xl font-medium serif text-foreground mb-10 sm:mb-16">
          Tu te reconnais là-dedans ?
        </Reveal>

        <Stagger className="space-y-4 sm:space-y-6">
          {points.map((point, i) => (
            <StaggerItem key={i} className="flex gap-4 items-start">
              <div className="flex-none mt-1 bg-zinc-900 rounded-full p-1 border border-white/5">
                <X className="size-4 text-zinc-500" strokeWidth={3} />
              </div>
              <p className="text-zinc-400 text-sm sm:text-[15px] md:text-base leading-relaxed">
                {point.text}
                <strong className="text-foreground font-medium">{point.bold}</strong>
                {point.suffix}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-28 text-center">
          <Reveal as="h3" delay={0.2} className="text-xl sm:text-2xl md:text-3xl font-medium serif text-foreground">
            Le problème c&apos;est pas LinkedIn.
          </Reveal>
          <Reveal delay={0.3} className="mt-4 text-base sm:text-lg md:text-xl text-zinc-400 font-serif italic max-w-xl mx-auto leading-relaxed">
            C&apos;est que chaque mois sans système en place,<br className="hidden sm:block"/> c&apos;est un mois de clients qui <span className="text-purple-300/90 bg-purple-900/30 px-1 rounded">signent chez quelqu&apos;un d&apos;autre.</span>
          </Reveal>
          
          <Reveal delay={0.4} className="mt-12 flex justify-center">
            <a href="#profil" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
              Découvrir qui je suis
              <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
