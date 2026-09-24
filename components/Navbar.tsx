'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/#about', label: 'ANTONIO' },
  { href: '/#filosofia', label: 'LA FILOSOFIA' },
  { href: '/#servizi', label: 'SERVIZI' },
  { href: '/libro', label: 'LIBRO' },
  { href: '/newsletter', label: 'NEWSLETTER' },
  { href: '/podcast', label: 'PODCAST' },
  { href: '/#contatti', label: 'CONTATTI' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      // Se si torna in cima con schermo largo, richiudi il pannello: evita che
      // resti aperto sotto la navbar completa che riappare.
      if (!isScrolled) setOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex h-20">
        {/* Left side - Black Logo Block */}
        <div className="bg-navy text-white flex items-center justify-end px-4 md:px-10 w-1/4 min-w-[180px] md:min-w-[250px]">
          <Link href="/" className="flex flex-col items-end group" onClick={() => setOpen(false)}>
            <div className="text-lg sm:text-xl md:text-4xl tracking-tighter flex items-baseline uppercase leading-none">
              <span className="font-light">antonio</span>
              <span className="font-bold">tritto</span>
            </div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Private Banker
            </div>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-between px-6 lg:px-12">
          {/* Desktop Navigation - visibile su schermi larghi solo finche' non si scorre */}
          <nav
            className={`${scrolled ? 'hidden' : 'hidden lg:flex'} items-center space-x-8 text-sm font-medium text-gray-800`}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-amber-500 transition-colors uppercase">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Toggle hamburger + CTA compatto - visibili quando la navigazione completa e' nascosta */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="#contatti"
              onClick={() => setOpen(false)}
              className={`${scrolled ? 'inline-flex' : 'inline-flex lg:hidden'} items-center px-4 py-2 bg-amber-500 text-navy rounded-md font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors whitespace-nowrap`}
            >
              Contattami
            </Link>
            <button
              type="button"
              className={`${scrolled ? '' : 'lg:hidden'} p-2 text-navy`}
              aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Pannello di navigazione a comparsa */}
      {open && (
        <nav className="flex flex-col bg-white border-t border-gray-100 px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-gray-800 uppercase tracking-wide border-b border-gray-50 last:border-0 hover:text-amber-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
