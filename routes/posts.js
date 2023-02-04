const path = require("path"); //nodejs core module

const express = require("express");

const router = express.Router(); //create a router object
const postsList = []; //[{ title: "Post 1", content: "Post content" }];

router.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "posts.html")); //__dirname, global variable that holds absolute path from our OS to this project folder
  res.render("posts", {
    path: "allposts",
    pageTitle: "Posts",
    posts: postsList,
  });
});
module.exports = router;
