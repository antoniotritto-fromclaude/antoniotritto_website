import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight text-navy">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-16">Ultimo aggiornamento: settembre 2026</p>

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">1. Titolare del trattamento</h2>
              <p className="text-justify hyphens-auto">
                Il Titolare del trattamento dei dati raccolti tramite il presente sito web (antoniotritto.com) è
                Antonio Tritto, Private Banker e Consulente Finanziario iscritto all&apos;Albo OCF dal 2020, P.IVA
                08120320729, con sedi operative a Milano, Roma e Bari. Per qualsiasi richiesta relativa al
                trattamento dei dati personali è possibile scrivere a{' '}
                <a href="mailto:antoniotritto@gmail.com" className="text-amber-600 underline hover:text-amber-500">
                  antoniotritto@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">2. Natura del sito e dei dati trattati</h2>
              <p className="text-justify hyphens-auto mb-4">
                Questo sito è realizzato come sito statico e non dispone di un proprio server o database per la
                raccolta e la conservazione di dati personali. Non sono presenti moduli di contatto che inviano
                dati a un server del sito.
              </p>
              <p className="text-justify hyphens-auto">
                Quando l&apos;utente decide di contattare Antonio Tritto tramite email, telefono, WhatsApp, oppure
                di prenotare un appuntamento tramite Calendly, i dati forniti (es. nome, indirizzo email, numero di
                telefono, contenuto della comunicazione) vengono raccolti direttamente dal relativo servizio di
                terze parti utilizzato (client di posta elettronica, app di messaggistica, Calendly), ciascuno
                regolato dalla propria informativa privacy, richiamata al momento dell&apos;utilizzo.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">3. Finalità e base giuridica del trattamento</h2>
              <p className="text-justify hyphens-auto">
                I dati eventualmente forniti volontariamente dall&apos;utente attraverso i canali di contatto
                indicati nel sito vengono trattati al solo fine di rispondere a richieste di informazioni, gestire
                appuntamenti di consulenza e instaurare o proseguire un rapporto professionale. La base giuridica è
                rappresentata dal consenso dell&apos;interessato e, ove applicabile, dall&apos;esecuzione di misure
                precontrattuali adottate su richiesta dello stesso.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">4. Servizi di terze parti utilizzati dal sito</h2>
              <p className="text-justify hyphens-auto mb-4">
                Il sito si appoggia ai seguenti servizi di terze parti, ciascuno operante come autonomo titolare
                del trattamento per i dati raccolti nell&apos;ambito del proprio servizio:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Cloudflare</strong> — hosting ed erogazione del sito</li>
                <li><strong>Calendly</strong> — gestione delle prenotazioni di appuntamenti (link esterno)</li>
                <li><strong>Spotify</strong> — riproduzione degli episodi del podcast (attivata solo su richiesta dell&apos;utente, previo consenso ai cookie di terze parti)</li>
                <li><strong>YouTube</strong> — eventuale riproduzione di contenuti video (attivata solo su richiesta dell&apos;utente)</li>
                <li><strong>Substack</strong> — pubblicazione e iscrizione alla newsletter</li>
                <li><strong>Amazon</strong> — acquisto del libro dell&apos;autore (link esterno)</li>
              </ul>
              <p className="text-justify hyphens-auto mt-4">
                Si invita a consultare le rispettive informative privacy di questi servizi per maggiori dettagli
                sul trattamento dei dati effettuato da ciascuno di essi.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">5. Trasferimento dei dati extra-UE</h2>
              <p className="text-justify hyphens-auto">
                Alcuni dei servizi di terze parti indicati al punto 4 hanno sede negli Stati Uniti o trasferiscono
                dati al di fuori dello Spazio Economico Europeo. Tali trasferimenti avvengono nell&apos;ambito
                delle garanzie previste da ciascun fornitore (es. clausole contrattuali standard approvate dalla
                Commissione Europea), come indicato nelle rispettive informative privacy.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">6. Periodo di conservazione</h2>
              <p className="text-justify hyphens-auto">
                I dati forniti tramite i canali di contatto diretti (email, telefono, WhatsApp) vengono conservati
                per il tempo necessario a gestire la richiesta e, in caso di instaurazione di un rapporto
                professionale, per la durata dello stesso e per gli ulteriori termini previsti dalla normativa
                fiscale e civilistica applicabile.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">7. Diritti dell&apos;interessato</h2>
              <p className="text-justify hyphens-auto mb-4">
                In relazione ai dati eventualmente trattati direttamente dal Titolare, l&apos;utente ha diritto di
                chiedere in qualsiasi momento l&apos;accesso ai propri dati personali, la rettifica o la
                cancellazione degli stessi, la limitazione del trattamento, la portabilità dei dati, nonché di
                opporsi al trattamento, scrivendo all&apos;indirizzo indicato al punto 1.
              </p>
              <p className="text-justify hyphens-auto">
                L&apos;interessato ha inoltre diritto di proporre reclamo all&apos;Autorità Garante per la
                protezione dei dati personali (www.garanteprivacy.it) qualora ritenga che il trattamento violi la
                normativa vigente.
              </p>
            </div>

            <div>
              <h2 className="font-oswald text-2xl font-bold uppercase mb-4 text-navy">8. Modifiche alla presente informativa</h2>
              <p className="text-justify hyphens-auto">
                La presente informativa privacy potrà essere soggetta a modifiche nel tempo, anche in relazione
                all&apos;evoluzione del sito e dei servizi in esso integrati. Si invita a consultarla periodicamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
