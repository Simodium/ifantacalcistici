// Script per generare un hash sicuro da una password in chiaro usando bcrypt

const bcrypt = require('bcrypt');

// Modifica questa variabile con la password che vuoi hashare
const password = 'prova'; // <-- Cambia qui

const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error('Errore durante la generazione dell\'hash:', err);
    return;
  }
  console.log('Hash generato:', hash);
});