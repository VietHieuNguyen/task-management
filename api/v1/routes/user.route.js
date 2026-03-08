const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const authValidates = require("../validates/auth.validate")
router.post("/register", controller.register);

router.post("/login",authValidates.loginPost, controller.login);


router.post("/password/forgot", controller.forgotPassword);



module.exports = router