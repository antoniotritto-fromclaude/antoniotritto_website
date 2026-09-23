import Image from 'next/image';
import Link from 'next/link';

import { TrendingUp, Landmark, Globe, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-[#f8f9fa] overflow-hidden">
      {/* Background Image (faded) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://picsum.photos/seed/office/1920/1080"
          alt="Office background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center pt-20 pb-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center z-20">
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-tight text-navy mb-6">
            PROTEGGI IL TUO FUTURO,<br />
            VALORIZZA IL TUO PATRIMONIO.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-xl font-light text-justify hyphens-auto">
            Antonio Tritto è un Private Banker, esperto nella gestione patrimoniale e nell&apos;ottimizzazione fiscale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
            <Link 
              href="#servizi" 
              className="px-10 py-4 bg-gradient-to-b from-[#6b7280] to-[#374151] text-white rounded-md font-medium text-lg hover:from-[#4b5563] hover:to-[#1f2937] transition-all text-center shadow-md w-full sm:w-auto"
            >
              Scopri i Servizi
            </Link>
            <Link 
              href="#contatti" 
              className="px-10 py-4 bg-gradient-to-b from-[#fde68a] to-[#f59e0b] text-navy rounded-md font-medium text-lg hover:from-[#fcd34d] hover:to-[#d97706] transition-all text-center shadow-md w-full sm:w-auto"
            >
              Contattami
            </Link>
          </div>

          {/* Expertise Icons Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl mx-auto mt-4">
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-amber-500 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Wealth<br/>Management</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-amber-500 transition-colors duration-300">
                <Landmark className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Private<br/>Banking</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-amber-500 transition-colors duration-300">
                <Globe className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Private<br/>Markets</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-amber-500 transition-colors duration-300">
                <Calculator className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Tax<br/>Optimization</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end relative h-[500px] md:h-[700px]">
          <div className="relative w-full max-w-[500px] h-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-protezione.jpg"
              alt="Protezione Patrimonio - Antonio Tritto"
              fill
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle gradient overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
