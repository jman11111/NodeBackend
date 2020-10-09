const Joi = require("joi");

module.exports = Joi.object().keys({
    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
      description: Joi.string().max(250),
      dateMade: Joi.date().required(),
      photoURL: Joi.string().required(),
  })