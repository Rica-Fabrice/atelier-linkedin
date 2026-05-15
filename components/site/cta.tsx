"use client"

import { Reveal } from "./reveal"
import { LeadForm } from "./lead-form"

export function CTA() {
  return (
    <section id="formulaire-candidature" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background grain & glow */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] sm:h-[600px] w-[500px] sm:w-[800px] -translate-x-1/2 opacity-40 animate-pulse duration-[3000ms]"
        style={{ background: "radial-gradient(circle at top, color-mix(in oklch, var(--foreground) 12%, transparent) 0%, transparent 70%)" }}
      />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            <span className="serif font-medium tracking-tight">Dans 6 mois, </span>
            <span className="italic-serif text-glow text-foreground">ton agenda</span>
            <br className="hidden sm:block" />
            <span className="serif font-medium tracking-tight">sera plein.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground mx-auto max-w-2xl text-balance">
            Ou tu seras toujours en train d'espérer que l'algorithme te remarque. Le choix t'appartient.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  )
}
