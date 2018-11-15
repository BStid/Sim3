require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");
const cors = require("cors");
const endPoints = require("./endPoints");
const { json } = require("body-parser");
const { SESSION_SECRET: secret, PORT, CONNECTION_STRING } = process.env;
const port = PORT || 3008;

app.use(json());
app.use(cors());
app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1209600000
    }
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

endPoints(app);

app.listen(port, () => console.log(`Server now running on port ${port}`));
