const express = require("express");

const router = express.Router();
const adminPostsController = require("../controllers/posts");
//insted of const and get/post in server.js we will use app.use(router)

router.get("/add-post", adminPostsController.getAddPost);
router.post("/add-post", adminPostsController.postAddPost);

router.get("/admin-posts", adminPostsController.getAdminPosts);
module.exports = router;
