exports.get404Error = (req, res, next) => {
  res.render("404", {
    pageTitle: "Page not found",
    path: undefined,
  });
};
