"use client"

import { Reveal } from "./reveal"
import * as LucideIcons from "lucide-react"

type ProgramProps = {
  programTitle?: string
  programModules?: Array<{ title: string; description?: string; icon?: string }>
}

export function Program({ programTitle, programModules }: ProgramProps) {
  if (!programModules || programModules.length === 0) return null;

  const defaultIcons = ["CalendarDays", "MessageCircle", "Layers", "FileText", "Laptop", "Zap"];
  const spans = ["md:col-span-2 md:row-span-2", "col-span-1", "col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-1"];

  const renderIcon = (iconName?: string, index: number = 0) => {
    const name = iconName || defaultIcons[index % defaultIcons.length];
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="size-5 text-foreground" /> : <LucideIcons.Sparkles className="size-5 text-foreground" />;
  };

  const activeModules = programModules.map((mod, i) => ({
    ...mod,
    icon: mod.icon || defaultIcons[i % defaultIcons.length],
    span: spans[i % spans.length]
  }));

  return (
    <section id="programme" className="bg-white/[0.02] py-24 sm:py-32 border-b border-white/[0.05]">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Le Programme
          </span>
          {programTitle && (
             <h2 className="mt-4 text-3xl sm:text-5xl text-balance serif font-medium tracking-tight text-foreground">
               {programTitle}
             </h2>
          )}
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:auto-rows-[200px]">
          {activeModules.map((mod, i) => (
            <Reveal
              key={i}
              delay={0.1 + i * 0.05}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-8 transition-colors hover:bg-white/[0.05] flex flex-col justify-between ${mod.span}`}
            >
              <div className="mb-3 sm:mb-4 inline-flex size-9 sm:size-10 items-center justify-center rounded-lg sm:rounded-xl bg-secondary">
                {renderIcon(mod.icon, i)}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-foreground">{mod.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {mod.description}
                </p>
              </div>
              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)"
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
