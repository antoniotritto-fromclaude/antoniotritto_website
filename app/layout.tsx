import type {Metadata} from 'next';
import localFont from 'next/font/local';
import CookieConsent from '@/components/CookieConsent';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const inter = localFont({
  src: [{ path: './fonts/inter-latin-variable.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
});

const oswald = localFont({
  src: [
    { path: './fonts/oswald-200.woff2', weight: '200', style: 'normal' },
    { path: './fonts/oswald-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/oswald-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/oswald-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/oswald-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/oswald-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Private Banker e Consulente Finanziario a Bari | Antonio Tritto',
    template: '%s | Antonio Tritto',
  },
  description: 'Private Banker Bari e Consulente Finanziario Bari: gestione patrimoniale, successione, fiscalità e mercati privati in Puglia. Primo colloquio gratuito.',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Antonio Tritto - Private Banker',
    images: [
      {
        url: '/images/og-antonio-tritto.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonio Tritto - Private Banker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-antonio-tritto.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased text-navy" suppressHydrationWarning>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
