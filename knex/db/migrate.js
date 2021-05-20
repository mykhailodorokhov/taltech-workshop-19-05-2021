const { knex } = require("../knex");

async function migrate() {
  await knex.schema.createTable("notes", (table) => {
    table.increments("id").primary(), table.string("text");
  });

  console.log("✅ migration successfull");
  process.exit();
}

migrate();
