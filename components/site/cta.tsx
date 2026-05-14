"use client"

import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="candidater" className="py-24 sm:py-32 relative overflow-hidden">
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

        <Reveal delay={0.2} className="mt-12 flex flex-col items-center justify-center gap-4">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-foreground px-8 sm:px-10 text-base sm:text-lg font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
          >
            Réserver mon appel stratégique
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-sm text-muted-foreground mt-4">
            Places limitées. Seulement 5 nouveaux accompagnements par mois.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
