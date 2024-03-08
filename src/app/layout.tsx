import { Metadata, Viewport } from 'next';
import { Karla, Lora, JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import * as colors from '@radix-ui/colors';
import resumeConfig from '../../edit-me/config/resumeConfig';

// ICONS CONFIG
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// STYLES
import { personal } from '@content';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { headers } from 'next/headers';
import { protocol, vercelURL } from 'src/helpers/env';
import { fullName } from 'src/helpers/utils';
import { twMerge } from 'tailwind-merge';
import './globals.css';
// import { getTheme } from 'src/helpers/themeServer';

import dynamic from 'next/dynamic'
import { getTheme } from './actions.client';
import Providers from './providers';
// const Providers = dynamic(() => import('./providers'), { ssr: false })

const accentColor = resumeConfig.accentColor;

const inter = Karla({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

const lora = Lora({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lora',
})

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${host || vercelURL}`;
  const siteName = `${fullName} Resumé`;
  const title = `Resumé | ${fullName} | Somewhere`;
  const description = `Resumé for ${fullName}.`;

  return {
    metadataBase: new URL(baseURL),
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'pdf'],
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
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  // @ts-ignore
  themeColor: colors[accentColor][`${accentColor}9`],
  width: 'device-width',
  // colorScheme: resumeConfig.appTheme === ThemeSetting.Dark ? 'dark' : 'light',
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  const theme = getTheme()
  console.log('theme issss', theme)
  return (
    <html
      lang="en"
      className={twMerge(
        inter.variable,
        lora.variable,
        jetBrainsMono.variable,
      )}
      suppressHydrationWarning
    > 
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
