const env = process.env.ENVIRONMENT || "dev";
const config = require("../../knexconfig")[env];

console.log(config);

// let's remeber db name to create one...
const dbName = config.connection.database;
// ... and erase it from config to connect to MySQL
config.connection.database = null;

const Knex = require("knex");
const knex = Knex(config);

async function createDatabase() {
  console.log(`creating database: ${dbName}`);

  await knex.raw(`CREATE DATABASE ${dbName}`);
  console.log(`✅ database created`);

  await knex.destroy();
}

createDatabase();
