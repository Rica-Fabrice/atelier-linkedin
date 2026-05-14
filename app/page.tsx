import { SiteNav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { SocialProof } from "@/components/site/social-proof"
import { Problem } from "@/components/site/problem"
import { About } from "@/components/site/about"
import { Leaderboards } from "@/components/site/leaderboards"
import { Podcasts } from "@/components/site/podcasts"
import { Philosophy } from "@/components/site/philosophy"
import { Comparison } from "@/components/site/comparison"
import { Program } from "@/components/site/program"
import { Testimonials } from "@/components/site/testimonials"
import { FAQ } from "@/components/site/faq"
import { CTA } from "@/components/site/cta"
import { SiteFooter } from "@/components/site/footer"
import { StickyMobileCTA } from "@/components/site/sticky-cta"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full" style={{ overflowX: 'clip' }}>
      <SiteNav />
      <Hero />
      <SocialProof />
      <Problem />
      <About />
      <Leaderboards />
      <Podcasts />
      <Philosophy />
      <Comparison />
      <Program />
      <Testimonials />
      <FAQ />
      <CTA />
      <SiteFooter />
      <StickyMobileCTA />
    </main>
  )
}
