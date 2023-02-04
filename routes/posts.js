const path = require("path"); //nodejs core module

const express = require("express");
const postsController = require("../controllers/posts");

const router = express.Router(); //create a router object

router.get("/", postsController.getPosts);
module.exports = router;
