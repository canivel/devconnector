const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Test Users Route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Users Works" });
});

// @route   POST api/users/register
// @desc    Register Users Route
// @access  Public
router.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      email: "Email already registered"
    });
  } else {
    const avatar = await gravatar.url(req.body.email, {
      s: "200", //size
      r: "pg", //rating
      d: "mm" // default
    });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password
    });
    try {
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      const createdUser = await newUser.save();
      res.json(createdUser);
    } catch (err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
});

// @route   POST api/users/login
// @desc    Signin Users Route / Returns a JWT Token
// @access  Public
router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //find the user by email
  try {
    const user = await User.findOne({ email });
    //check if user exists
    if (!user) {
      return res.status(404).json({
        email: "Email not found."
      });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      //generate JWT and return it
      const payload = {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      };
      try {
        const jwtToken = await jwt.sign(payload, keys.secretKey, {
          expiresIn: 3600 * 4
        });
        res.json({
          success: true,
          token: jwtToken
        });
      } catch (err) {
        return res.status(404).json({
          error: err
        });
      }
    } else {
      res.status(400).json({
        password: "Password incorrect"
      });
    }
  } catch (err) {
    return res.status(404).json({
      error: err
    });
  }
});

module.exports = router;
