const mongoose = require("mongoose");
//TODO this conn string should come from configuration file
mongoose
  .connect("mongodb://localhost:27017/personalWebsite", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect"));

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
