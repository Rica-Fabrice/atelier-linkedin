"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~600px) and hide near bottom CTA
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const nearBottom = scrollY + winHeight > docHeight - 600

      setVisible(scrollY > 600 && !nearBottom)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 p-3 sm:hidden"
        >
          <a
            href="#candidater"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 py-4 text-sm font-semibold text-background shadow-[0_-4px_30px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-transform"
          >
            Candidater maintenant
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
