"use client"

import { Reveal } from "./reveal"

const companies = [
  "Amazon",
  "Toshiba",
  "Unilever",
  "Century 21",
  "Aircall",
  "Salesforce",
  "Microsoft",
]

export function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-background py-12 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal delay={0.1}>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Ils ont fait confiance à nos méthodes
          </p>
        </Reveal>
        
        <Reveal delay={0.2} className="mt-10 relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max min-w-full shrink-0 animate-marquee items-center justify-around gap-16 py-4">
            {companies.map((company, i) => (
              <span key={i} className="text-xl font-bold tracking-tighter text-muted-foreground/40 sm:text-3xl">
                {company}
              </span>
            ))}
            {/* Duplicate for infinite effect */}
            {companies.map((company, i) => (
              <span key={`dup-${i}`} className="text-xl font-bold tracking-tighter text-muted-foreground/40 sm:text-3xl">
                {company}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
