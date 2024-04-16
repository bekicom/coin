const { Schema, model } = require("mongoose");
const Joi = require("joi");

// Tanlangan kompyuter skhemasi uchun validatsiya schema
const tanlanganKompyuterSchema = new Schema({
  category:String,
  brand: String,
  processor: String,
  avlod: String,
  storageType: String,
  storageSize: String,
  screenSize: String,
  price: String,
});


// Validatsiya schema
const validationSchema = Joi.object({
  category: Joi.string().required(),
  brand: Joi.string(),
  processor: Joi.string(),
  avlod: Joi.string(),
  storageType: Joi.string(),
  storageSize: Joi.string(),
  screenSize: Joi.string(),
  price: Joi.number(), // Narx son bo'lishi kerak bo'lsa
});


// Modelni yaratish
const TanlanganKompyuter = model("TanlanganKompyuter", tanlanganKompyuterSchema);

// Validatsiya funktsiyasi
const validateTanlanganKompyuter = (data) => {
  return validationSchema.validate(data);
};

module.exports = {
  TanlanganKompyuter,
  validateTanlanganKompyuter,
};
