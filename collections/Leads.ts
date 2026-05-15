import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    description: 'Contacts et prospects générés depuis le site.',
  },
  access: {
    // Permettre la création publique (formulaire de contact)
    create: () => true,
    // Lecture/modification réservée aux admins connectés
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
    {
      name: 'source',
      type: 'select',
      label: 'Source',
      defaultValue: 'website',
      options: [
        { label: 'Site web', value: 'website' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'Recommandation', value: 'referral' },
        { label: 'Autre', value: 'other' },
      ],
    },
  ],
  timestamps: true,
}
