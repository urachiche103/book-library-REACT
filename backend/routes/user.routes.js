const express = require("express")
const router = express.Router()
const {login, signup} = require("../controllers/user.controller")

router.post("/signup", signup)
router.post("/login", login)
// router.post("confirmation", confirmUser)

module.exports = router