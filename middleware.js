const authenticate = (req, res, next) => {
  if (!req.user.isAuthenticated()) {
    return res.redirect("/user/login");
  }
  next();
};
