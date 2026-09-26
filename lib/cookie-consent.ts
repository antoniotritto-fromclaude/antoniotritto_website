// Gestione centralizzata della scelta di consenso cookie.
// Sito statico, senza backend: la scelta viene salvata solo nel browser
// dell'utente (localStorage), non su un server.

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_CONSENT_EVENT = 'cookie-consent-change';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'open-cookie-preferences';

export type ConsentValue = 'accepted' | 'rejected' | null;

export function getConsent(): ConsentValue {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setConsent(value: 'accepted' | 'rejected') {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}
