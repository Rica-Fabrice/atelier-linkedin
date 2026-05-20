"use client"

import { Reveal, Stagger, StaggerItem } from "./reveal"
import * as LucideIcons from "lucide-react"

type FunnelStep = {
  title: string
  description: string
  iconName: string
  maxWidthClass: string
}

type FunnelSectionProps = {
  funnelTitle?: string
  funnelSubtitle?: string
  funnelSteps?: Array<{ title: string; description?: string; icon?: string }>
}

const defaultSteps: FunnelStep[] = [
  {
    title: "Attraction & Visibilité",
    description: "Création d'un contenu magnétique pour capter l'attention de ton client idéal dans le fil d'actualité.",
    iconName: "Eye",
    maxWidthClass: "max-w-[56rem]",
  },
  {
    title: "Capture & Intérêt",
    description: "Transformation de ton profil LinkedIn en véritable page de vente optimisée pour retenir les visiteurs.",
    iconName: "UserCheck",
    maxWidthClass: "max-w-[50rem]",
  },
  {
    title: "Connexion & Confiance",
    description: "Apport de valeur continu et interactions ciblées pour créer un lien de confiance avec tes prospects chauds.",
    iconName: "MessageSquare",
    maxWidthClass: "max-w-[44rem]",
  },
  {
    title: "Qualification & Filtre",
    description: "Échange conversationnel fluide en messagerie privée pour valider le besoin et l'intérêt sans aucune prospection agressive.",
    iconName: "Filter",
    maxWidthClass: "max-w-[38rem]",
  },
  {
    title: "Appel Stratégique",
    description: "Réservation d'un échange téléphonique qualifié pour présenter ton accompagnement sur-mesure à un prospect demandeur.",
    iconName: "PhoneCall",
    maxWidthClass: "max-w-[32rem]",
  },
  {
    title: "Signature & Closing",
    description: "Accord mutuel, encaissement et onboarding. Le prospect devient client de manière totalement fluide et naturelle.",
    iconName: "Award",
    maxWidthClass: "max-w-[28rem]",
  },
]

export function FunnelSection({ funnelTitle, funnelSubtitle, funnelSteps }: FunnelSectionProps) {
  const steps = funnelSteps && funnelSteps.length > 0 
    ? funnelSteps.map((step, i) => ({
        title: step.title,
        description: step.description || "",
        iconName: step.icon || defaultSteps[i % defaultSteps.length].iconName,
        maxWidthClass: defaultSteps[i % defaultSteps.length].maxWidthClass,
      }))
    : defaultSteps;

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="size-4 text-zinc-400" /> : <LucideIcons.Sparkles className="size-4 text-zinc-400" />;
  };

  return (
    <section id="tunnel" className="bg-background py-24 sm:py-32 border-b border-white/[0.05] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* En-tête */}
        <Reveal className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 inline-block">
            TUNNEL DE CONVERSION
          </span>
          <h2 className="text-3xl sm:text-5xl text-balance serif font-medium tracking-tight text-foreground mb-4">
            {funnelTitle || "Comment ce système t'amène des clients."}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {funnelSubtitle || "Une mécanique de précision conçue pour filtrer et convertir automatiquement les curieux en clients haut de gamme."}
          </p>
        </Reveal>

        {/* L'effet Entonnoir (Funnel) */}
        <Stagger className="flex flex-col items-center gap-3 w-full">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <StaggerItem 
                key={i} 
                className={`w-full ${step.maxWidthClass}`}
              >
                <div 
                  className={`flex items-center text-left gap-4 py-3.5 px-5 rounded-2xl bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${
                    isLast 
                      ? 'border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] bg-white/[0.05]' 
                      : 'border border-white/5 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Badges (Gauche) */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/5 text-xs font-mono text-zinc-400 font-semibold">
                      0{i + 1}
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5">
                      {renderIcon(step.iconName)}
                    </div>
                  </div>

                  {/* Textes (Droite) */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-zinc-200 font-medium text-base truncate">
                        {step.title}
                      </h3>
                      {isLast && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-foreground text-background px-2 py-0.5 rounded-full shrink-0">
                          Goal
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Footer de section */}
        <Reveal delay={0.4} className="mt-16 text-center">
          <p className="text-base sm:text-lg font-bold text-foreground tracking-tight">
            Le programme construit ce système de A à Z.
          </p>
        </Reveal>

      </div>
    </section>
  )
}
