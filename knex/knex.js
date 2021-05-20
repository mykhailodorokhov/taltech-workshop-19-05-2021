// checking which environment we are in
const env = process.env.ENVIRONMENT || "dev";

// applying the corresponding part of knexconfig.js
const config = require("../knexconfig")[env];

console.log("💽 talking to database via knex...");
console.log(`environment: ${env}; database: ${config.connection.database}`);

// initializing knex with that config
const Knex = require("knex");
const knex = Knex(config);

// exposing knex and the relevant config
module.exports = { knex, config };
