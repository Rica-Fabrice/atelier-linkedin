import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    description: 'Contacts et prospects générés depuis le site.',
  },
  access: {
    create: () => true,
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
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create') {
          Promise.resolve().then(async () => {
            try {
              const settings = await req.payload.findGlobal({
                slug: 'settings',
              })

              const emails: string[] = []
              if (settings?.notificationEmails && Array.isArray(settings.notificationEmails)) {
                settings.notificationEmails.forEach((item: any) => {
                  if (item?.email) {
                    emails.push(item.email)
                  }
                })
              }

              if (emails.length === 0 && process.env.DEFAULT_ADMIN_EMAIL) {
                emails.push(process.env.DEFAULT_ADMIN_EMAIL)
              }

              if (emails.length > 0) {
                const formattedDate = doc.createdAt
                  ? new Date(doc.createdAt).toLocaleString('fr-FR', {
                      timeZone: 'Europe/Paris',
                    })
                  : new Date().toLocaleString('fr-FR', {
                      timeZone: 'Europe/Paris',
                    })

                const htmlContent = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9fa; padding: 40px 20px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);">
    
    <!-- Header -->
    <div style="background-color: #09090b; padding: 30px 40px; text-align: left;">
      <h1 style="color: #ffffff; font-size: 20px; font-weight: 500; margin: 0; letter-spacing: 0.5px;">Nouvelle Candidature</h1>
      <p style="color: #a1a1aa; font-size: 14px; margin: 5px 0 0 0;">Programme d'Accélération B2B</p>
    </div>

    <!-- Body -->
    <div style="padding: 40px;">
      <p style="color: #3f3f46; font-size: 16px; margin-bottom: 30px; line-height: 1.5;">
        Un nouveau prospect vient de soumettre ses informations. Voici les détails de la demande :
      </p>

      <!-- Data Table -->
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; width: 35%; color: #71717a; font-size: 14px; font-weight: 500;">Nom complet</td>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; color: #09090b; font-size: 15px; font-weight: 600;">${doc.name || ''}</td>
        </tr>
        <tr>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 14px; font-weight: 500;">E-mail professionnel</td>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; color: #2563eb; font-size: 15px; text-decoration: none;">
            <a href="mailto:${doc.email || ''}" style="color: #2563eb; text-decoration: none;">${doc.email || ''}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; color: #71717a; font-size: 14px; font-weight: 500;">Message / Contexte</td>
          <td style="padding: 15px 0; border-bottom: 1px solid #f4f4f5; color: #3f3f46; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${doc.message || ''}</td>
        </tr>
        <tr>
          <td style="padding: 15px 0; color: #71717a; font-size: 14px; font-weight: 500;">Date de soumission</td>
          <td style="padding: 15px 0; color: #3f3f46; font-size: 14px;">${formattedDate}</td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background-color: #fafafa; padding: 20px 40px; border-top: 1px solid #e4e4e7; text-align: center;">
      <p style="color: #a1a1aa; font-size: 12px; margin: 0;">Système de Vente Sécurisé • Confidentiel</p>
    </div>

  </div>
</div>
                `

                await req.payload.sendEmail({
                  to: emails.join(', '),
                  subject: `🚨 Nouveau Lead : ${doc.name || 'Inconnu'}`,
                  html: htmlContent,
                })
              }
            } catch (err) {
              console.error("Erreur d'envoi :", err)
              req.payload.logger.error(
                err,
                "Erreur lors de l'envoi de la notification de nouveau lead",
              )
            }
          })
        }
        return doc
      },
    ],
  },
  timestamps: true,
}
