const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// Requireing and registiering the express-handlebars:
const hbs = exphbs.create({
  extname: ".hbs"
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//configure
const controller = require("./Controller/controller");
console.log(controller);

//Routes

app.get("/", function(req, res) {
  res.render("Landing");
});
app.get("/signup", function(req, res) {
  res.render("signup");
});
app.post("/signup", controller.add);

//PORT
app
  .listen(port, function() {
    console.log("Application has started and running on port: ", port);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
  