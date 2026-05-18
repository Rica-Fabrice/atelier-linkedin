"use client"

import { Reveal } from "./reveal"
import * as LucideIcons from "lucide-react"
import Image from "next/image"

const podcasts = [
  { 
    title: "Comment se démarquer sur LinkedIn ?", 
    subtitle: "Scale Big Things", 
    image: "https://images.unsplash.com/photo-1478737270239-2fccd27ee8fb?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Génération de leads B2B : 3 Experts révèlent tout", 
    subtitle: "CEO Club Global", 
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Un des plus gros influenceurs LinkedIn", 
    subtitle: "Roller Coaster Show", 
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "LinkedIn au service de votre business", 
    subtitle: "Steve Inacio", 
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    title: "Atteindre 10k abonnés en 6 mois", 
    subtitle: "Flomodia", 
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000&auto=format&fit=crop" 
  }
]

export function Podcasts() {
  return (
    <section id="podcasts" className="bg-background py-16 sm:py-24 border-b border-white/[0.05] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="text-center">
          <Reveal className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
            Podcasts & Interviews
          </Reveal>
          <Reveal as="h2" delay={0.1} className="text-4xl sm:text-5xl font-medium serif text-foreground mb-6">
            Mes passages en <span className="italic-serif text-glow">podcast</span>
          </Reveal>
          <Reveal delay={0.2} className="text-zinc-400 text-sm sm:text-base font-light">
            Retrouve toutes mes interventions, interviews et échanges sur YouTube.
          </Reveal>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-podcasts {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .animate-marquee-podcasts {
          animation: marquee-podcasts 40s linear infinite;
        }
        .group:hover .animate-marquee-podcasts {
          animation-play-state: paused;
        }
      `}} />

      {/* Marquee Container with Masking */}
      <div className="mx-auto max-w-7xl px-6">
        <div 
          className="relative flex overflow-hidden py-4 group"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* We duplicate the array multiple times to ensure enough content to never see the end */}
          <div className="flex animate-marquee-podcasts gap-6 whitespace-nowrap">
            {[...podcasts, ...podcasts, ...podcasts, ...podcasts].map((item, i) => (
              <div key={i} className="cursor-pointer w-[220px] sm:w-[280px] md:w-[320px] flex-none group/card">
                <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/20 relative mb-4 ring-1 ring-white/10 ring-inset">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 320px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="size-10 sm:size-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover/card:scale-110 transition-transform">
                        <LucideIcons.Play className="size-4 sm:size-5 text-foreground fill-white" />
                     </div>
                  </div>
                </div>
                <h3 className="text-foreground font-medium text-sm sm:text-[15px] leading-snug mb-1 whitespace-normal">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm font-light">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12">
        <Reveal delay={0.3} className="flex justify-center">
          <a href="#philosophie" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
            Découvrir ma philosophie
            <LucideIcons.ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
