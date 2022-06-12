const express = require("express");
const User = require("./models/userModel");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRouter");
const session = require("express-session");

mongoose
  .connect("mongodb://localhost:27017/dineDB")
  .then(() => console.log("DB connected"));

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

passport.use(User.createStrategy());

const viewsPath = path.join(__dirname, "/views");

app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/admin", adminRoute);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/secret", (req, res) => {
  res.send("secret");
});

app.listen("3080", () => {
  console.log("Listening on 3080");
});
