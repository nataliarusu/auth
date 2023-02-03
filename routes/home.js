const path = require("path"); //nodejs core module

const express = require("express");

const router = express.Router(); //create a router object

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "posts.html")); //__dirname, global variable that holds absolute path from our OS to this project folder
});
module.exports = router;
