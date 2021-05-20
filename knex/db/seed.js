const { knex } = require("../knex");

async function seedDatabase() {
  const seedData = [{ text: "another one" }, { text: "and another one" }];

  console.log("adding dummy data...");
  await knex("notes").insert(seedData);
  console.log("✅ database seeded");

  process.exit();
}

seedDatabase();
