import Image from 'next/image';
import { ShoppingCart, ShieldAlert, PiggyBank, Landmark, Users2, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AMAZON_URL = 'https://www.amazon.it/RESILIENZA-PROSPERITA-benessere-finanziario-imprenditori-ebook/dp/B0DMK1MBQ6';

const temi = [
  {
    title: 'Gestione dei rischi aziendali',
    description: 'Come riconoscere per tempo i rischi che minacciano un\'impresa e costruire strategie concrete per mitigarli, prima che diventino emergenze.',
    icon: <ShieldAlert className="w-10 h-10 text-amber-500" />,
  },
  {
    title: 'Pianificazione finanziaria',
    description: 'Le strategie più efficaci per organizzare le risorse dell\'azienda e della famiglia imprenditoriale, con un metodo pratico e replicabile.',
    icon: <PiggyBank className="w-10 h-10 text-amber-500" />,
  },
  {
    title: 'Ottimizzazione fiscale e tutela del patrimonio',
    description: 'Strumenti concreti per alleggerire il carico fiscale e proteggere quanto costruito nel tempo, dentro e fuori dall\'azienda.',
    icon: <Landmark className="w-10 h-10 text-amber-500" />,
  },
  {
    title: 'Passaggio generazionale',
    description: 'Come affrontare uno dei momenti più delicati nella vita di un\'impresa, trasmettendo valore e continuità a chi verrà dopo.',
    icon: <Users2 className="w-10 h-10 text-amber-500" />,
  },
];

export default function LibroPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/5 relative aspect-[1500/1383] max-w-[400px] mx-auto lg:mx-0">
            <Image
              src="/images/libro-cover.jpg"
              alt="Resilienza e Prosperità - copertina del libro di Antonio Tritto"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 400px"
              priority
            />
          </div>

          <div className="w-full lg:w-3/5">
            <p className="text-gray-500 uppercase tracking-widest font-medium mb-4">Antonio Tritto</p>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold uppercase leading-[1.05] mb-4 text-navy">
              RESILIENZA E PROSPERITA&apos; 
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-700 mb-8 text-justify hyphens-auto">
              La strada verso il benessere finanziario degli imprenditori
            </p>

            <span className="inline-block bg-navy text-white px-4 py-2 font-bold uppercase text-sm tracking-widest mb-8">
              Libro &middot; disponibile su Amazon
            </span>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify hyphens-auto">
              Un libro pensato per accompagnare imprenditori e liberi professionisti attraverso le
              dinamiche più complesse del business moderno: dall&apos;analisi e mitigazione dei
              rischi aziendali alle strategie di pianificazione finanziaria più efficaci,
              dall&apos;ottimizzazione fiscale alla tutela patrimoniale, fino alle delicate sfide del
              passaggio generazionale.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-justify hyphens-auto">
              Una guida pratica e operativa, con strumenti concreti e soluzioni applicabili da subito,
              adatta sia alle piccole realtà imprenditoriali che alle società di capitali.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#fde68a] to-[#f59e0b] text-navy px-10 py-4 rounded-md font-bold text-lg flex items-center gap-3 shadow-lg hover:scale-105 transition-transform"
              >
                <ShoppingCart className="w-6 h-6" />
                Acquista su Amazon
              </a>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">5/5 su Amazon (3 recensioni)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Temi trattati */}
      <section id="temi" className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-6 tracking-tight text-navy">
              Cosa troverai nel libro
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temi.map((tema, i) => (
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex gap-6">
                <div className="shrink-0">{tema.icon}</div>
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase mb-3 text-navy">{tema.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-justify hyphens-auto">{tema.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: A chi si rivolge */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tight text-navy">
            A CHI E&apos; RIVOLTO
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4 text-justify hyphens-auto">
            A imprenditori e liberi professionisti che vogliono smettere di subire la complessità
            del business e iniziare a governarla.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed text-justify hyphens-auto">
            Che tu guidi una piccola realtà familiare o una società di capitali strutturata,
            troverai un metodo pratico, non teoria astratta.
          </p>
        </div>
      </section>

      {/* Section 4: Trust / rating */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <p className="text-2xl font-oswald uppercase tracking-wide mb-3">5 su 5, valutazione media su Amazon (3 recensioni)</p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase border-b border-amber-500 hover:text-amber-400 hover:border-amber-400 transition-colors"
          >
            Leggi le recensioni su Amazon
          </a>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-6 text-navy">
            Inizia a costruire resilienza e prosperità
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Disponibile su Amazon in formato ebook.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-b from-[#fde68a] to-[#f59e0b] text-navy px-12 py-5 rounded-lg font-bold text-xl shadow-xl hover:scale-105 transition-transform"
          >
            <ShoppingCart className="w-6 h-6" />
            Acquista ora su Amazon
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
