//user model
const User = require("../../models/User/user");

//npm package used to generate a hash value, will used to convert hashed passwords for user privacy and security.
const CryptoJS = require("crypto-js");

//regitser user
const handleRegisterUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const handleLoginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const password = hashedPassword.toString(CryptoJS.enc.Utf8);
    password !== req.body.password && res.status(401).json("Wrong Credentials");

    res.status(200).json(user);
    console.log(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { handleRegisterUser, handleLoginUser };
