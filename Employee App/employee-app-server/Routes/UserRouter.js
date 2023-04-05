var express = require("express");
var router = express.Router();
const userController = require("../Controllers/UserController");

router.post("/login", userController.login)

.post("/signUp", userController.signUp);

exports.router = router;
