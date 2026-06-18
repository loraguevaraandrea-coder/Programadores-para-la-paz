const knex = require('knex');

// CRITERIO DE REVISIÓN: Conexión externa a PostgreSQL usando la URI de la captura
const db = knex({
  client: 'pg',
  connection: 'postgres://comunidad_user:comunidad_password@34.123.45.67:5432/comunidad_db', 
  ssl: { rejectUnauthorized: false } // Se añade por seguridad al ser una base de datos externa
});

module.exports = db;
