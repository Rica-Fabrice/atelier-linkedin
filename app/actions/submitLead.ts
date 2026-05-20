'use server'

import { z } from 'zod'

import { getPayload } from 'payload'
import config from '@payload-config'

const DISPOSABLE_DOMAINS = new Set([
  'yopmail.com',
  'tempmail.com',
  '10minutemail.com',
  'mailinator.com',
  'guerrillamail.com',
  'trashmail.com',
  'disposable.com',
  'throwawaymail.com',
  'temp-mail.org',
  'getairmail.com',
  'sharklasers.com',
  'guerrillamailblock.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamail.biz',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.to',
  'jetable.org',
  'dispostable.com',
  'spamgourmet.com'
])

const leadSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères.").max(100, "Le nom ne peut excéder 100 caractères."),
  email: z.string().email("Veuillez fournir une adresse e-mail valide.").max(100, "L'e-mail ne peut excéder 100 caractères."),
  message: z.string().max(2000, "Le message ne peut excéder 2000 caractères.").optional().nullable(),
})

export async function submitLead(prevState: unknown, formData: FormData) {
  const altEmailValidation = formData.get('_alt_email_validation') as string

  if (altEmailValidation) {
    return { success: true }
  }

  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const validatedFields = leadSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message }
  }

  const { name, email, message } = validatedFields.data

  const domain = email.split('@')[1]?.toLowerCase().trim()
  if (domain && DISPOSABLE_DOMAINS.has(domain)) {
    return {
      error: 'Veuillez utiliser une adresse e-mail valide (les adresses temporaires ne sont pas acceptées).',
      emailError: true
    }
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'leads',
      data: {
        name,
        email,
        message,
        source: 'website',
      },
    })

    return { success: true }
  } catch (error) {
    return { error: 'Une erreur est survenue lors de l\'envoi de la candidature.' }
  }
}
