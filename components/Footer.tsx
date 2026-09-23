import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Youtube, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Contact Section */}
        <div id="contatti" className="mb-24 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-12 tracking-tight">
            ENTRA IN CONTATTO
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
            <a 
              href="mailto:antoniotritto@gmail.com" 
              className="flex items-center justify-center gap-3 px-10 py-5 bg-amber-500 text-navy rounded-md font-bold text-lg hover:bg-amber-400 transition-all shadow-lg group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              INVIA EMAIL
            </a>
            <a 
              href="tel:+393494793762" 
              className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:text-navy transition-all shadow-lg group"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              TELEFONAMI
            </a>
            <a 
              href="https://wa.me/393494793762" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-md font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-lg group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              WHATSAPP
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center border-t border-gray-800 pt-16">
          {/* Logo and Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col mb-6">
              <div className="text-3xl font-bold tracking-tighter uppercase leading-none">
                <span className="font-light">antonio</span>
                <span className="font-bold">tritto</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mt-2">
                Private Banker
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-justify hyphens-auto">
              Consulenza finanziaria e gestione patrimoniale d&apos;eccellenza. Proteggi il tuo futuro con un partner di fiducia.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold uppercase mb-8 tracking-wider">Seguimi sui miei canali social</h3>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/in/antoniotritto/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/@antoniotritto" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/antonio.tritto.cf/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold uppercase mb-8 tracking-wider">Disclaimer</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphens-auto">
              Antonio Tritto - Private Banker. Iscritto Albo OCF dal 2020. P.IVA: 08120320729. Sede Milano, Roma , Bari
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
          <p>&copy; 2026 Antonio Tritto | Private Banker &ndash; Privacy Policy &ndash; Cookie Policy</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
