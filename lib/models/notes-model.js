const { knex } = require("../../knex/knex");

const TABLE_NAME = "notes";

async function getAll() {
  return await knex(TABLE_NAME).select();
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function create(text) {
  await knex(TABLE_NAME).insert({ text });
}

async function remove(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

module.exports = { getAll, getById, create, remove };
