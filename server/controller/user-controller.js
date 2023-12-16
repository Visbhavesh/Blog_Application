const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Token = require("../models/token");
require("dotenv").config();

const singupUser = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };

    const newUser = new User(user);
    // console.log(newUser);
    let res = await newUser.save();
console.log(res);
    return response.status(200).json({ msg: "Signup successfull", res });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while signing up user", error: error });
  }
};

const loginUser = async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({
    username: req.body.username,
  });
  console.log(user);
  if (!user) {
    return res.status(400).json({
      msg: "Username not exist",
    });
  }

  try {
    let match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );

      const newToken = new Token({ token: refreshToken });

      await newToken.save();

      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      res.status(400).json({ msg: "Password does not match" });
    }
  } catch (error) {
    res.status(500).json({ msg: "error while login the user" });
  }
};

const logoutUser = async (request, response) => {
  const token = request.body.token;
  await Token.deleteOne({ token: token });

  response.status(204).json({ msg: "logout successfull" });
};
module.exports = {
  singupUser,
  loginUser,
  logoutUser,
};
