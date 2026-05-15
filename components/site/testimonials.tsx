"use client"

import { Reveal } from "./reveal"
import { Star } from "lucide-react"
import Image from "next/image"

type Testimonial = { name: string; role?: string; message?: string; content?: string; roi?: string; photo?: { url?: string } | null };

type TestimonialsProps = {
  alumniTitle?: string
  alumniTestimonials?: Array<Testimonial>
}

export function Testimonials({ alumniTitle, alumniTestimonials }: TestimonialsProps) {
  if (!alumniTestimonials || alumniTestimonials.length === 0) return null;

  return (
    <section id="alumni" className="py-24 sm:py-32 bg-secondary/10 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Mur des victoires
          </span>
          {alumniTitle && (
             <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl text-balance serif font-medium tracking-tight text-foreground">
               {alumniTitle}
             </h2>
          )}
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {alumniTestimonials.map((t: Testimonial, i: number) => (
            <Reveal key={i} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{t.message || t.content}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    {t.photo && typeof t.photo === 'object' && t.photo.url && (
                      <div className="relative size-10 rounded-full overflow-hidden border border-border">
                        <Image src={t.photo.url} alt={t.name} fill className="object-cover" sizes="40px" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  {t.roi && (
                    <div className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-full shrink-0">
                      {t.roi}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
