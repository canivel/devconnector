const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");

const validatePostInput = require("../../validators/post");

// @route   GET api/posts
// @desc    Get Posts Route
// @access  Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(404).json({ error: "No posts yets" });
  }
});

// @route   GET api/posts/:id
// @desc    Get Posts by id Route
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(404).json({ error: "No post found with this id" });
  }
});

// @route   POST api/posts
// @desc    Create Posts Route
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { text, name, avatar } = req.body;
    const newPost = new Post({
      text,
      name,
      avatar,
      user: req.user.id
    });

    const post = await newPost.save();
    res.json(post);
  }
);

// @route   DELETE api/posts/:id
// @desc    DELETE Post by id Route
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      await Post.findOneAndDelete({ _id: req.params.id, user: req.user.id });
      res.json({ success: "Post deleted" });
    } catch (err) {
      res.status(404).json({ error: "Error deleting post" });
    }
  }
);

// @route   POST api/posts/like/:id
// @desc    Add/Remove Like to Post by id Route
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        res.status(404).json({ error: "Post not found" });
      }

      const index = post.likes.findIndex(l => {
        return l.user == req.user.id;
      });

      if (index === -1) {
        post.likes.push({ user: req.user.id });
      } else {
        post.likes.splice(index, 1);
      }

      const likedPost = await post.save();

      res.json(likedPost);
    } catch (err) {
      res.status(404).json({ error: "Error liking post" });
    }
  }
);

// @route   POST api/posts/comment/:id
// @desc    Add Comment to Post by id Route
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        res.status(404).json({ error: "Post not found" });
      }
      const { text, name, avatar } = req.body;
      const newComment = {
        text,
        name,
        avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);
      const postComment = await post.save();

      res.json(postComment);
    } catch (err) {
      res.status(404).json({ error: "Error adding comment to post" });
    }
  }
);

// @route   DELETE api/posts/comment/:id/:commentId
// @desc    DELETE Comment by id Route
// @access  Private
router.delete(
  "/comment/:id/:commentId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const query = {
        _id: req.params.id,
        "comments._id": req.params.commentId,
        "comments.user": req.user.id
      };
      const update = {
        $pull: { comments: { _id: req.params.commentId } }
      };
      const options = { new: true };
      await Post.findOneAndUpdate(query, update, options).exec(
        (err, result) => {
          if (err) {
            res.status(500).json({ error: "Error removing comment" });
          } else {
            if (result) {
              res.json(result);
            } else {
              res.status(404).json({ error: "No comment to remove" });
            }
          }
        }
      );
    } catch (err) {
      res.status(404).json({ error: err });
    }
  }
);

module.exports = router;
