const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Library", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  about: String,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;
