# Antonio Tritto - Private Banker

Sito ufficiale di Antonio Tritto, Private Banker esperto in gestione patrimoniale
e consulenza finanziaria, costruito con Next.js e Tailwind CSS.

## Sviluppo locale

Prerequisiti: Node.js 18 o superiore.

```
npm install
npm run dev
```

Il sito sarà visibile su http://localhost:3000.

## Build di produzione

Il sito è configurato come **export statico** (`output: 'export'` in
`next.config.ts`), pensato per l'hosting su Cloudflare Pages:

```
npm run build
```

L'output statico viene generato nella cartella `out/`.

Nota: la pagina `/newsletter` recupera gli articoli dal feed RSS di Substack
(`antoniotritto.substack.com/feed`) **in fase di build**, non ad ogni
visita. Per aggiornare l'elenco articoli è necessario rifare il deploy del
sito.

## Aggiornamento automatico ogni lunedì e venerdì

Il progetto include `.github/workflows/scheduled-rebuild.yml`, che
ricompila e ripubblica automaticamente il sito ogni lunedì e venerdì (così
la pagina Newsletter si aggiorna da sola). Per attivarlo:

1. Pubblica il sito su Cloudflare Pages almeno una volta.
2. Nella dashboard Cloudflare: **Workers & Pages** → il progetto →
   **Settings** → **Builds** → **Deploy Hooks** → crea un hook, copia l'URL.
3. Su GitHub: **Settings** del repository → **Secrets and variables** →
   **Actions** → **New repository secret** → nome `CF_DEPLOY_HOOK`, valore
   l'URL copiato al passo precedente.

Da quel momento l'automazione è attiva. Può anche essere lanciata a mano
dalla scheda "Actions" del repository, in qualsiasi momento.

## Struttura del progetto

- `app/` — pagine (Home, `/libro`, `/newsletter`) tramite Next.js App Router
- `components/` — sezioni riutilizzabili della home (Navbar, Hero, Services, ecc.)
- `public/images/` — foto del sito (copertina libro, foto di Antonio, immagini hero)
- `app/fonts/` — font auto-ospitati (Inter, Oswald), nessuna dipendenza da Google Fonts in fase di build
