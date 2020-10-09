var express = require("express");
var app = express();

var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  var fname = req.body.name;
  console.log(fname);
  res.redirect("/");
});

app.listen("3000");
