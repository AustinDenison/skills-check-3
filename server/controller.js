module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");

    db.get_all()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send("somthing went wrong");
        console.log(err);
      });
  },
  createHouse: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;

    db.create_house(name, address, city, state, zip)
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        res.status(500).send("somthing went wrong");
        console.log(err);
      });
  },
  delete: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params

      db.delete(id).then(houses => res.status(200).send(houses))
      .catch(err => {
          res.status(500).send('somthing went wrong')
      })
  }
};
