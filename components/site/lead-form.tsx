"use client"

import { useActionState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

import { submitLead } from "@/app/actions/submitLead"

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitLead, null)

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-zinc-900/50 rounded-2xl border border-white/10 mt-12 w-full max-w-md mx-auto">
        <CheckCircle2 className="size-12 text-emerald-500 mb-4" />
        <h3 className="text-xl font-medium text-foreground mb-2">Candidature reçue !</h3>
        <p className="text-muted-foreground text-sm">
          Nous avons bien reçu tes informations. Nous te recontacterons très vite pour l'appel stratégique.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="mt-12 w-full max-w-md mx-auto flex flex-col gap-4 text-left">
      <input
        type="text"
        name="_alt_email_validation"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        className="absolute w-0 h-0 opacity-0 -z-10 pointer-events-none"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isPending}
          className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 text-sm text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all disabled:opacity-50"
          placeholder="Alexandre Dupont"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 text-sm text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all disabled:opacity-50"
          placeholder="alexandre@exemple.com"
        />
        {state?.emailError && (
          <span className="text-red-500 text-sm mt-1 pl-1">
            {state.error}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">
          Message (Optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          disabled={isPending}
          className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-sm text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all resize-none disabled:opacity-50"
          placeholder="Un mot sur ton activité..."
        />
      </div>

      {state?.error && !state?.emailError && (
        <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-foreground px-8 text-base font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] disabled:opacity-70 disabled:hover:scale-100"
      >
        {isPending ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <>
            Réserver mon appel stratégique
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <span className="text-xs text-muted-foreground text-center mt-2">
        Places limitées. Seulement 5 nouveaux accompagnements par mois.
      </span>
    </form>
  )
}
