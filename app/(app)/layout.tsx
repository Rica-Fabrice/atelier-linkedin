import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Accélération Commerciale",
    default: "Acquisition & Vente B2B | Le Programme",
  },
  description:
    "La mécanique de précision pour attirer des prospects qualifiés et structurer vos cycles de vente B2B.",
}

export const viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
