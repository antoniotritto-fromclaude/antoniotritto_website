'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getConsent,
  setConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
} from '@/lib/cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Lettura di localStorage: va fatta in un effect (non durante il render)
    // per evitare un mismatch di idratazione tra server e client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (getConsent() === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  const choose = (value: 'accepted' | 'rejected') => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] bg-navy text-white border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <p className="text-sm text-gray-300 leading-relaxed flex-1 text-justify hyphens-auto">
          Questo sito utilizza cookie tecnici necessari al funzionamento. Con il tuo consenso, utilizza
          anche cookie di terze parti per la riproduzione di contenuti multimediali (es. player Spotify
          e YouTube). Puoi accettare o rifiutare liberamente: la scelta non pregiudica la normale
          navigazione del sito. Per maggiori informazioni consulta la{' '}
          <Link href="/cookie-policy" className="underline hover:text-amber-500">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="flex-1 md:flex-none px-6 py-3 border border-white/30 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="flex-1 md:flex-none px-6 py-3 bg-amber-500 text-navy rounded-md text-sm font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
