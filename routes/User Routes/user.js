const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User Test");
});

router.post("/user", (req, res) => {
  const username = req.body.username;
  res.send("Hello" + " " + username);
});
module.exports = router;
