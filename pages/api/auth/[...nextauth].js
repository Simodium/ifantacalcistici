import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { Pool } from "pg";

// Configura la connessione a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Assicurati che questa variabile sia configurata
});

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "tu@esempio.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Prendi email e password
        const { email, password } = credentials;

        // Cerca utente nel database
        const res = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );
        const user = res.rows[0];

        if (!user) {
          throw new Error("Email o password non corretti");
        }

        // Verifica la password con bcrypt
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Email o password non corretti");
        }

        // Restituisci l'oggetto utente (puoi personalizzare i campi)
        return {
          id: user.id,
          email: user.email,
          name: user.first_name + " " + user.last_name,
          role: user.role
        };
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});