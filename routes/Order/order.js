const router = require("express").Router();

router.get("/order", (req, res) => {
  res.send("order Test");
});

router.post("/order", (req, res) => {
  const productName = req.body.productName;
  res.send(productName);
});
module.exports = router;
