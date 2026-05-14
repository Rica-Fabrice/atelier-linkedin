"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "li" | "ul" | "span"
}

export function Reveal({ children, className, delay = 0, y = 24, once = true, as = "div" }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
      transitionEnd: { filter: "none" }
    },
  }
  const Comp = motion[as]
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </Comp>
  )
}

export function Stagger({
  children,
  className,
  gap = 0.08,
  once = true,
}: {
  children: ReactNode
  className?: string
  gap?: number
  once?: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 20 }: { children: ReactNode; className?: string; y?: number }) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      transitionEnd: { filter: "none" }
    },
  }
  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  )
}
