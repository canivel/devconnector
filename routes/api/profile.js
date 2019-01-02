const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load models
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//Load validation
const validateProfileInput = require("../../validators/profile.js");

// @route   GET api/profile/test
// @desc    Test Profile Route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Profile Works" });
});

// @route   GET api/profile
// @desc    Get Current User Profile Route
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const errors = {};
    try {
      const profile = await Profile.findOne({ user: req.user.id }).populate(
        "user",
        ["name", "avatar"]
      );
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }
      res.json(profile);
    } catch (err) {
      return res.status(404).json(err);
    }
  }
);

// @route   POST api/profile
// @desc    Create User Profile Route
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Get fields
    const {
      skills,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram
    } = req.body;
    const profileFields = {
      ...req.body,
      user: req.user.id,
      skills: skills.split(","),
      social: { youtube, twitter, facebook, linkedin, instagram }
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id }).populate(
        "user",
        ["name", "avatar"]
      );
      if (profile) {
        //update profile
        const updatedProfile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(updatedProfile);
      } else {
        // create
        const checkProfile = await Profile.findOne({
          handle: profileFields.handle
        });
        if (checkProfile) {
          errors.handle = "That handle already exists";
          res.status(400).json(errors);
        }

        const newProfile = await new Profile(profileFields).save();
        return res.json(newProfile);
      }
    } catch (err) {
      return res.status(404).json(err);
    }
  }
);
module.exports = router;
