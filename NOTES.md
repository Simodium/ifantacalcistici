
### Pacchetti Installati
### Dependencies
- **bcrypt**: `^5.x.x` (installato con avvisi su pacchetti deprecati)
- **next-auth**: `^4.24.11`
### DevDependencies
- **autoprefixer**: `^10.4.21`
- **postcss**: `^8.5.3`
- **tailwindcss**: `^4.1.4`

# iFantacalcistici - APPUNTI DI SVILUPPO

## Obiettivo del Progetto
L'obiettivo a lungo termine è creare un sito di fantacalcio fruibile anche da mobile.  
L'obiettivo a breve termine è quello di creare un box per l'autenticazione al sito di un utente fittizio.

## Setup del Progetto

1. **Installazione e Configurazione di PostgreSQL**:
   - Installazione di PostgreSQL:
     ```bash
     sudo apt install postgresql postgresql-contrib
     ```
   - Creazione del database:
     ```sql
     CREATE DATABASE ifantacalcistici;
     ```

   - **Creazione dell'utente `simodium` con privilegi sul database `ifantacalcistici`**:
     ```sql
     CREATE USER simodium WITH PASSWORD 'tua_password_sicura';
     GRANT ALL PRIVILEGES ON DATABASE ifantacalcistici TO simodium;
     ```

   - Test della connessione con l'utente `simodium`:
     ```bash
     psql -U simodium -d ifantacalcistici
     ```

2. **Configurazione di Node.js per il Database**:
   - Installazione delle dipendenze:
     ```bash
     npm install pg
     ```
   - Configurazione delle variabili d'ambiente:
     - Creazione del file `.env` con:
       ```env
       DATABASE_URL=postgresql://simodium:tua_password_sicura@localhost:5432/ifantacalcistici
       ```

   - Connessione al database tramite Node.js:
     ```javascript
     const { Pool } = require('pg');
     const pool = new Pool({
       connectionString: process.env.DATABASE_URL,
     });

     module.exports = pool;
     ```

3. **Creazione di un Backend per il Login**:
   - Installazione di librerie per la gestione delle password:
     ```bash
     npm install bcrypt
     ```
   - Creazione di un endpoint per il login (`/api/login`):
     ```javascript
     router.post('/login', async (req, res) => {
       // Logica di autenticazione
     });
     ```
   - Inserimento di un utente fittizio per i test:
     ```sql
     INSERT INTO users (email, password) VALUES ('test@example.com', 'hashed_password');
     ```

4. **Modifica della Pagina di Login**:
   - Aggiunta di un box per l'autenticazione:
     ```html
     <form id="login-form">
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" required>
       <label for="password">Password:</label>
       <input type="password" id="password" name="password" required>
       <button type="submit">Login</button>
     </form>
     ```
   - Gestione del submit con JavaScript:
     ```javascript
     document.getElementById('login-form').addEventListener('submit', async (e) => {
       // Logica per inviare i dati al backend
     });
     ```

## Stato Corrente
- **Passaggi completati**:
  - Installazione di PostgreSQL.
  - Creazione del database `ifantacalcistici`.
  - Creazione dell'utente `simodium` e verifica della connessione.
  - Aggiornamento del file `.env` con le credenziali dell'utente `simodium`.
  - Creazione della tabella utenti (`CREATE TABLE users`).
  - Installazione di `bcrypt` (con avvisi su pacchetti deprecati).

- **Prossimo passaggio in programma**:
  - Creazione script Node.js per hash della password.

## Errori Riscontrati
*(Nessuno al momento)*