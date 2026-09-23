import Image from 'next/image';
import { Check } from 'lucide-react';

export default function About() {
  const points = [
    'Come proteggere il patrimonio familiare dalle oscillazioni dei mercati?',
    'Quali sono le migliori strategie per la pianificazione successoria?',
    'Come ottimizzare il carico fiscale sugli investimenti finanziari?',
  ];

  const results = [
    'Di famiglie a pianificare il proprio futuro finanziario con serenità',
    'Di imprenditori a gestire la liquidità aziendale e il passaggio generazionale',
    'Di professionisti a proteggere il proprio patrimonio',
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {/* Row 1, left: photo */}
        <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/antonio-tritto.jpg"
            alt="Antonio Tritto - Private Banker"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Row 1, right: heading + bio */}
        <div className="flex flex-col justify-center">
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-12 tracking-tight text-navy leading-tight">
            CHI È ANTONIO TRITTO?
          </h2>

          <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
            <p>
              Antonio Tritto è un Private Banker con oltre 15 anni di esperienza nel settore della consulenza finanziaria e della gestione patrimoniale.
            </p>
            <p>
              La sua carriera è caratterizzata da un approccio analitico e personalizzato, volto a costruire relazioni di fiducia durature con i propri clienti, basate sulla trasparenza e sull&apos;eccellenza dei risultati.
            </p>
            <p>
              Specializzato in Wealth Management, Antonio aiuta i propri clienti a navigare la complessità dei mercati finanziari, offrendo soluzioni su misura che integrano protezione, crescita e pianificazione del futuro.
            </p>
          </div>
        </div>

        {/* Row 2, left: consulenza box - same grid row as the box on the right, so they stretch to match */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h3 className="font-oswald text-2xl font-bold uppercase mb-6 tracking-tight text-navy">
            LA MIA CONSULENZA RISPONDE A DOMANDE QUALI:
          </h3>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-amber-500 rounded-full p-1 shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2, right: carriera box */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h3 className="font-oswald text-2xl font-bold uppercase mb-6 tracking-tight text-navy">
            NELLA MIA CARRIERA HO SUPPORTATO CENTINAIA:
          </h3>
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-amber-500 rounded-full p-1 shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">{result}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
