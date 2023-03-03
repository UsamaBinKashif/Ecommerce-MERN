const router = require("express").Router();

router.put("/:id", (req, res) => {
  res.send("User Test");
});

module.exports = router;
