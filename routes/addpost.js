const path = require("path");

const express = require("express");

const router = express.Router();

//router.get(path, callback)
router.get("/add-post", (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "addpost.html")); //if html
  res.render("add-post", { path: "addpost", pageTitle: "Add post" });
});
router.post("/add-post", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/");
});
module.exports = router;
