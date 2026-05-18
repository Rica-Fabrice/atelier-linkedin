"use client"

import { Check, X, ChevronDown } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "./reveal"

export function Comparison() {
  return (
    <section id="comparaison" className="bg-background py-24 sm:py-32 relative border-b border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="h2" className="serif text-balance text-center text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Ne rien faire <span className="italic-serif text-foreground/80">VS</span> Remplir ce formulaire.
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* --- Left column: Si tu ne fais rien --- */}
          <Stagger className="border-l-2 border-red-500/30 pl-6 sm:pl-8">
            <StaggerItem>
              <div className="mb-6 sm:mb-7 flex items-center gap-2">
                <X className="size-4 text-red-500" />
                <h3 className="serif italic text-xl sm:text-2xl text-red-400">Si tu ne fais rien.</h3>
              </div>
            </StaggerItem>

            <ul className="space-y-5 sm:space-y-6">
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Tu continues à <strong className="text-foreground font-semibold">avancer seul</strong>, à tester des trucs au hasard et à recommencer de zéro tous les 3 mois.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Ton profil LinkedIn reste une <strong className="text-foreground font-semibold">vitrine vide</strong> que personne ne visite et qui ne convertit rien.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    À <strong className="text-foreground font-semibold">1 client perdu par mois</strong> faute de visibilité, c&apos;est 12 clients en moins sur l&apos;année et plusieurs dizaines de milliers d&apos;euros évaporés.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Tu restes bloqué dans le <strong className="text-foreground font-semibold">doute</strong> : est-ce que mon offre est la bonne, est-ce que mon prix est juste, est-ce que je fais les choses bien.
                  </p>
                </li>
              </StaggerItem>
            </ul>

            <StaggerItem>
              <div className="mt-8 flex gap-3">
                <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-red-400/90 italic">
                  Dans 6 mois, tu seras exactement au même endroit qu&apos;aujourd&apos;hui, avec 6 mois de retard en plus.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 text-sm font-bold text-foreground leading-relaxed">
                6 mois sans contenu LinkedIn, c&apos;est 6 mois de clients qui signent ailleurs.
              </p>
              <p className="mt-2 text-sm italic text-zinc-500">
                Et ça ne se rattrape pas.
              </p>
            </StaggerItem>
          </Stagger>

          {/* --- Right column: Tu remplis ce formulaire --- */}
          <Stagger className="border-l-2 border-green-500/30 pl-6 sm:pl-8">
            <StaggerItem>
              <div className="mb-6 sm:mb-7 flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                <h3 className="serif italic text-xl sm:text-2xl text-green-400">Tu remplis ce formulaire.</h3>
              </div>
            </StaggerItem>

            <ul className="space-y-5 sm:space-y-6">
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Tu repars de la session de setup avec un <strong className="text-foreground font-semibold">plan d&apos;action clair</strong>, une offre rédigée, un tunnel en place et un profil optimisé.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Ton profil LinkedIn devient une <strong className="text-foreground font-semibold">machine à convertir</strong> : chaque visite a une chance de finir en rendez-vous.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Le programme est un <strong className="text-foreground font-semibold">investissement sur 6 mois</strong>. Les résultats de mes accompagnements vont de <strong className="text-green-400 font-semibold">16 000€ à 400 000€ de marge nette</strong>.
                  </p>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-4 h-px bg-zinc-600 shrink-0" />
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Tu sais exactement <strong className="text-foreground font-semibold">quoi poster, quand publier, comment convertir</strong> et à qui t&apos;adresser dans ton contenu.
                  </p>
                </li>
              </StaggerItem>
            </ul>

            <StaggerItem>
              <div className="mt-8 flex gap-3">
                <Check className="size-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-green-400/90 italic">
                  En une session de setup de 2h + 6 mois de suivi, tu as un produit clair, une offre qui vend et un contenu qui t&apos;amène des clients en continu.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 text-sm font-bold text-foreground leading-relaxed">
                Un formulaire. Un appel. Et un contenu LinkedIn qui travaille pour toi pendant des années.
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Scroll anchor */}
        <Reveal delay={0.3} className="mt-16 sm:mt-20 flex justify-center">
          <a href="#programme" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
            Voir le programme
            <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
