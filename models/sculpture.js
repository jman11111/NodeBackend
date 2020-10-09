const mongoose = require("mongoose");
// this conn string should come from configuration file
mongoose
  .connect("mongodb://localhost:27017/personalWebsite", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect"));

const sculptureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  dateMade: {
    type: Date,
    default: Date.now,
  },
  photoURL: { type: String, required: true },
});

const Sculpture = mongoose.model("Sculpture", sculptureSchema);

module.exports = Sculpture;
