import { Shield, TrendingUp, Users, Landmark, Leaf, Briefcase } from 'lucide-react';

export default function PrivateBankingServices() {
  const services = [
    {
      title: 'Wealth Management',
      description: 'Gestione attiva e personalizzata del portafoglio titoli, con strategie mirate alla crescita e alla conservazione del capitale nel tempo.',
      icon: <TrendingUp className="w-10 h-10 text-amber-500" />,
    },
    {
      title: 'Pianificazione Successoria',
      description: 'Consulenza dedicata per gestire il passaggio generazionale in modo sereno, minimizzando gli impatti fiscali e proteggendo gli eredi.',
      icon: <Users className="w-10 h-10 text-amber-500" />,
    },
    {
      title: 'Protezione del Patrimonio',
      description: 'Analisi e implementazione di strumenti giuridici e assicurativi per blindare il patrimonio familiare da rischi esterni.',
      icon: <Shield className="w-10 h-10 text-amber-500" />,
    },
    {
      title: 'Ottimizzazione Fiscale',
      description: 'Monitoraggio costante delle normative per ottimizzare il carico tributario sulle rendite finanziarie e sui trasferimenti di ricchezza.',
      icon: <Landmark className="w-10 h-10 text-amber-500" />,
    },
    {
      title: 'Investimenti ESG',
      description: 'Selezione di opportunità di investimento che rispettano criteri ambientali, sociali e di governance, per una finanza etica e redditizia.',
      icon: <Leaf className="w-10 h-10 text-amber-500" />,
    },
    {
      title: 'Corporate Advisory',
      description: 'Supporto strategico per la finanza straordinaria dell\'azienda di famiglia, integrando le esigenze personali con quelle del business.',
      icon: <Briefcase className="w-10 h-10 text-amber-500" />,
    },
  ];

  return (
    <section id="servizi" className="bg-[#f8f9fa] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-6 tracking-tight text-navy">
            I MIEI SERVIZI
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-light text-justify hyphens-auto">
            Soluzioni d&apos;eccellenza costruite intorno alle tue esigenze, per una gestione patrimoniale a 360 gradi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-justify hyphens-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
