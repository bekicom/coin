const { Schema, model } = require("mongoose");
const Joi = require("joi");

// Mahsulot skhemasi uchun validatsiya schema
const productSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string().required(),
  amount: Joi.number().required(),
  price: Joi.number().required(),
  volume: Joi.number().required(),
  date: Joi.date().required(),
});

// Bozor skhemasi uchun validatsiya schema
const marketSchema = Joi.object({
  id: Joi.string().required(),
  yaratilgansana: Joi.date().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  sotilganmahsulotlar: Joi.array().items(productSchema),
});

// Modelni yaratish
const User = model(
  "User",
  new Schema({
    products: [productSchema],
    markets: [marketSchema],
  })
);

// Mahsulotlar bo'yicha validation funksiyasi
function validateProduct(product) {
  return productSchema.validate(product);
}

// Bozorlar bo'yicha validation funksiyasi
function validateMarket(market) {
  return marketSchema.validate(market);
}

module.exports = {
  User,
  validateProduct,
  validateMarket,
};
