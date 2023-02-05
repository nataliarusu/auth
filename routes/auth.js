const path = require("path");

const express = require("express");

const router = express.Router();

//router.get(path, callback)
router.get("/log-in", (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "addpost.html")); //if html
  res.render("posts/log-in", { path: "login", pageTitle: "Log in" });
});
router.post("/log-in", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/");
});
module.exports = router;
