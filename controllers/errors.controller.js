exports.get404Error = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page not found",
    path: undefined,
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.get500Error = (req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "Error!",
    path: "/500",
    isAuthenticated: req.session.isLoggedIn,
  });
};
