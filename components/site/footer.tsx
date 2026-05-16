"use client"

import { Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react"

const footerLinks = {
  Programme: [
    { label: "Approche", href: "#approche" },
    { label: "Modules", href: "#programme" },
    { label: "Alumni", href: "#alumni" },
  ],
  Ressources: [
    { label: "Podcasts", href: "#podcasts" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Confidentialité", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand column - spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-foreground text-[11px] font-semibold tracking-tight text-background">
                AT
              </span>
              <span className="serif text-base text-foreground/90">
                Atelier <span className="italic-serif text-foreground/70">LinkedIn</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Programme d&apos;accélération individuel pour transformer ton profil en système de signature client.
            </p>

            {/* Mini CTA */}
            <a
              href="#formulaire-candidature"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-foreground/20 group"
            >
              Prêt à commencer ?
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="/"
                  className="grid size-9 place-items-center rounded-full border border-border bg-secondary/50 text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Atelier LinkedIn - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
