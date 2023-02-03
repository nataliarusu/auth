const path = require("path");

const express = require("express");

const router = express.Router();

//router.get(path, callback)
router.get("/add-post", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "addpost.html"));
});
router.post("/add-post", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/");
});
module.exports = router;
