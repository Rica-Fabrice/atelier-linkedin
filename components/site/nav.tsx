"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#approche", label: "Approche" },
  { href: "#programme", label: "Programme" },
  { href: "#resultats", label: "Résultats" },
  { href: "#alumni", label: "Alumni" },
  { href: "#podcasts", label: "Podcasts" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    
    // Setup Intersection Observer for scroll-spy
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleSections = entries.filter((entry) => entry.isIntersecting)
        if (visibleSections.length > 0) {
          // Get the one with the largest intersection ratio or the first one
          const active = visibleSections.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          )
          setActiveSection(`#${active.target.id}`)
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.1, 0.5, 1] }
    )

    // Observe all sections that have IDs matching our links
    links.forEach((link) => {
      const id = link.href.replace("#", "")
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        data-scrolled={scrolled}
        className="flex w-full max-w-5xl items-center justify-between rounded-full border border-border/60 bg-background/60 px-4 py-2 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] backdrop-blur-xl sm:px-5"
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-foreground text-[11px] font-semibold tracking-tight text-background">
            AT
          </span>
          <span className="serif text-base text-foreground/90">
            Atelier <span className="italic-serif text-foreground/70">LinkedIn</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive 
                      ? "bg-secondary text-foreground" 
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#formulaire-candidature"
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
          >
            Candidater
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border/60 text-foreground/80 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-3 top-16 z-40 rounded-2xl border border-border/60 bg-background/90 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-foreground/90 hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#formulaire-candidature"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
                >
                  Candidater
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
