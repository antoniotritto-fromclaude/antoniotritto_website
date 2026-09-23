import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Testimonials() {
  const videos = [
    { title: 'Gestione Patrimoniale: Strategie di Successo', id: 'v1' },
    { title: 'Intervista ad Antonio Tritto sul Mercato', id: 'v2' },
    { title: 'Pianificazione Successoria: Casi Reali', id: 'v3' },
    { title: 'Investimenti Sostenibili: Il Futuro', id: 'v4' },
  ];

  return (
    <section className="bg-navy text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-12 tracking-tight">
          DICONO DI LUI
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-400 italic text-lg leading-relaxed mb-10">
            &ldquo;Antonio Tritto non è solo un consulente finanziario, è un partner strategico. La sua capacità di analizzare scenari complessi e tradurli in soluzioni semplici e sicure è straordinaria. Grazie alla sua guida, la mia famiglia ha oggi una serenità patrimoniale che non avremmo mai pensato di raggiungere. Un professionista di rara integrità.&rdquo;
          </p>
          
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-amber-500">
              <Image
                src="https://picsum.photos/seed/client1/200/200"
                alt="Marco Rossi"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-bold text-xl uppercase tracking-wider">MARCO ROSSI</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Imprenditore</p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="relative aspect-video group cursor-pointer overflow-hidden rounded-lg bg-navy">
              <Image
                src={`https://picsum.photos/seed/bankvideo${index}/800/450`}
                alt={video.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
                <p className="mt-4 text-sm font-medium px-4">{video.title}</p>
              </div>
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden">
                  <Image src="https://picsum.photos/seed/tritto-avatar/50/50" alt="Avatar" width={32} height={32} />
                </div>
                <span className="text-xs font-semibold">Antonio Tritto</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
