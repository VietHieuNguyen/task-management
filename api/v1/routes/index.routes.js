const taskRoutes = require("../routes/task.route");
const userRoutes = require("../routes/user.route");
const authMiddleware = require("../../v1/middlewares/auth.middleware")

module.exports = (app) => {
  const version = "/api/v1";
  app.use(version + "/tasks",authMiddleware.requireAuth, taskRoutes);
  app.use(version + "/users", userRoutes);
};
