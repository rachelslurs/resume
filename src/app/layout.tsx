import * as colors from '@radix-ui/colors'
import Script from 'next/script'
import { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'
import resumeConfig from '../../edit-me/config/resumeConfig'

// ICONS CONFIG
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

// STYLES
import { personal } from '@content'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { headers } from 'next/headers'
import { protocol, vercelURL } from 'src/helpers/env'
import { fullName } from 'src/helpers/utils'
import { twMerge } from 'tailwind-merge'
import { ThemeSetting } from '../../edit-me/types/Config'
import './globals.css'

const accentColor = resumeConfig.accentColor

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host')
  const baseURL = `${protocol}://${host || vercelURL}`
  const siteName = `${fullName} Resume`
  const title = `${fullName} Resume | New York, NY`
  const description = `Professional resume for ${fullName}.`

  return {
    metadataBase: new URL(baseURL),
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'typescript', 'tailwindcss'],
    openGraph: {
      type: 'profile',
      firstName: personal.givenName,
      lastName: personal.familyName,
      title,
      description,
      siteName,
      url: baseURL,
    },
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
    },
  }
}

export const viewport: Viewport = {
  initialScale: 1,
  // @ts-ignore
  themeColor: colors[accentColor][`${accentColor}9`],
  width: 'device-width',
}

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html
      lang="en"
      className={twMerge(
        inter.variable,
        jetBrainsMono.variable,
        resumeConfig.appTheme === ThemeSetting.Dark && 'dark',
      )}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZCHTJJSW4H"
        strategy="afterInteractive"
      />
      <Script id="google" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZCHTJJSW4H');
        `}
      </Script>
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
