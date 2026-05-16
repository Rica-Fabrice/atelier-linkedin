import { Reveal, Stagger, StaggerItem } from "./reveal"
import * as LucideIcons from "lucide-react"

type PhilosophyProps = {
  philosophyTitle?: string
  philosophySubtitle?: string
  philosophyPoints?: Array<{ title: string; description?: string; icon?: string }>
}

export function Philosophy({ philosophyTitle, philosophySubtitle, philosophyPoints }: PhilosophyProps) {
  if (!philosophyTitle && (!philosophyPoints || philosophyPoints.length === 0)) return null;

  const renderIcon = (iconName?: string) => {
    if (!iconName) return <LucideIcons.Sparkles className="size-5 text-zinc-500" />;
    const Icon = (LucideIcons as Record<string, LucideIcons.LucideIcon>)[iconName];
    return Icon ? <Icon className="size-5 text-zinc-500" /> : <LucideIcons.Sparkles className="size-5 text-zinc-500" />;
  };

  return (
    <section id="philosophie" className="bg-background py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        
        <div className="mb-20">
          <Reveal as="h2" className="text-4xl sm:text-5xl font-medium serif text-foreground mb-4">
            {philosophyTitle || "Ma manière de bosser."}
          </Reveal>
          <Reveal delay={0.1} className="text-zinc-400 text-base sm:text-lg">
            {philosophySubtitle || "Avant de bosser ensemble, autant que tu saches à quoi t'attendre."}
          </Reveal>
        </div>

        {philosophyPoints && philosophyPoints.length > 0 && (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
            {philosophyPoints.map((point, i) => (
              <StaggerItem key={i} className="flex flex-col p-4 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:bg-white/5 transition-colors duration-300">
                <div className="flex-none bg-background rounded-lg p-2 border border-white/5 w-fit mb-4 sm:mb-6">
                  {renderIcon(point.icon)}
                </div>
                <div className="text-[10px] text-zinc-600 font-mono mb-2 uppercase tracking-widest">0{i+1}</div>
                <h3 className="text-foreground font-semibold text-[15px] leading-snug mb-3">
                  {point.title}
                </h3>
                <p className="text-zinc-400 text-[13px] leading-relaxed">
                  {point.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        )}

        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-20">
          <Reveal delay={0.2} className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/10 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <LucideIcons.Megaphone className="size-4 shrink-0 text-green-500" />
               <span>Je te tague régulièrement dans mes posts devant 110 000 abonnés.</span>
            </div>
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/10 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <LucideIcons.Heart className="size-4 shrink-0 text-green-500" />
               <span>J&apos;interagis tous les jours sur tes publications pour booster ta visibilité.</span>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="w-full lg:w-auto">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl lg:rounded-full bg-zinc-900/40 border border-white/10 text-[11px] sm:text-[13px] text-zinc-400 lg:whitespace-nowrap">
               <LucideIcons.Rocket className="size-4 shrink-0 text-green-500" />
               <span>Tu bénéficies d&apos;un post sponsorisé dédié qui parle exclusivement de tes services.</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="flex justify-center">
          <a href="#comparaison" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
            Découvrir la philosophie
            <LucideIcons.ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Reveal>

      </div>
    </section>
  )
}
