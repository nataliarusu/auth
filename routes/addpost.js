const path = require("path");

const express = require("express");

const router = express.Router();
const postsController = require("../controllers/posts");
//router.get(path, callback)
router.get("/add-post", postsController.getAddPost);
router.post("/add-post", postsController.postAddPost);

module.exports = router;
