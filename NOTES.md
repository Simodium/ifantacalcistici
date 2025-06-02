1| 
2| ### Pacchetti Installati
3| ### Dependencies
4| - **bcrypt**: `^5.x.x` (installato con avvisi su pacchetti deprecati)
5| - **next-auth**: `^4.24.11`
6| - **pg**: driver PostgreSQL per Node.js
7| ### DevDependencies
8| - **autoprefixer**: `^10.4.21`
9| - **postcss**: `^8.5.3`
10| - **tailwindcss**: `^4.1.4`
11| 
12| # iFantacalcistici - APPUNTI DI SVILUPPO
13| 
14| ## Obiettivo del Progetto
15| L'obiettivo a lungo termine è creare un sito di fantacalcio fruibile anche da mobile.  
16| L'obiettivo a breve termine è quello di creare un box per l'autenticazione al sito di un utente fittizio.
17| 
18| ## Setup del Progetto
19| 
20| 1. **Installazione e Configurazione di PostgreSQL**:
21|    - Installazione di PostgreSQL:
22|      ```bash
23|      sudo apt install postgresql postgresql-contrib
24|      ```
25|    - Creazione del database:
26|      ```sql
27|      CREATE DATABASE ifantacalcistici;
28|      ```
29| 
30|    - **Creazione dell'utente `simodium` con privilegi sul database `ifantacalcistici`**:
31|      ```sql
32|      CREATE USER simodium WITH PASSWORD 'tua_password_sicura';
33|      GRANT ALL PRIVILEGES ON DATABASE ifantacalcistici TO simodium;
34|      ```
35| 
36|    - Test della connessione con l'utente `simodium`:
37|      ```bash
38|      psql -U simodium -d ifantacalcistici
39|      ```
40| 
41| 2. **Configurazione di Node.js per il Database**:
42|    - Installazione delle dipendenze:
43|      ```bash
44|      npm install pg
45|      ```
46|    - Configurazione delle variabili d'ambiente:
47|      - Creazione del file `.env` con:
48|        ```env
49|        DATABASE_URL=postgresql://simodium:tua_password_sicura@localhost:5432/ifantacalcistici
50|        ```
51| 
52|    - Connessione al database tramite Node.js:
53|      ```javascript
54|      const { Pool } = require('pg');
55|      const pool = new Pool({
56|        connectionString: process.env.DATABASE_URL,
57|      });
58| 
59|      module.exports = pool;
60|      ```
61| 
62| 3. **Creazione di un Backend per il Login**:
63|    - Installazione di librerie per la gestione delle password:
64|      ```bash
65|      npm install bcrypt
66|      ```
67|    - Creazione di un endpoint per il login (`/api/login`):
68|      ```javascript
69|      router.post('/login', async (req, res) => {
70|        // Logica di autenticazione
71|      });
72|      ```
73|    - Inserimento di un utente fittizio per i test:
74|      ```sql
75|      INSERT INTO users (email, password) VALUES ('test@example.com', 'hashed_password');
76|      ```
77| 
78| 4. **Modifica della Pagina di Login**:
79|    - Aggiunta di un box per l'autenticazione:
80|      ```html
81|      <form id="login-form">
82|        <label for="email">Email:</label>
83|        <input type="email" id="email" name="email" required>
84|        <label for="password">Password:</label>
85|        <input type="password" id="password" name="password" required>
86|        <button type="submit">Login</button>
87|      </form>
88|      ```
89|    - Gestione del submit con JavaScript:
90|      ```javascript
91|      document.getElementById('login-form').addEventListener('submit', async (e) => {
92|        // Logica per inviare i dati al backend
93|      });
94|      ```
95| 
96| ## Stato Corrente
97| - **Passaggi completati**:
98|   - Installazione di PostgreSQL.
99|   - Creazione del database `ifantacalcistici`.
100|   - Creazione dell'utente `simodium` e verifica della connessione.
101|   - Aggiornamento del file `.env` con le credenziali dell'utente `simodium`.
102|   - Creazione della tabella utenti (`CREATE TABLE users`).
103|   - Installazione di `bcrypt` (con avvisi su pacchetti deprecati).
104|   - Installazione del pacchetto `pg` per Node.js.
105|   - Creazione script Node.js per hash della password.
106|   - Inserimento di un utente fittizio per i test.
107|   - Inserimento del form per l'autenticazione.
108| 
109| - **Prossimo passaggio in programma**:
110|   - Test di login (verifica autenticazione utente)
111| 
112| ## Errori Riscontrati
113| *(Nessuno al momento)*