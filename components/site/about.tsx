"use client"

import { Reveal, Stagger, StaggerItem } from "./reveal"
import { Users, Building2, Send, Crown, Rocket, TrendingUp, Linkedin, Mic2, Megaphone, Video, Podcast, Calendar, ChevronDown } from "lucide-react"
import Image from "next/image"
import { RichText } from "@payloadcms/richtext-lexical/react"

type AboutProps = {
  approachTitle?: string
  approachText?: Required<Parameters<typeof RichText>[0]>['data']
  approachImageUrl?: string
}

const stats = [
  { icon: Users, text: <><strong className="text-foreground font-bold">+1 200 professionnels</strong> <span className="text-zinc-400 font-light">accompagnés en coaching, dont +100 dans ce programme d&apos;accélération.</span></> },
  { icon: Building2, text: <><strong className="text-foreground font-bold">+100 entreprises</strong> <span className="text-zinc-400 font-light">accompagnées</span><br/><span className="text-[11px] text-zinc-500 font-light">Back Market, Amazon, Century21, Aircall, Unilever</span></> },
  { icon: Linkedin, text: <><strong className="text-foreground font-bold">+110 000 abonnés</strong> <span className="text-zinc-400 font-light">sur LinkedIn et plus de 100 millions d&apos;impressions cumulées.</span></> },
  { icon: Crown, text: <><strong className="text-foreground font-bold">Coaching & Influence</strong> <span className="text-zinc-400 font-light">auprès de dirigeants et personnalités publiques</span><br/><span className="text-[11px] text-zinc-500 font-light">Gaël Monfils, Mamadou Sakho, Julien Lepers, José Garcia</span></> },
  { icon: Mic2, text: <><strong className="text-foreground font-bold">+100 conférences</strong> <span className="text-zinc-400 font-light">données et 2 événements majeurs organisés (La Cigale & Ground Control - 2500 pers).</span></> },
  { icon: TrendingUp, iconColor: "text-green-500/80", text: <><strong className="text-green-500/80 font-bold">100% de réussite</strong> <span className="text-zinc-400 font-light">pour ceux qui appliquent la méthode jusqu&apos;au bout.</span></> },
]

export function About({ approachTitle, approachText, approachImageUrl }: AboutProps) {
  if (!approachTitle && !approachText) return null;

  return (
    <section id="approche" className="bg-background py-24 sm:py-32 relative border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Sticky Image */}
          <div className="lg:sticky lg:top-32 relative">
            <Reveal className="aspect-[4/3] sm:aspect-[4/5] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
              {approachImageUrl && (
                <Image 
                  src={approachImageUrl}
                  alt={approachTitle || "Illustration"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </Reveal>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="flex flex-col pt-4">
            {approachTitle && (
              <Reveal delay={0.1} className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase mb-8">
                {approachTitle}
              </Reveal>
            )}
            
            {approachText && Object.keys(approachText).length > 0 && (
              <Reveal as="div" delay={0.2} className="text-foreground text-sm sm:text-[15px] md:text-base leading-relaxed font-light mb-12 sm:mb-20 max-w-lg [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:md:text-5xl [&_h2]:font-medium [&_h2]:serif [&_h2]:leading-[1.05] [&_h2]:mb-4 [&_h2]:sm:mb-6 [&_em]:italic-serif [&_em]:text-zinc-200 [&_em]:[text-shadow:0_0_10px_rgba(255,255,255,0.4)] md:[&_em]:[text-shadow:0_0_20px_rgba(255,255,255,0.5)] [&_p]:mb-8">
                <RichText data={approachText} />
              </Reveal>
            )}

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
