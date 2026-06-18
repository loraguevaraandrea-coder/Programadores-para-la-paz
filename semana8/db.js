const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: 'postgres://comunidad_user:comunidad_password@34.123.45.67:5432/comunidad_db',
  ssl: { rejectUnauthorized: false } // Obligatorio para conexiones seguras en la nube o servidores externos
});

module.exports = db;
