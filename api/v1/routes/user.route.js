const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const authValidates = require("../validates/auth.validate")

const authMiddleware = require("../../v1/middlewares/auth.middleware")
router.post("/register", controller.register);

router.post("/login",authValidates.loginPost, controller.login);


router.post("/password/forgot", controller.forgotPassword);

router.post("/password/otp", controller.otpPassword);

router.post("/password/reset", controller.resetPassword);

router.get("/detail",authMiddleware.requireAuth, controller.detail);





module.exports = router