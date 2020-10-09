var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("welcome to my assignment");
});

app.get("/speak/pig", function (req, res) {
  res.send("oink");
});

app.get("/speak/cow", function (req, res) {
  res.send("moo");
});

app.get("/speak/dog", function (req, res) {
  res.send("woof woof");
});

app.get("/:rand/:n", function (req, res) {
  var n = req.params.n;
  var rand = req.params.rand;
  var word = "";
  for (var i = 0; i < n; i++) {
    word = word + rand + " ";
  }
  res.send(word);
});
app.get("*", function (req, res) {
  res.send("sorry page not found");
});

app.listen(3000, function () {
  console.log("server started");
});
