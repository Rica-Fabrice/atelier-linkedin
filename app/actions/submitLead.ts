'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function submitLead(prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email) {
    return { error: 'Nom et email sont requis.' }
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
