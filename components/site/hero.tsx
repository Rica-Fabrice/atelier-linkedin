"use client"

import { Reveal } from "./reveal"
import { Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="bg-background relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center">

        {/* Avatars Cluster */}
        <Reveal className="flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="size-8 rounded-full border-2 border-background bg-zinc-800 relative overflow-hidden"
              >
                <Image
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Avatar"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium text-foreground/70">
            +1000 entrepreneurs accompagnés depuis 2019
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal as="h1" delay={0.05} className="mt-6 sm:mt-8 text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5rem]">
          <span className="serif font-medium tracking-tight text-foreground">Le Programme</span><br />
          <span className="serif font-medium tracking-tight text-foreground">d&apos;Accélération </span>
          <span className="italic-serif font-bold text-foreground text-glow">
            LinkedIn<sup className="text-[0.4em] align-super">™</sup>
          </span><br />
          <span className="serif font-medium tracking-tight text-foreground">pour indépendants</span>
        </Reveal>


        {/* Video frame directly below the main headline */}
        <Reveal delay={0.18} className="mx-auto mt-16 w-full max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop"
              alt="Aperçu de la vidéo"
              fill
              priority
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 896px"
            />

            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px z-10"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Lire la vidéo"
                className="group/btn grid size-16 place-items-center rounded-full bg-white text-background transition-transform hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <Play className="size-6 translate-x-0.5 fill-background" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.25} className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#candidater"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-foreground text-background font-semibold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-[15px] transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Rejoindre le programme
          </a>
          <a
            href="#programme"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-transparent border border-foreground/20 text-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-[15px] transition-all hover:border-foreground/40 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Découvrir le programme
          </a>
        </Reveal>
      </div>
    </section>
  )
}
