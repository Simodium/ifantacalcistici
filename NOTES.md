## CONTESTO PER CO-PILOT
Ricordati che sto usando Visual Studio Code installato su Windows 11, vogliamo usare Node.js e PostgreSQL.
Non propormi soluzioni che contemplano un sistema operativo diverso, o un ambiente di sviluppo diverso, o tecnologie diverse.
Tutto ciò che non trovi nel seguente elenco non è stato ancora installato:
### Pacchetti Installati
### Dependencies
- **next-auth**: `^4.24.11`
### DevDependencies
- **autoprefixer**: `^10.4.21`
- **postcss**: `^8.5.3`
- **tailwindcss**: `^4.1.4`

# iFantacalcistici - Appunti di Sviluppo

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
   - Creazione della tabella utenti:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
     );
     ```

2. **Configurazione di Node.js per il Database**:
   - Installazione delle dipendenze:
     ```bash
     npm install pg
     ```
   - Configurazione delle variabili d'ambiente:
     - Creare un file `.env` con:
       ```env
       DATABASE_URL=postgresql://username:password@localhost:5432/ifantacalcistici
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
- Passaggi completati:
  - Nessun passaggio completato al momento.

- **Prossimo passaggio in programma**:
  - Punto 1: Installazione e Configurazione di PostgreSQL.

## Errori Riscontrati
*(Nessuno al momento)*
