import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Page d\'accueil',
  admin: {
    description: 'Contenu dynamique de la page d\'accueil du site.',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroTitle',
              type: 'richText',
              required: true,
              label: 'Titre principal',
            },
            {
              name: 'heroDescription',
              type: 'richText',
              label: 'Description',
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Image Hero',
            },
          ],
        },
        {
          label: 'Approche',
          fields: [
            {
              name: 'approachTitle',
              type: 'text',
              label: 'Titre de la section Approche',
            },
            {
              name: 'approachText',
              type: 'richText',
              label: 'Texte (Rich Text)',
            },
            {
              name: 'approachImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Image d\'illustration',
            },
          ],
        },
        {
          label: 'Programme',
          fields: [
            {
              name: 'programTitle',
              type: 'text',
              label: 'Titre de la section Programme',
            },
            {
              name: 'programModules',
              type: 'array',
              label: 'Modules du programme',
              labels: {
                singular: 'Module',
                plural: 'Modules',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Titre',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icône',
                  options: [
                    { label: 'Cible', value: 'Target' },
                    { label: 'Main', value: 'Hand' },
                    { label: 'Éclair', value: 'Zap' },
                    { label: 'Téléphone', value: 'Phone' },
                    { label: 'Utilisateurs', value: 'Users' },
                    { label: 'Coché', value: 'Check' },
                    { label: 'Paramètres', value: 'Settings' },
                    { label: 'Interdit', value: 'Ban' },
                    { label: 'Calendrier', value: 'Calendar' },
                    { label: 'Message', value: 'MessageCircle' },
                    { label: 'Couches', value: 'Layers' },
                    { label: 'Fichier', value: 'FileText' },
                    { label: 'Ordinateur', value: 'Laptop' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Résultats / Alumni',
          fields: [
            {
              name: 'alumniTitle',
              type: 'text',
              label: 'Titre de la section Alumni',
            },
            {
              name: 'alumniTestimonials',
              type: 'array',
              label: 'Témoignages',
              labels: {
                singular: 'Témoignage',
                plural: 'Témoignages',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Nom',
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Rôle / Métier',
                },
                {
                  name: 'message',
                  type: 'textarea',
                  label: 'Message',
                },
                {
                  name: 'roi',
                  type: 'text',
                  label: 'Résultat généré (ex: +15k€)',
                },
                {
                  name: 'photo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
              ],
            },
          ],
        },
        {
          label: 'Philosophie',
          fields: [
            {
              name: 'philosophyTitle',
              type: 'text',
              label: 'Titre de la section Philosophie',
            },
            {
              name: 'philosophySubtitle',
              type: 'text',
              label: 'Sous-titre de la section Philosophie',
            },
            {
              name: 'philosophyPoints',
              type: 'array',
              label: 'Points de philosophie',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Titre du point',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icône',
                  options: [
                    { label: 'Cible', value: 'Target' },
                    { label: 'Étincelle', value: 'Sparkles' },
                    { label: 'Message', value: 'MessageCircle' },
                    { label: 'Téléphone', value: 'Phone' },
                    { label: 'Utilisateurs', value: 'Users' },
                    { label: 'Coché', value: 'Check' },
                    { label: 'Clé à molette', value: 'Wrench' },
                    { label: 'Interdit', value: 'Ban' },
                    { label: 'Mégaphone', value: 'Megaphone' },
                    { label: 'Cœur', value: 'Heart' },
                    { label: 'Fusée', value: 'Rocket' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
