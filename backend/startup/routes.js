const user = require("../routes/user");

module.exports = function(app) {
  app.use("/user", user);
  app.use((req, res) => {
    //wrong url rediret to home
    res.redirect(303, "/");
  });
};
