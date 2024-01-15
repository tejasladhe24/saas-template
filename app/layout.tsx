import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { siteConfig } from '@/siteConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            enableSystem
            defaultTheme='light'
            storageKey={process.env.THEME_STORAGE_KEY || 'saas-template-theme-key'}
          >
            {children}
            <ThemeToggle className='fixed right-4 bottom-4' />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
