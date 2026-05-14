"use client"

import { AnimatedNumber } from "./animated-number"
import { Reveal } from "./reveal"
import Image from "next/image"
import { Star, ArrowUpRight, Users, TrendingUp } from "lucide-react"

export function Leaderboards() {
  return (
    <section className="bg-card/40 py-24 sm:py-32 relative overflow-hidden border-y border-border/50">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center">
        
        <Reveal className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6 sm:mb-8">
          Classement officiel Favikon
        </Reveal>

        <Reveal className="mb-4">
          <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            #1
          </span>
        </Reveal>

        <Reveal as="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-medium serif text-foreground mb-4 sm:mb-6">
          Je suis le Top 1 Expert <span className="italic-serif">FR</span>
        </Reveal>

        <Reveal delay={0.2} className="max-w-2xl text-zinc-400 text-sm sm:text-base mb-10 sm:mb-12 leading-relaxed px-4">
          Classé <strong className="text-foreground">#1</strong> par Favikon dans la catégorie <strong className="text-foreground">Marketing & Sales - LinkedIn Growth</strong> en France, devant +200 créateurs analysés.
        </Reveal>

        {/* Stats Row */}
        <Reveal delay={0.3} className="grid grid-cols-3 gap-4 sm:gap-16 mb-12 sm:mb-20 w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="bg-yellow-500/10 p-2 rounded-lg border border-yellow-500/20">
              <Star className="size-4 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="text-center sm:text-left">
              <AnimatedNumber value={7573} className="text-base sm:text-xl font-bold text-foreground" />
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">Score</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
              <Users className="size-4 text-blue-500 fill-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <AnimatedNumber value={110.9} suffix="K" decimals={1} className="text-base sm:text-xl font-bold text-foreground" />
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">Abonnés</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="bg-green-500/10 p-2 rounded-lg border border-green-500/20">
              <TrendingUp className="size-4 text-green-500" />
            </div>
            <div className="text-center sm:text-left">
              <AnimatedNumber value={0.65} prefix="+" suffix="%" decimals={2} className="text-base sm:text-xl font-bold text-foreground" />
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">Croissance</div>
            </div>
          </div>
        </Reveal>

        {/* Mockup Frame */}
        <Reveal delay={0.4} className="w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl relative group">
          {/* Browser Header */}
          <div className="bg-zinc-800/50 px-3 sm:px-4 py-2 sm:py-3 border-b border-white/10 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="size-2 sm:size-2.5 rounded-full bg-zinc-600" />
              <div className="size-2 sm:size-2.5 rounded-full bg-zinc-600" />
              <div className="size-2 sm:size-2.5 rounded-full bg-zinc-600" />
            </div>
            <div className="mx-auto bg-zinc-900 rounded-md px-3 sm:px-4 py-1 text-[9px] sm:text-[10px] text-zinc-500 font-mono truncate max-w-[200px] sm:max-w-none">
              favikon.com/creators-rankings
            </div>
          </div>
          
          {/* Content Placeholder mimicking the screenshot */}
          <div className="aspect-[16/10] bg-[#F9FAFB] relative overflow-hidden">
             <Image 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
               className="object-cover w-full opacity-20 grayscale" 
               alt="Dashboard Background"
               width={2426}
               height={1617}
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
               <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-zinc-100 scale-90 sm:scale-100">
                  <div className="flex items-center gap-3 sm:gap-4 border-b border-zinc-100 pb-3 sm:pb-4 mb-3 sm:mb-4">
                    <div className="size-8 sm:size-12 rounded-full bg-zinc-200 overflow-hidden shrink-0">
                       <Image src="https://i.pravatar.cc/100?u=alexandre" alt="Alexandre" width={100} height={100} className="size-full object-cover" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="font-bold text-zinc-900 text-sm sm:text-base truncate">Alexandre Dupont</div>
                      <div className="text-[9px] sm:text-[10px] text-zinc-500 truncate">N°1 LinkedIn Growth France</div>
                    </div>
                    <div className="ml-auto bg-yellow-400 text-yellow-900 font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded uppercase shrink-0">
                      Top 1
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                     <div className="h-2 w-full bg-zinc-100 rounded" />
                     <div className="h-2 w-full bg-zinc-100 rounded" />
                     <div className="h-2 w-full bg-zinc-100 rounded" />
                  </div>
               </div>
               {/* Overlaying gradient to fade bottom */}
               <div className="absolute inset-x-0 bottom-0 h-20 sm:h-40 bg-gradient-to-t from-white to-transparent" />
             </div>
          </div>
        </Reveal>

        <Reveal delay={0.5} className="mt-8 sm:mt-12">
          <a href="https://favikon.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-500 hover:text-foreground transition-colors text-xs sm:text-sm font-medium">
             <Star className="size-3 sm:size-4" />
             Voir le classement sur Favikon
             <ArrowUpRight className="size-3" />
          </a>
        </Reveal>

      </div>
    </section>
  )
}
