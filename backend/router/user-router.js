const express = require("express");
const router = express.Router();

const userController = require("../controller/user-controller");

router.post("/signup", userController.signUp);

router.get("/signin/", userController.signIn);

module.exports = router;
