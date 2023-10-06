const express = require("express");
const { userLogin } = require("../controllers/User.controller");

const router = express.Router();

router.post("/user/login", userLogin);

module.exports = router;
