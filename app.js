const hbs = require("hbs");
const express = require("express");
const app = express();

//puerto
require("dotenv").config();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//Servidor ontenido estatico: middleware
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Juan rinas",
    titulo: "curso nodejs",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic");
});

app.get("/elements", (req, res) => {
  res.render("elements");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
