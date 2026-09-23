import Image from 'next/image';

export default function Mission() {
  return (
    <section id="filosofia" className="relative w-full py-32 overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/filosofia-bari.jpg"
          alt="Bari - sfondo La Filosofia"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase mb-8 tracking-tight">
            LA FILOSOFIA
          </h2>
          
          <div className="space-y-6 text-white/90 text-lg font-light leading-relaxed text-justify hyphens-auto">
            <p>
              Quando Antonio Tritto ha iniziato la sua carriera nel Private Banking, aveva un obiettivo chiaro: offrire una consulenza che mettesse al centro la persona e i suoi progetti di vita, non solo i numeri.
            </p>
            <p>
              Attraverso anni di esperienza nel banking, ha sviluppato un metodo di analisi che integra pianificazione finanziaria,gestione e protezione patrimoniale e ottimizzazione fiscale.
            </p>
            <p>
              Antonio crede fermamente che la fiducia sia il patrimonio più prezioso. Per questo opera con massima diligenza, aiutando famiglie, liberi professionisti e imprenditori a navigare con sicurezza le sfide quotidiane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
