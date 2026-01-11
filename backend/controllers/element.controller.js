const db = require("../models");
const Element = db.elements;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  const element = {
    name: req.body.name,
    treatment: req.body.treatment,
    description: req.body.description,
    filename: req.file ? req.file.filename : ""
  }

  Element.create(element).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the element"
    })
  });
};

exports.findAll = (req, res) => {
  Element.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Elements"
    })
  })
};

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Content cannot be empty!" });
  }

  const id = req.params.id;

  const element = {
    name: req.body.name,
    treatment: req.body.treatment,
    description: req.body.description
  };

  Element.update(element, { where: { id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Element updated successfully." });
      } else {
        res.send({ message: "Element not found or request body empty." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating element: " + err.message
      });
    });
};


exports.delete = (req, res) => {
  let id = req.params.id;

  Element.destroy({
    where: {
      id: id
    },
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while deleting the element"
    })
  })
};