const mc = require("./controllers/mainCtlr.js");

module.exports = app => {
  //POST
  app.post("/api/user", mc.checkUser);
  app.post("/api/newuser", mc.registerUser);
};
