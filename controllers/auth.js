exports.getLogin = (req, res, next) => {
  res.render("auth/log-in", {
    path: "login",
    pageTitle: "Log in",
    isAuthenticated: req.session.loggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  req.session.isLoggedIn = true; //add new prop to session here, the name on our choise
  res.redirect("/");
  console.log(email, password);
  //res.render("auth/log-in", { path: "login", pageTitle: "Log in" });
};
