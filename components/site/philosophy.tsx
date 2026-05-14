"use client"

import { Reveal, Stagger, StaggerItem } from "./reveal"
import { Target, Sparkles, MessageCircle, Phone, Users, CheckCircle2, Wrench, Ban, Megaphone, Heart, Rocket, ChevronDown } from "lucide-react"

const points = [
  {
    icon: Target,
    title: "Ta réussite et la mienne sont étroitement liées.",
    desc: "Si tu fais de l'oseille, je pourrai dire que t'as fait de l'oseille, ce qui m'en fera faire. On réussit ensemble ou on échoue ensemble."
  },
  {
    icon: Sparkles,
    title: "Je suis pas magicien.",
    desc: "Je suis ton coach pendant un match de boxe. C'est toi qui prends les coups, mais c'est moi qui te dis relève-toi et frappe comme ça."
  },
  {
    icon: MessageCircle,
    title: "Je suis extrêmement cash.",
    desc: "Si c'est de la merde, je te dis que c'est de la merde. Si c'est bien fait, je te rassure. T'as besoin de quelqu'un qui te dit la vérité."
  },
  {
    icon: Phone,
    title: "Je suis 100% disponible pour toi.",
    desc: "T'as ma ligne WhatsApp en illimité. Tu m'appelles quand tu veux. Mon but c'est qu'on avance le plus vite possible."
  },
  {
    icon: Users,
    title: "C'est toi et moi. Personne d'autre.",
    desc: "Pas en groupe, pas à plusieurs. Je suis engagé contractuellement, il n'y aura jamais d'autre mentor. Du premier call jusqu'au dernier jour."
  },
  {
    icon: CheckCircle2,
    title: "C'est toujours toi qui décides.",
    desc: "Sur tout ce qu'on produit ensemble, t'as le dernier mot. La décision finale, c'est la tienne."
  },
  {
    icon: Wrench,
    title: "J'ai des mains de garagiste.",
    desc: "Je mets autant les mains dans le cambouis que toi. Je corrige tes posts, je crée tes visuels, je challenge ton offre ligne par ligne."
  },
  {
    icon: Ban,
    title: "Zéro bullshit.",
    desc: "Pas de jargon marketing, pas de slides à 47 pages, pas de tunnel de vente à 14 étapes. On s'assoit, on bosse, on livre."
  }
]

export function Philosophy() {
  return (
    <section id="methode" className="bg-background py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        
        <div className="mb-20">
          <Reveal as="h2" className="text-4xl sm:text-5xl font-medium serif text-foreground mb-4">
            Ma manière de bosser.
          </Reveal>
          <Reveal delay={0.1} className="text-zinc-400 text-base sm:text-lg">
            Avant de bosser ensemble, autant que tu saches à quoi t&apos;attendre.
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {points.map((point, i) => (
            <StaggerItem key={i} className="flex flex-col p-4 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
              <div className="flex-none bg-background rounded-lg p-2 border border-white/5 w-fit mb-4 sm:mb-6">
                <point.icon className="size-5 text-zinc-500" />
              </div>
              <div className="text-[10px] text-zinc-600 font-mono mb-2 uppercase tracking-widest">0{i+1}</div>
              <h3 className="text-foreground font-semibold text-[15px] leading-snug mb-3">
                {point.title}
              </h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                {point.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footer Pills */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-20">
          <Reveal delay={0.2} className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/5 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <Megaphone className="size-4 shrink-0 text-green-500" />
               <span>Je te tague régulièrement dans mes posts devant 110 000 abonnés.</span>
            </div>
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/5 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <Heart className="size-4 shrink-0 text-green-500" />
               <span>J&apos;interagis tous les jours sur tes publications pour booster ta visibilité.</span>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="w-full lg:w-auto">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/5 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <Rocket className="size-4 shrink-0 text-green-500" />
               <span>Tu bénéficies d&apos;un post sponsorisé dédié qui parle exclusivement de tes services.</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="flex justify-center">
          <a href="#programme" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
            Découvrir le programme
            <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Reveal>

      </div>
    </section>
  )
}
