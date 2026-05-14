"use client"

import { Reveal } from "./reveal"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alexandre",
      role: "Consultant SEO",
      content: "J'ai signé 3 clients en inbound dès le premier mois d'accompagnement. La méthode de l'expert est chirurgicale, pas de blabla, que de l'action.",
      roi: "+15k€ générés"
    },
    {
      name: "Sarah",
      role: "Copywriter Freelance",
      content: "Avant je postais pour faire des vues. Maintenant je poste pour faire du chiffre d'affaires. Mon profil est devenu une vraie landing page qui convertit.",
      roi: "+8k€ / mois"
    },
    {
      name: "Thomas",
      role: "Fondateur Agence Ads",
      content: "Le meilleur investissement de l'année. Les templates de posts m'ont fait gagner un temps fou et la communauté d'alumni est incroyable.",
      roi: "x3 sur le CA"
    },
    {
      name: "Marie",
      role: "Coach Business",
      content: "Je n'osais pas parler de mes offres. L'expert a débloqué mon syndrome de l'imposteur. J'assume enfin mon expertise.",
      roi: "Agenda plein"
    }
  ]

  return (
    <section id="alumni" className="py-24 sm:py-32 bg-secondary/10 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Mur des victoires
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl text-balance">
            <span className="serif font-medium tracking-tight">Ils l&apos;ont </span>
            <span className="italic-serif text-foreground">fait.</span>
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{t.content}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="font-medium text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                    {t.roi}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
