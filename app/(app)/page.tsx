import { getPayload } from 'payload'
import config from '@payload-config'

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
import { RichText } from '@payloadcms/richtext-lexical/react'

type LexicalRichTextData = Required<Parameters<typeof RichText>[0]>['data']

interface HomeData {
  title?: LexicalRichTextData
  description?: LexicalRichTextData
  heroImageUrl?: string
  approachTitle?: string
  approachText?: LexicalRichTextData
  approachImageUrl?: string
  programTitle?: string
  programModules?: unknown[]
  alumniTitle?: string
  alumniTestimonials?: unknown[]
  philosophyTitle?: string
  philosophySubtitle?: string
  philosophyPoints?: unknown[]
}

export default async function Home() {
  let homeData: HomeData = {}

  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'home-page' })

    const heroImage =
      data.heroImage && typeof data.heroImage === 'object'
        ? data.heroImage.url
        : undefined

    const approachImage =
      data.approachImage && typeof data.approachImage === 'object'
        ? data.approachImage.url
        : undefined

    homeData = {
      title: data.heroTitle || undefined,
      description: data.heroDescription || undefined,
      heroImageUrl: heroImage || undefined,
      approachTitle: data.approachTitle || undefined,
      approachText: data.approachText || undefined,
      approachImageUrl: approachImage || undefined,
      programTitle: data.programTitle || undefined,
      programModules: data.programModules || undefined,
      alumniTitle: data.alumniTitle || undefined,
      alumniTestimonials: data.alumniTestimonials || undefined,
      philosophyTitle: data.philosophyTitle || undefined,
      philosophySubtitle: data.philosophySubtitle || undefined,
      philosophyPoints: data.philosophyPoints || undefined,
    }
  } catch {
    // Payload not yet initialized (first run) — use static defaults
  }

  return (
    <main className="flex min-h-screen flex-col w-full" style={{ overflowX: 'clip' }}>
      <SiteNav />
      <Hero
        title={homeData.title}
        description={homeData.description}
        heroImageUrl={homeData.heroImageUrl}
      />
      <SocialProof />
      <Problem />
      <About 
        approachTitle={homeData.approachTitle}
        approachText={homeData.approachText}
        approachImageUrl={homeData.approachImageUrl}
      />
      <Leaderboards />
      <Podcasts />
      <Philosophy 
        philosophyTitle={homeData.philosophyTitle}
        philosophySubtitle={homeData.philosophySubtitle}
        philosophyPoints={homeData.philosophyPoints}
      />
      <Comparison />
      <Program 
        programTitle={homeData.programTitle}
        programModules={homeData.programModules}
      />
      <Testimonials 
        alumniTitle={homeData.alumniTitle}
        alumniTestimonials={homeData.alumniTestimonials}
      />
      <FAQ />
      <CTA />
      <SiteFooter />
      <StickyMobileCTA />
    </main>
  )
}
