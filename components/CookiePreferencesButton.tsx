'use client';

import { openCookiePreferences } from '@/lib/cookie-consent';

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => openCookiePreferences()}
      className="bg-navy text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-navy/90 transition-colors"
    >
      Gestisci preferenze cookie
    </button>
  );
}
