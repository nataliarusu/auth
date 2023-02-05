const Post = require("../model/post");

exports.getAddPost = (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "addpost.html")); //if html
  res.render("admin/add-post", { path: "addpost", pageTitle: "Add post" }); //views/admin/add-post.ejs
};

exports.postAddPost = (req, res) => {
  const body = req.body;
  const post = new Post(body.title, body.message);
  post.save(); //adds this post to array
  res.redirect("/");
};

exports.getPosts = (req, res) => {
  res.render("posts/posts", {
    path: "allposts",
    pageTitle: "Posts",
    posts: Post.fetchPosts(), //fetchPosts is static method and we call it on class, not on obj
  });
};

exports.getAdminPosts = (req, res) => {
  res.render("admin/admin-posts", {
    path: "adminposts",
    pageTitle: "Posts",
    posts: Post.fetchPosts(), //fetchPosts is static method and we call it on class, not on obj
  });
};
