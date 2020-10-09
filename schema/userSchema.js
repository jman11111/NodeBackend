const Joi = require("joi");

module.exports = Joi.object().keys({
   userName: Joi.String().min(3).max(10).required(),
   email: Joi.string().required(),
   password: Joi.string().min(5).required(),
  })