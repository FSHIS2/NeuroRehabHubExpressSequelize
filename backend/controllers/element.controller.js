const db = require("../models");
const Element = db.elements;
const Op = db.Sequelize.Op;

// Create and Save a new Element
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create an Element
  const element = {
    name: req.body.name,
    treatment: req.body.treatment,
    description: req.body.description
  }

  // Save Element in the database
  Element.create(element).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the element"
    })
  });
};

// Retrieve all Elements from the database.
exports.findAll = (req, res) => {
  Element.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Elements"
    })
  })
};

// Find a single Element with an id
exports.findOne = (req, res) => {

}

// Update an Element by the id in the request
exports.update = (req, res) => {

};

// Delete an Element with the specified id in the request
exports.delete = (req, res) => {

};