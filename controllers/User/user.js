//user model
const User = require("../../models/User/user");

// json web token
const jwt = require("jsonwebtoken");

//npm package used to generate a hash value, will used to convert hashed passwords for user privacy and security.
const CryptoJS = require("crypto-js");

//regitser user
const handleRegisterUser = async (req, res) => {
  //new user object
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //Crypto js used here to hash the user password
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

//sign in user
const handleLoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword && res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        username: user.username,
      },
      process.env.JWT_SEC
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

//update user
const handleUpdateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { handleRegisterUser, handleLoginUser, handleUpdateUser ,handleDeleteUser};
