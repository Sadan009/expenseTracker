const express = require("express");
const router = express.Router();

const userController = require("../controller/user-controller");

router.post("/signup", userController.signUp);

// router.get("/signin/", userController.signIn);
router.get("/userdetail/:id", userController.getById);

router.get("/getusers", userController.getUser);

module.exports = router;
