const express = require("express");

const router = express.Router();

//insted of cont and get/post in server.js we will use app.use(router)
router.get("/admin", (req, res) => {
  res.send(/*html*/ `Admin page`);
});
router.post("/admin", (req, res) => {
  const body = req.body;
  console.log(body);
  res.redirect("/");
});
module.exports = router;
