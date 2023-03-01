const router = require("express").Router();
const User = require("../../models/User/user");

//create a new user
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();

    res.send(user);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
