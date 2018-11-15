const addUser = (req, res) => {
  console.log(req);
  const db = app.get("db");
  db.get_user_by_username(req.body.username)
    .then(response => {
      if (req.body.password === response) {
        return true;
      } else {
        return false;
      }
    })
    .catch(err =>
      res.status(500).send(err => {
        console.log("No User...", err);
        return false;
      })
    );
};
