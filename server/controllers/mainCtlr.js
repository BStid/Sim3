const checkUser = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const db = req.app.get("db");
  db.get_user_by_username()
    .then(response => {
      console.log(response);
      let newFalse = "false";
      response.map((value, index) => {
        if (username === value.username) {
          password === value.password
            ? res.status(200).send(value.username)
            : res.status(200).send(newFalse);
        } else {
          res.status(200).send("poop");
        }
      });
    })
    .catch(err =>
      res.status(500).send(err => {
        console.log("No User...", err);
      })
    );
};

module.exports = {
  checkUser
};
