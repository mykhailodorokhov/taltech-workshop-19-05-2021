const joi = require("joi");

const create = joi.object({
  text: joi.string().required(),
});

module.exports = { create };
