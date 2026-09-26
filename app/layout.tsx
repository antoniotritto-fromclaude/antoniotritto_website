import type {Metadata} from 'next';
import localFont from 'next/font/local';
import CookieConsent from '@/components/CookieConsent';
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
  title: 'Antonio Tritto - Private Banker',
  description: 'Antonio Tritto è Private Banker esperto in gestione patrimoniale e consulenza finanziaria personalizzata.',
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
