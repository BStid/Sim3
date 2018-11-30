const checkUser = (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  db.get_all_users()
    .then(response => {
      console.log(response);
      response
        .map((value, index) => {
          if (username === value.username) {
            password === value.password
              ? res.status(200).send(value.username)
              : res.status(200).send("false");
          }
        })
        .then(res.status(200).send("false"));
    })
    .catch(err =>
      res.status(500).send(err => {
        console.log("No User...", err);
      })
    );
};
const registerUser = (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  db.get_user_by_username(username)
    .then(response =>
      response[0]
        ? res.status(200).send([true])
        : db
            .add_user(username, password)
            .then(res.status(200).send([false, username]))
            .catch(err => res.status(500).send(err => console.log(err)))
    )
    .catch(err => console.log(err));
};
module.exports = {
  checkUser,
  registerUser
};
