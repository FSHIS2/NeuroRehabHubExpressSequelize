module.exports = app => {
  const elements = require("../controllers/element.controller.js");

  var router = require("express").Router();

  // Create a new Element
  router.post("/", elements.create);

  // Retrieve all Elements
  router.get("/", elements.findAll);

  // Retrieve a single Element with id
  router.get("/:id", elements.findOne);

  // Update an Element with id
  router.put("/:id", elements.update);

  // Delete an Element with id
  router.delete("/:id", elements.delete);

  app.use('/api/elements', router);
}