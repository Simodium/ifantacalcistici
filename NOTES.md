# iFantacalcistici - Appunti di Sviluppo

## Obiettivo del Progetto
Creare un sito web basato su sessione utente che, in futuro, evolverà in un sito di fantacalcio. Il primo passo è configurare un sistema di autenticazione utenti che sia semplice, testato e funzionante.

## Setup del Progetto

1. **Installazione di Next.js (framework scelto per il frontend)**:
   - Comando per creare un nuovo progetto Next.js:
     ```bash
     npx create-next-app@latest .
     ```
   - Nota: Il punto `.` indica che il progetto sarà inizializzato nella directory corrente.

2. **Configurazione di Tailwind CSS (per il design)**:
   - Installazione delle dipendenze:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```
   - Modifiche necessarie:
     - Aggiornare il file `tailwind.config.js` con i percorsi dei file:
       ```javascript
       /** @type {import('tailwindcss').Config} */
       module.exports = {
         content: [
           "./pages/**/*.{js,ts,jsx,tsx}",
           "./components/**/*.{js,ts,jsx,tsx}",
         ],
         theme: {
           extend: {},
         },
         plugins: [],
       };
       ```
     - Aggiungere Tailwind al file CSS globale `styles/globals.css`:
       ```css
       @tailwind base;
       @tailwind components;
       @tailwind utilities;
       ```

3. **Configurazione di Auth.js (per la gestione delle sessioni utente)**:
   - Installazione del pacchetto:
     ```bash
     npm install next-auth
     ```
   - Creazione del file API per l'autenticazione:
     - Percorso del file: `pages/api/auth/[...nextauth].js`
       ```javascript
       import NextAuth from "next-auth";
       import Providers from "next-auth/providers";

       export default NextAuth({
         providers: [
           Providers.Google({
             clientId: process.env.GOOGLE_CLIENT_ID,
             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
           }),
         ],
       });
       ```
   - Configurazione delle variabili d'ambiente:
     - Aggiungere i seguenti valori a un file `.env.local`:
       ```env
       GOOGLE_CLIENT_ID=your-client-id
       GOOGLE_CLIENT_SECRET=your-client-secret
       ```

4. **Esecuzione del progetto**:
   - Comando per avviare il server di sviluppo:
     ```bash
     npm run dev
     ```
   - URL di accesso: [http://localhost:3000](http://localhost:3000)

5. **Creazione di una pagina di login personalizzata**:
   - Creare un file `pages/login.js` per la pagina di login.
   - Aggiungere un pulsante per il login tramite Google OAuth.
   - Utilizzare il componente `signIn` di NextAuth.js.

6. **Gestione della sessione utente**:
   - Utilizzare il metodo `useSession` di NextAuth.js.
   - Creare una barra di navigazione che cambi in base allo stato di autenticazione (es. "Login" o "Logout").

7. **Creazione di una dashboard privata per l'utente**:
   - Creare un file `pages/dashboard.js` accessibile solo agli utenti loggati.
   - Mostrare informazioni di base sull'utente (es. nome e email) e un messaggio di benvenuto.

## Stato Corrente
- Passaggi completati:
  - Punto 1: Creazione del progetto Next.js.
  - Punto 2: Configurazione di Tailwind CSS.
  - Punto 3.1: Installazione del pacchetto `next-auth`.
  - Punto 3.2: Creazione del file API per l'autenticazione.
  - Punto 3.3: Configurazione delle variabili d'ambiente.
  - Punto 4: Esecuzione del progetto.

- **Prossimo passaggio in programma**:
  - Punto 5: Creazione di una pagina di login personalizzata.

## Errori Riscontrati
- **Errore**: `Missing script: "dev"`
  - Descrizione: Il comando `npm run dev` non funzionava perché mancava la sezione `scripts` nel file `package.json`.
  - Soluzione: Aggiunta la sezione `scripts` nel file `package.json` con i seguenti valori:
    ```json
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
    ```

- **Errore**: "404 | This page could not be found"
  - Descrizione: La homepage non veniva trovata perché mancava il file `pages/index.js`.
  - Soluzione: Creato il file `pages/index.js` con il seguente contenuto:
    ```javascript
    export default function Home() {
      return (
        <div>
          <h1>Benvenuto su iFantacalcistici!</h1>
          <p>Questa è la homepage del progetto.</p>
        </div>
      );
    }
    ```

- **Errore**: La pagina di login non viene visualizzata
  - Descrizione: Cliccando sull'indirizzo [http://localhost:3000/login](http://localhost:3000/login), viene mostrata la stessa pagina del punto 4 (homepage).
  - Possibile causa: Il server potrebbe non aver rilevato correttamente il nuovo file `pages/login.js`.
  - Soluzione: [Da determinare].

## Passaggi Futuri
- Aggiungere funzionalità personalizzate per il fantacalcio.
- Preparare la configurazione di un database per la persistenza dei dati.
- Migliorare il design della homepage e della UI generale.

## Autenticazione Utenti
Attualmente il progetto supporta solo Google OAuth per l'accesso utente.
In futuro, si prevede di aggiungere un'opzione di autenticazione tramite email e password. Tuttavia, questa funzionalità è classificata come **bassa priorità** e verrà implementata solo una volta completati i passi principali del progetto.