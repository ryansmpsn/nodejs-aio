const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const employeesController = require('../../controllers/employeesController');

router
  .route('/')
  .get(employeesController.getAllEmployees)
  .post(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    employeesController.createNewEmployee
  )
  .put(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    employeesController.updateEmployee
  )
  .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

router.route('/:id').get(employeesController.getEmployee);

// To create a RESTful API for managing employees using Express.js, you can follow the structure provided in the snippets. Below is a complete example of how you can set up the `employees` route to handle various HTTP methods like GET, POST, PUT, and DELETE.

module.exports = router;
