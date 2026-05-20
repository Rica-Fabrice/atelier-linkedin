import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
      },
    ],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  upload: {
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texte alternatif',
    },
  ],
}
