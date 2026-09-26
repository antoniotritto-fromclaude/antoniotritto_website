import { Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PodcastPlayer from '@/components/PodcastPlayer';

const SPOTIFY_URL = 'https://open.spotify.com/show/4KRGoL2cTRxTkk4KYyzfId';
const SPOTIFY_EMBED_URL = 'https://open.spotify.com/embed/show/4KRGoL2cTRxTkk4KYyzfId?utm_source=generator&theme=0';

export default function PodcastPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-500 uppercase tracking-widest font-medium mb-4">Un podcast di Antonio Tritto</p>
          <h1 className="font-oswald text-5xl md:text-6xl font-bold uppercase leading-[1.05] mb-6 text-navy">
            Company Creators
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-700 mb-10">
            Il podcast settimanale su imprese, imprenditori e le loro idee
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12 text-justify hyphens-auto">
            Ogni settimana esploro il mondo delle imprese, degli imprenditori e delle loro idee, con
            passione e curiosità. Ci immergiamo in storie affascinanti, approfondiamo idee innovative
            e ci ispiriamo alle imprese e agli imprenditori che hanno cambiato il mondo o lo stanno
            cambiando — per scoprire il lato più creativo e visionario del mondo degli affari, tra
            strategie di successo e spunti per chi sogna di diventare imprenditore o vuole far
            crescere la propria attività e il proprio mindset.
          </p>

          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-b from-[#fde68a] to-[#f59e0b] text-navy px-10 py-4 rounded-md font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <Headphones className="w-6 h-6" />
            Ascolta su Spotify
          </a>
        </div>
      </section>

      {/* Player incorporato */}
      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <PodcastPlayer embedUrl={SPOTIFY_EMBED_URL} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
