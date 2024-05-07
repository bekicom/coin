const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  products: [
    {
      id: String,
      name: String,
      type: String,
      amount: Number,
      price: Number,
      volume: Number,
      date: Date,
    },
  ],
  markets: [
    {
      id: String,
      yaratilgansana: Date,
      sotilganmahsulotlar: [
        {
          id: String,
          name: String,
          type: String,
          amount: Number,
          price: Number,
          volume: Number,
          date: Date,
        },
      ],
    },
  ],
});

module.exports = model("User", userSchema);
