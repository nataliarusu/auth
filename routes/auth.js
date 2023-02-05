const path = require("path");

const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

//router.get(path, callback)
router.get("/log-in", authController.getLogin);

router.post("/log-in", authController.postLogin);
module.exports = router;
