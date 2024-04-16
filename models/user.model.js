const { Schema, model } = require("mongoose");

const userSchema = new Schema({
 
   tanlanganKompyuterSchema :{
    kategoriya: {
      type: String,
      required: true,
    },
    marka: String,
    protsessor: String,
    avlod: String,
    xotiraTur: String,
    xotiraOlchami: String,
    ekranOlchami: String,
    narx: String,
  }
 
});

module.exports = model("User", userSchema);
