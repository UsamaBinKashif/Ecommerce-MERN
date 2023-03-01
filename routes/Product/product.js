const router = require("express").Router();

router.get("/product", (req, res) => {
  res.send("Product Test");
});

router.post("/product", (req, res) => {
  const productName = req.body.productName;
  res.send(productName);
});
module.exports = router;
