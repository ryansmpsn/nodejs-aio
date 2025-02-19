const express = require('express');
const router = express.Router();
const authConroller = require('../controllers/authController');

router.post('/', authConroller.handleLogin);

module.exports = router;
