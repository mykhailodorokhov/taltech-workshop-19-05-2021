const { knex, knexConfig } = require("../knex");

async function dropDatabase() {
  const dbName = knexConfig.connection.database;

  console.log(`dropping database ${dbName}`);

  await knex.raw(`DROP DATABASE ${dbName}`);
  console.log(`💥 database dropped`);

  await knex.destroy();
}

dropDatabase();
