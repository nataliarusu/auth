const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

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
app.use(cookieParser(process.env.COOKIE_SECRET)); //pass cookieParser to all reoutes with req object
app.use(
  // this function takes a js object in which we configure the session
  expressSession({
    secret: "session secret should be hash",
    resave: false, //means that the session will not be saved on each req/res, but only if something is changed in the session!
    saveUninitialized: false,
    cookie: { signed: true, sameSite: "lax" }, //we can add congig to cookie here
  })
); //it is middleware so will be passed into all requests, req.session

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

// function sessions(req, res, next) {
//   const sid = req.signedCookies.loggedIn; //undefined if there is not a sid
//   //const session = getSession(sid); //undefined if there is no session
//   // if (session) {
//   //   const expiry = new Date(session.expires_at);
//   //   const today = new Date();
//   //   if (expiry < today) {
//   //     removeSession(sid);
//   //     res.clearCookie(sid);
//   //   } else {
//   //     req.session = session;
//   //   }
//   // }
//   if (sid) {
//     req.loggedIn = true; //add new prop to req obj
//     console.log("added true");
//   }
//   next();
// }

module.exports = app;
