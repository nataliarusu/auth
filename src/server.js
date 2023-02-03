const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const postsRoutes = require("../routes/home");
const addPostRoutes = require("../routes/addpost");
const app = express(); //express app, has property listen which is a function that will creates a server
const adminRoutes = require("../routes/admin");

//templating engine ejs
app.set("view engine", "ejs"); //we tell express: compile dynamic templates with the puc engine
app.set("views", "views"); //where to find the files

//express middleware function
app.use(bodyParser.urlencoded({ extended: false })); //bodyParser.urlencoded() is middleware function which has next() and it does body parsing for form, not for parsing other req data
app.use(express.static(path.join(__dirname, "..", "public"))); //express.static(path) , to serve files statically
app.use(addPostRoutes);
app.use(adminRoutes);
app.use(postsRoutes);

//last middleware, if not previous matched this will be executed
app.use((req, res, next) => {
  // '/' this is default, so we shouldn't add the route, this means all paths after /

  //res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  res
    .status(404)
    .render("404", {
      pageTitle: "Page not found",
      content: "Sorry, page not found",
    });
  //we don't need path because app.set() we applyed folder views!, we don't need file extention we did it in app.set("view engine", "ejs");
});

module.exports = app;
