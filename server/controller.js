let user = {};

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(user);
  },
  createUsers: (req, res) => {
    console.log(req.body);
    user = req.body;
    res.sendStatus(200);
  },
  deleteUsers: (req, res) => {
    user = {};
    res.sendStatus(200);
  },
  editUsers: (req, res) => {
    const { newName } = req.params;
    user.name = newName;
    res.sendStatus(200);
  }
}