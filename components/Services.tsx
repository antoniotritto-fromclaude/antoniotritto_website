import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'IL LIBRO',
      description: 'Scopri la mia guida alla gestione patrimoniale consapevole e le strategie per proteggere i tuoi risparmi in un mercato in continua evoluzione.',
      linkText: 'INIZIA A LEGGERE',
      linkHref: '/libro',
    },
    {
      title: "I SERVIZI",
      description: 'Dalla pianificazione successoria alla gestione dei grandi patrimoni. Soluzioni su misura per ogni esigenza finanziaria e familiare.',
      linkText: 'SCOPRI DI PIÙ',
      linkHref: '#servizi',
    },
    {
      title: 'CONSULENZA',
      description: 'Antonio Tritto offre una consulenza indipendente e personalizzata, basata su anni di esperienza nel settore del Private Banking.',
      linkText: 'PRENOTA UN APPUNTAMENTO',
      linkHref: 'https://calendly.com/antoniotritto/appuntamento?back=1&month=2026-09',
    },
  ];

  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {services.map((service, index) => {
            const isExternal = service.linkHref.startsWith('http');
            return (
              <div key={index} className="flex flex-col items-center">
                <h2 className="font-oswald text-4xl font-bold mb-6 tracking-wider uppercase">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                  {service.description}
                </p>
                {isExternal ? (
                  <a
                    href={service.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 font-bold text-xs tracking-[0.2em] hover:text-amber-400 transition-colors uppercase border-b border-transparent hover:border-amber-400 pb-1"
                  >
                    {service.linkText}
                  </a>
                ) : (
                  <Link
                    href={service.linkHref}
                    className="text-amber-500 font-bold text-xs tracking-[0.2em] hover:text-amber-400 transition-colors uppercase border-b border-transparent hover:border-amber-400 pb-1"
                  >
                    {service.linkText}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
