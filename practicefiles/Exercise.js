const { required } = require("joi");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongo-exercises", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect"));

const courseSchema = mongoose.Schema(
  // othher good options:
  // uppercase, lowercase, trim
  // get, set, you give a function to run for post/preprocessing
  //
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      // match: /pattern/
    },
    category: {
      type: String,
      enum: ["web", "mobile", "network"],
    },
    author: String,
    tags: {
      type: Array,
      validate: {
        isAsync: true,
        validator: function (v, callback) {
          setTimeout(() => {
            const result = v && v.length > 0;
            callback(result);
          }, 2000);
        },
        message: "this is what it says if validation fails",
      },
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
      type: Number,
      required: function () {
        return this.isPublished;
      },
    },
  }
);

const Course = mongoose.model("course", courseSchema);

async function getRes() {
  const results = await Course.find().or([
    { price: { $gte: 15 } },
    { name: /.*by.*/ },
  ]);
  console.log(results);
}

getRes();
