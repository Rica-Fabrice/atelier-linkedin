"use client"

import { Reveal, Stagger, StaggerItem } from "./reveal"
import { Users, Building2, Send, Crown, Rocket, TrendingUp, Linkedin, Mic2, Megaphone, Video, Podcast, Calendar, ChevronDown } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, text: <><strong className="text-foreground font-bold">+1 200 professionnels</strong> <span className="text-zinc-500 font-light">accompagnés en coaching, dont +100 dans ce programme d&apos;accélération.</span></> },
  { icon: Building2, text: <><strong className="text-foreground font-bold">+100 entreprises</strong> <span className="text-zinc-500 font-light">accompagnées</span><br/><span className="text-[11px] text-zinc-600 font-light">Back Market, Amazon, Century21, Aircall, Unilever</span></> },
  { icon: Linkedin, text: <><strong className="text-foreground font-bold">+110 000 abonnés</strong> <span className="text-zinc-500 font-light">sur LinkedIn et plus de 100 millions d&apos;impressions cumulées.</span></> },
  { icon: Crown, text: <><strong className="text-foreground font-bold">Coaching & Influence</strong> <span className="text-zinc-500 font-light">auprès de dirigeants et personnalités publiques</span><br/><span className="text-[11px] text-zinc-600 font-light">Gaël Monfils, Mamadou Sakho, Julien Lepers, José Garcia</span></> },
  { icon: Mic2, text: <><strong className="text-foreground font-bold">+100 conférences</strong> <span className="text-zinc-500 font-light">données et 2 événements majeurs organisés (La Cigale & Ground Control - 2500 pers).</span></> },
  { icon: TrendingUp, iconColor: "text-green-500", text: <><strong className="text-green-500 font-bold">100% de réussite</strong> <span className="text-zinc-500 font-light">pour ceux qui appliquent la méthode jusqu&apos;au bout.</span></> },
]

export function About() {
  return (
    <section id="profil" className="bg-background py-24 sm:py-32 relative border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Sticky Image */}
          <div className="lg:sticky lg:top-32 relative">
            <Reveal className="aspect-[4/3] sm:aspect-[4/5] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop" 
                alt="Alexandre Dupont" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="flex flex-col pt-4">
            <Reveal delay={0.1} className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase mb-8">
              Qui suis-je
            </Reveal>
            
            <Reveal as="h2" delay={0.2} className="text-3xl sm:text-4xl md:text-5xl font-medium serif text-foreground leading-[1.05] mb-4 sm:mb-6">
              Je m&apos;appelle <span className="italic-serif text-glow text-4xl sm:text-5xl md:text-7xl">Alexandre Dupont</span>
            </Reveal>
            
            <Reveal delay={0.3} className="text-zinc-500 text-[13px] mb-8 font-light tracking-wide">
              Sur LinkedIn depuis le 19 février 2019.
            </Reveal>

            <Reveal delay={0.4} className="text-foreground text-sm sm:text-[15px] md:text-base leading-relaxed font-light mb-12 sm:mb-20 max-w-lg">
              En 7 ans, j&apos;ai testé tous les business models possibles sur LinkedIn : coaching, agence, influence, événements.
            </Reveal>

            {/* Impact & Chiffres Clés */}
            <div className="mb-12 sm:mb-20">
              <Reveal delay={0.5} className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase mb-8 pb-4 border-b border-white/5 w-full">
                Impact & Chiffres Clés
              </Reveal>
              
              <Stagger className="space-y-3">
                {stats.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-950/50 border border-white/5 hover:bg-zinc-900/40 transition-all duration-300">
                      <div className="flex-none bg-zinc-900 rounded-lg p-2 border border-white/5">
                        <item.icon className={`size-4 ${item.iconColor || "text-zinc-500"}`} />
                      </div>
                      <p className="text-[13px] sm:text-sm leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal className="text-zinc-600 italic text-xs sm:text-sm mb-12 sm:mb-16 font-light max-w-md leading-relaxed">
              &ldquo;Un participant s&apos;est fait tatouer le logo du programme. Un autre a donné le prénom Alexandre à son enfant.&rdquo;
            </Reveal>

            <Reveal className="flex justify-center pb-8">
              <a href="#methode" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
                Ma manière de bosser
                <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}
