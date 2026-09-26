import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookiePreferencesButton from '@/components/CookiePreferencesButton';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight text-navy">
            Cookie Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">Ultimo aggiornamento: settembre 2026</p>

          <CookiePreferencesButton />

          <div className="space-y-12 text-gray-700 leading-relaxed mt-12">
            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">1. Cosa sono i cookie</h2>
              <p className="text-justify hyphens-auto">
                I cookie sono piccoli file di testo che i siti visitati inviano al browser dell&apos;utente, dove
                vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Possono essere
                cookie tecnici, necessari al funzionamento del sito, oppure cookie di terze parti, installati da
                servizi esterni integrati nel sito (es. player multimediali).
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">2. Cookie tecnici utilizzati da questo sito</h2>
              <p className="text-justify hyphens-auto">
                Questo sito utilizza un unico cookie tecnico, strettamente necessario, per memorizzare nel browser
                dell&apos;utente la scelta espressa in merito ai cookie di terze parti (accettazione o rifiuto), in
                modo da non richiederla ad ogni visita. Questo dato resta salvato solo sul dispositivo
                dell&apos;utente e non viene trasmesso a nessun server. Non essendo un cookie di profilazione, non
                richiede consenso ai sensi della normativa vigente.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">3. Cookie di terze parti</h2>
              <p className="text-justify hyphens-auto mb-4">
                Questo sito, allo stato attuale, non utilizza cookie di profilazione o di analisi statistica. I
                soli cookie di terze parti presenti sono quelli eventualmente installati da Spotify e YouTube nel
                momento in cui l&apos;utente sceglie volontariamente di riprodurre un contenuto multimediale
                incorporato nel sito (es. il player del podcast). Tali contenuti vengono caricati solo dopo
                un&apos;azione esplicita dell&apos;utente e previo consenso ai cookie di terze parti, come richiesto
                dal banner mostrato alla prima visita.
              </p>
              <p className="text-justify hyphens-auto">
                Per maggiori informazioni sui cookie installati da questi servizi si rimanda alle rispettive
                informative: Spotify (spotify.com/it/legal/privacy-policy) e YouTube/Google
                (policies.google.com/privacy).
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">4. Come gestire le preferenze</h2>
              <p className="text-justify hyphens-auto">
                La scelta espressa alla prima visita può essere modificata in qualsiasi momento tramite il pulsante
                &quot;Gestisci preferenze cookie&quot; in cima a questa pagina, oppure eliminando i dati di
                navigazione salvati dal browser per questo sito.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">5. Come disabilitare i cookie dal browser</h2>
              <p className="text-justify hyphens-auto">
                Oltre alle preferenze specifiche di questo sito, è possibile gestire o disabilitare i cookie
                direttamente dalle impostazioni del proprio browser. Le procedure variano a seconda del browser
                utilizzato (Chrome, Safari, Firefox, Edge) e sono generalmente reperibili nella sezione
                &quot;Privacy&quot; o &quot;Cookie&quot; delle impostazioni.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">6. Aggiornamenti alla presente cookie policy</h2>
              <p className="text-justify hyphens-auto">
                Questa cookie policy potrà essere aggiornata nel tempo, in particolare in caso di integrazione di
                nuovi servizi o strumenti di analisi nel sito. Si invita a consultarla periodicamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
