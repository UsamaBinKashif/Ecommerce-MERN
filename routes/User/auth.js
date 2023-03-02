//express router to access the routes
const router = require("express").Router();

const {
  handleRegisterUser,
  handleLoginUser,
} = require("../../controllers/User/user");

//create a new user route
router.post("/register", handleRegisterUser);

//signin a user
router.post("/login", handleLoginUser);

module.exports = router;
