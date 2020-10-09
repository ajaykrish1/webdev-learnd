var mongoose = require("mongoose");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {});

var catShcema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

var Cat = mongoose.model("Cat", catShcema);

// var george = new Cat({
//   name: "George",
//   age: 10,
//   temperament: "grouchy",
// });
// var george1 = new Cat({
//   name: "Steve",
//   age: 9,
//   temperament: "evil",
// });
// george.save(function (err, cat) {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("We saved to db");
//     console.log(cat);
//   }
// });
// Cat.create({ name: "tinkel", age: 8, temparament: "nice" }, function (
//   err,
//   cats
// ) {
//   if (err) {
//     console.log("error");
//     console.log(err);
//   } else {
//     console.log("the cats are");
//     console.log(cats);
//   }
// });

Cat.find({}, function (err, cats) {
  if (err) {
    console.log("error");
    console.log(err);
  } else {
    console.log("the cats are");
    console.log(cats);
  }
});
