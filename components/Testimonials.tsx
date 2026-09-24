'use client';

import { useEffect, useState } from 'react';
import { Gauge, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Roberta Scorcia',
    role: 'Commercialista',
    rating: 5,
    text: 'Affidabilissimo consulente finanziario!',
  },
  {
    name: 'Pasquale Campanile',
    role: 'Responsabile Commerciale',
    rating: 5,
    text: 'Antonio, dopo aver valutato attentamente il mio patrimonio, ha sfruttato la sua esperienza bancaria per modificare le mie abitudini, precedentemente efficaci, suggerendomi opzioni più redditizie e meno stressanti. La sua professionalità e la sua calma si sono rivelate una combinazione vincente!',
  },
  {
    name: 'Niccolò Loizzi',
    role: 'Manager',
    rating: 5,
    text: 'Sono molto soddisfatto del servizio di consulenza finanziaria offerto da Antonio, che mi ha aiutato a pianificare il futuro finanziario mio e della mia famiglia. Antonio si è dimostrato un professionista estremamente competente e affidabile, offrendomi un supporto completo e personalizzato nella scelta delle soluzioni finanziarie più adatte alle nostre esigenze. Grazie alla sua guida, ho acquisito maggiori competenze in materia di pianificazione finanziaria, concentrandomi in particolare sul risparmio per l\'istruzione dei miei figli e sulla preparazione alla pensione. Consiglio vivamente Antonio a chiunque sia alla ricerca di un consulente finanziario esperto e attento.',
  },
  {
    name: 'Giuseppe Muciaccia',
    role: 'Business Developer',
    rating: 5,
    text: 'Antonio è il mio consulente finanziario, una persona competente e professionale. Si è sempre dimostrato disponibile e serio nel suo lavoro, aiutandomi a comprendere l\'importanza della pianificazione finanziaria per il mio futuro. Grazie alla sua competenza e dedizione, ho acquisito maggiore sicurezza nelle mie decisioni finanziarie. Lo consiglio vivamente.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[active];

  return (
    <section className="bg-navy text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-12 tracking-tight">
          DICONO DI LUI
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
            ))}
          </div>

          <p className="text-gray-400 italic text-lg leading-relaxed mb-8 min-h-[6rem] text-justify hyphens-auto">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="flex flex-col items-center mb-8">
            <h3 className="font-bold text-xl uppercase tracking-wider">{current.name}</h3>
            {current.role && (
              <p className="text-gray-500 text-sm uppercase tracking-widest">{current.role}</p>
            )}
            <p className="text-gray-600 text-xs uppercase tracking-widest mt-2">Recensione Google</p>
          </div>

          {/* Puntini di navigazione del carosello */}
          <div className="flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Mostra recensione ${i + 1}`}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? 'bg-amber-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA ICEF */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-10 md:p-12">
          <Gauge className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase mb-8 tracking-tight">
            Vuoi misurare gratuitamente la tua consapevolezza finanziaria?
          </h3>
          <a
            href="/icef/"
            className="inline-flex items-center gap-3 bg-gradient-to-b from-[#fde68a] to-[#f59e0b] text-navy px-10 py-4 rounded-md font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Fai il test gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
