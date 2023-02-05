const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const postsRoutes = require("../routes/posts");

const authRoutes = require("../routes/auth");
const app = express(); //express app, has property listen which is a function that will creates a server
const adminRoutes = require("../routes/admin");

//templating engine ejs
app.set("view engine", "ejs"); //we tell express: compile dynamic templates with the puc engine
app.set("views", "views"); //where to find the files

//express middleware functions
app.use(bodyParser.urlencoded({ extended: false })); //bodyParser.urlencoded() is middleware function which has next() and it does body parsing for form, not for parsing other req data
app.use(express.static(path.join(__dirname, "..", "public"))); //express.static(path) , to serve files statically
app.use(adminRoutes);
app.use(postsRoutes);
app.use(authRoutes);

//last middleware, if not previous matched this will be executed
app.use((req, res, next) => {
  res.status(404).render("404", {
    //app.set('views')
    path: 404, //must provide same props in all objects
    pageTitle: "Page not found",
    content: "Sorry, page not found",
  });
});

module.exports = app;
