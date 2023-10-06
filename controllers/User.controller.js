const UserModel = require("../models/User.model");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "email & password should be correct!",
      });
    }

    // check if user doesn't exists
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exist!",
      });
    }
    // check is passwords are matching
    const isMatch = password === userExist.password;
    if (userExist && isMatch) {
      res.status(200).json({
        success: true,
        message: "Login successfull!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { userLogin };
