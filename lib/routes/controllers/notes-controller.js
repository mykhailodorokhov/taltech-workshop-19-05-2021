const notesModel = require("../../models/notes-model");
const notesSchemas = require("../schemas/notes-schemas");

async function getAll(ctx) {
  ctx.status = 200;
  ctx.body = await notesModel.getAll();
}

async function getById(ctx) {
  const id = ctx.params.id;

  ctx.status = 200;
  ctx.body = await notesModel.getById(id);
}

async function create(ctx) {
  const requestBody = ctx.request.body;
  const joiSchema = notesSchemas.create;

  const { error } = joiSchema.validate(requestBody);
  if (error) {
    ctx.status = 400;
    ctx.body = { success: "False" };
    return;
  }

  await notesModel.create(requestBody.text);

  ctx.status = 201;
  ctx.body = { success: "True" };
}

async function remove(ctx) {
  const id = ctx.params.id;
  await notesModel.remove(id);

  ctx.status = 204;
  ctx.body = { success: "True" };
}

module.exports = { getAll, getById, create, remove };
