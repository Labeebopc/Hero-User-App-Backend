const router = require("express").Router()
const { userRegistration, userLogin } = require("../controllers/userController")

//USER_REGISTRATION || POST
router.post("/user_registration", userRegistration);

//USER_LOGIN || POST
router.post("/user_login", userLogin);

module.exports = router;