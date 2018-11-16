const mc = require("./controllers/mainCtlr");

module.exports = app => {
  //GET
  app.post("/api/user", mc.checkUser);
};
