const {
  handleUpdateUser,
  handleDeleteUser,
} = require("../../controllers/User/user");
const { verifyToken, verifyTokenAndAuth } = require("../../service/auth");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuth, handleUpdateUser);

router.delete("/:id", verifyTokenAndAuth, handleDeleteUser);
module.exports = router;
