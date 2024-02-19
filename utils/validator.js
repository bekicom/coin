//  user validation

const Joi = require("joi");

const userValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    telnomer: Joi.string().required(),
    coin: Joi.string().required(),
    vaqti: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = userValidation;
