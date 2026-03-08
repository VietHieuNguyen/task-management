module.exports.loginPost = (req, res, next) => {
  if (!req.body.email) {
    res.json({
      message: "Vui lòng nhập email",
    });

    return;
  }
  if (!req.body.password) {
    res.json({
      message: "Vui lòng nhập mật khẩu",
    });
  }
  next();
};
