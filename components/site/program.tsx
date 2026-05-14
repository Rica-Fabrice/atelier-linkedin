"use client"

import { Reveal } from "./reveal"
import { Layers, MessageCircle, Laptop, CalendarDays, FileText, Zap } from "lucide-react"

export function Program() {
  const modules = [
    {
      icon: CalendarDays,
      title: "12 Sessions individuelles",
      description: "Des appels 1-to-1 en visio pour travailler sur ton positionnement, ta stratégie et ton contenu.",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      icon: MessageCircle,
      title: "Support WhatsApp 5j/7",
      description: "Je suis dans ta poche. Une question, un doute sur un post ? Tu m'envoies un vocal.",
      span: "col-span-1"
    },
    {
      icon: Layers,
      title: "Les fondations",
      description: "Optimisation de ton profil LinkedIn pour en faire une véritable Landing Page.",
      span: "col-span-1"
    },
    {
      icon: FileText,
      title: "Méthode Copywriting",
      description: "Les templates et structures exactes qui génèrent des millions de vues.",
      span: "md:col-span-2"
    },
    {
      icon: Laptop,
      title: "Création de Landing Page",
      description: "On crée ou on refond la page de vente de ton offre pour maximiser tes conversions.",
      span: "md:col-span-1"
    },
    {
      icon: Zap,
      title: "Stratégie de conversion",
      description: "Comment passer d'un like à un appel découverte qualifié, étape par étape.",
      span: "md:col-span-1"
    }
  ]

  return (
    <section id="programme" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Le Programme
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl text-balance">
            <span className="serif font-medium tracking-tight">Ce qui est inclus dans </span>
            <br className="hidden sm:block" />
            <span className="italic-serif text-foreground">l&apos;Accélération.</span>
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:auto-rows-[200px]">
          {modules.map((mod, i) => (
            <Reveal
              key={mod.title}
              delay={0.1 + i * 0.05}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card/30 p-5 sm:p-8 transition-colors hover:bg-card flex flex-col justify-between ${mod.span}`}
            >
              <div className="mb-3 sm:mb-4 inline-flex size-9 sm:size-10 items-center justify-center rounded-lg sm:rounded-xl bg-secondary">
                <mod.icon className="size-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-foreground">{mod.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {mod.description}
                </p>
              </div>
              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)"
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
