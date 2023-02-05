const Post = require("../model/post");

exports.getAddPost = (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "addpost.html")); //if html
  console.log(req);
  res.render("admin/add-post", {
    //views/admin/add-post.ejs
    path: "addpost",
    pageTitle: "Add post",
    isLoggedIn: req.session.loggedIn,
  });
};

exports.postAddPost = (req, res) => {
  const body = req.body;
  const post = new Post(body.title, body.message);
  post.save(); //adds this post to array
  res.redirect("/");
};

exports.getPosts = (req, res) => {
  console.log(req.session.isLoggedIn, " grom getPosts");
  res.render("posts/posts", {
    path: "allposts",
    pageTitle: "Posts",
    posts: Post.fetchPosts(), //fetchPosts is static method and we call it on class, not on obj
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getAdminPosts = (req, res) => {
  res.render("admin/admin-posts", {
    path: "adminposts",
    pageTitle: "Posts",
    posts: Post.fetchPosts(), //fetchPosts is static method and we call it on class, not on obj
    isAuthenticated: req.session.loggedIn,
  });
};
