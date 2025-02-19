const express = require('express');
const router = express.Router();
const path = require('path');
const data = {};
data.employees = require('../../data/employees.json');

router
  .route('/')
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });

router.route('/:id').get((req, res) => {
  res.json({ id: req.params.id });
});

// To create a RESTful API for managing employees using Express.js, you can follow the structure provided in the snippets. Below is a complete example of how you can set up the `employees` route to handle various HTTP methods like GET, POST, PUT, and DELETE.

module.exports = router;
