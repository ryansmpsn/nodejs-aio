const express = require('express');
const router = express.Router();
const path = require('path');
const employeesController = require('../../controllers/employeesController');

router
  .route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route('/:id').get(employeesController.getEmployee);

// To create a RESTful API for managing employees using Express.js, you can follow the structure provided in the snippets. Below is a complete example of how you can set up the `employees` route to handle various HTTP methods like GET, POST, PUT, and DELETE.

module.exports = router;
