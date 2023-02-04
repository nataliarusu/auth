const postsArr = []; //[{ title: "Post 1", content: "Post content" }];

exports.getAddPost = (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "addpost.html")); //if html
  res.render("add-post", { path: "addpost", pageTitle: "Add post" });
};

exports.postAddPost = (req, res) => {
  const body = req.body;
  postsArr.push({ title: body.title, content: body.message });
  console.log(postsArr);
  res.redirect("/");
};

exports.getPosts = (req, res) => {
  //res.sendFile(path.join(__dirname, "..", "views", "posts.html")); //__dirname, global variable that holds absolute path from our OS to this project folder
  res.render("posts", {
    path: "allposts",
    pageTitle: "Posts",
    posts: postsArr,
  });
};
