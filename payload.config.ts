import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Leads } from './collections/Leads'
import { HomePage } from './globals/HomePage'
import { Settings } from './globals/Settings'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_SENDER_ADDRESS || 'noreply@votredomaine.com',
    defaultFromName: process.env.EMAIL_SENDER_NAME || 'Payload CMS',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  // ---------------------------------------------------------------------------
  // Admin
  // ---------------------------------------------------------------------------
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // ---------------------------------------------------------------------------
  // Collections & Globals
  // ---------------------------------------------------------------------------
  collections: [Users, Media, Leads],
  globals: [HomePage, Settings],

  // ---------------------------------------------------------------------------
  // Database — Supabase PostgreSQL (Transaction Pooler)
  // ---------------------------------------------------------------------------
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
      max: 10,
      connectionTimeoutMillis: 10000,
    },
  }),

  // ---------------------------------------------------------------------------
  // Rich Text Editor
  // ---------------------------------------------------------------------------
  editor: lexicalEditor(),

  // ---------------------------------------------------------------------------
  // Plugins
  // ---------------------------------------------------------------------------
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.SUPABASE_BUCKET || 'media',
      config: {
        endpoint: process.env.SUPABASE_ENDPOINT!,
        region: process.env.SUPABASE_REGION || 'eu-west-1',
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY || '',
          secretAccessKey: process.env.SUPABASE_S3_SECRET_KEY || '',
        },
        forcePathStyle: true,
      },
    }),
  ],

  // ---------------------------------------------------------------------------
  // Secret & TypeScript
  // ---------------------------------------------------------------------------
  secret: process.env.PAYLOAD_SECRET!,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
