import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Configuration',
  admin: {
    group: 'Paramètres',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'notificationEmails',
      label: 'E-mails de notification (Nouveaux Leads)',
      type: 'array',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
  ],
}
