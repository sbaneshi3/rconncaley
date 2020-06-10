const db = require("../models");
const Rconn = db.rconns;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("test");
  if (!req.body.lName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const RconnData = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    recruiter: req.body.recruiter ? req.body.recruiter : false,
  };

  Rconn.create(RconnData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Rconn.",
      });
    });
};

exports.findAll = (req, res) => {
  const lName = req.query.lName;
  var condition = lName ? { lName: { [Op.iLike]: `%${lName}%` } } : null;

  Rconn.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving rconns.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Rconn.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Rconn with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Rconn.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Rconn was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Rconn with id=${id}. Maybe Rconn was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Rconn with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Rconn.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Rconn was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Rconn with id=${id}. Maybe Rconn was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Rconn with id=" + id,
      });
    });
};

exports.findAllRecruiter = (req, res) => {
  Rconn.findAll({ where: { recruiter: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving rconns.",
      });
    });
};
