import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Testimonials from '@/components/Testimonials';
import PrivateBankingServices from '@/components/PrivateBankingServices';
import About from '@/components/About';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antonio Tritto',
  jobTitle: 'Private Banker',
  description: "Private Banker e Consulente Finanziario a Bari e in Puglia, esperto nella gestione patrimoniale e nell'ottimizzazione fiscale.",
  workLocation: {
    '@type': 'Place',
    name: 'Bari',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bari',
      addressRegion: 'Puglia',
      addressCountry: 'IT',
    },
  },
  url: SITE_URL,
  image: `${SITE_URL}/images/antonio-tritto.jpg`,
  knowsAbout: [
    'Gestione patrimoniale',
    'Pianificazione successoria',
    'Ottimizzazione fiscale',
    'Mercati privati',
    'Private equity',
    'Venture capital',
  ],
  sameAs: [
    'https://www.linkedin.com/in/antoniotritto/',
    'https://www.youtube.com/@antoniotritto',
    'https://www.instagram.com/antonio.tritto.cf/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Antonio Tritto - Private Banker',
  url: SITE_URL,
  inLanguage: 'it-IT',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Testimonials />
      <PrivateBankingServices />
      <About />
      <Footer />
    </main>
  );
}
