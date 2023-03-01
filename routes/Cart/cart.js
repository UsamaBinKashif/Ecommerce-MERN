const router = require("express").Router();

router.get("/cart", (req, res) => {
  res.send("cart Test");
});

router.post("/cart", (req, res) => {
  const productName = req.body.productName;
  res.send(productName);
});
module.exports = router;
