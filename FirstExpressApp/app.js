var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there!");
  console.log("someone made a request to /");
});

app.get("/bye", function (req, res) {
  console.log("someone made a request to /bye");
  res.send("Goodbye!!!");
});

app.get("/dog", function (req, res) {
  console.log("someone made a request to /dogs");
  res.send("Meow!");
});
app.listen(3000);
