'use client';

import { useEffect, useState } from 'react';
import { Headphones } from 'lucide-react';
import {
  getConsent,
  openCookiePreferences,
  COOKIE_CONSENT_EVENT,
  type ConsentValue,
} from '@/lib/cookie-consent';

export default function PodcastPlayer({ embedUrl }: { embedUrl: string }) {
  const [playing, setPlaying] = useState(false);
  const [consent, setConsentState] = useState<ConsentValue>(null);

  useEffect(() => {
    // Lettura di localStorage: va fatta in un effect (non durante il render)
    // per evitare un mismatch di idratazione tra server e client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsentState(getConsent());
    const onChange = () => setConsentState(getConsent());
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  if (playing && consent === 'accepted') {
    return (
      <iframe
        src={embedUrl}
        title="Company Creators - Il Podcast di Antonio Tritto"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-0"
      />
    );
  }

  return (
    <div className="h-[352px] bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center px-8 gap-4">
      <Headphones className="w-10 h-10 text-amber-500" />
      {consent === 'accepted' ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="bg-navy text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-navy/90 transition-colors"
        >
          Carica il player Spotify
        </button>
      ) : (
        <>
          <p className="text-gray-600 text-sm max-w-sm text-justify hyphens-auto">
            Per ascoltare gli episodi direttamente qui è necessario accettare i cookie di terze parti
            di Spotify.
          </p>
          <button
            type="button"
            onClick={() => openCookiePreferences()}
            className="bg-navy text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-navy/90 transition-colors"
          >
            Gestisci preferenze cookie
          </button>
        </>
      )}
    </div>
  );
}
