const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const passport = require("passport");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  const registeredUser = await User.register(user, password);
  console.log(registeredUser);
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.redirect("/");
});

module.exports = router;
