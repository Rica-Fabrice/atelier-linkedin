"use client"

import { Reveal } from "./reveal"
import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "Combien de temps dois-je y consacrer par semaine ?",
      a: "Prévoyez environ 2 à 3 heures par semaine. Cela inclut nos sessions, la création de votre contenu, et l'interaction sur la plateforme. L'objectif est de rendre ce temps ultra-rentable."
    },
    {
      q: "Est-ce que ça marche si je débute complètement sur LinkedIn ?",
      a: "Oui. C'est même un avantage. Vous n'avez pas de mauvaises habitudes à déconstruire. On pose les bonnes fondations dès le jour 1."
    },
    {
      q: "Puis-je déléguer la création de contenu à l'IA ?",
      a: "Non. L'IA est un assistant, pas un remplaçant. Nous utilisons l'IA pour générer des idées et structurer, mais votre voix et votre expertise doivent rester authentiques."
    },
    {
      q: "Quelle est la garantie de résultats ?",
      a: "Si vous appliquez 100% de la méthode et que vous ne rentabilisez pas votre investissement, on continue de travailler ensemble gratuitement jusqu'à ce que ce soit le cas."
    },
    {
      q: "Comment se passe l'accompagnement au quotidien ?",
      a: "Vous avez accès à un espace privé avec des modules vidéo, un groupe Slack alumni, et des sessions de coaching individuelles hebdomadaires. Chaque semaine, on définit un plan d'action concret."
    },
    {
      q: "Le programme est-il adapté à tous les secteurs ?",
      a: "Le programme est conçu pour les indépendants B2B : consultants, coachs, freelances, formateurs, agences. Si votre client idéal est sur LinkedIn, c'est fait pour vous."
    },
    {
      q: "Combien coûte le programme ?",
      a: "Le prix est communiqué lors de l'appel stratégique car il dépend du niveau d'accompagnement choisi. Ce qui est certain : les résultats de mes accompagnements vont de 16 000€ à 400 000€ de marge nette."
    },
    {
      q: "Est-ce que je peux rejoindre à n'importe quel moment ?",
      a: "Non. Les inscriptions sont limitées à 5 nouveaux accompagnements par mois pour garantir un suivi de qualité. Il faut d'abord passer un appel de qualification."
    }
  ]

  return (
    <section className="bg-white/[0.02] py-24 sm:py-32 border-b border-white/[0.05]">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl text-balance">
            <span className="serif font-medium tracking-tight">Questions </span>
            <span className="italic-serif text-foreground">fréquentes.</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <div 
                className={`rounded-2xl border transition-colors duration-300 backdrop-blur-sm ${openIndex === i ? 'border-white/[0.15] bg-white/[0.05]' : 'border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05]'}`}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-foreground">{faq.q}</span>
                  <ChevronDown className={`size-5 shrink-0 ml-4 text-muted-foreground transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact fallback */}
        <Reveal delay={0.5} className="mt-12 text-center">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8">
            <p className="text-muted-foreground text-sm mb-4">
              Tu n&apos;as pas trouvé ta réponse ?
            </p>
            <a 
              href="mailto:contact@alexandredupont.com" 
              className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:underline underline-offset-4 transition-colors"
            >
              <Mail className="size-4" />
              Contacte-nous directement
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
