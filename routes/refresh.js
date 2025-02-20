const express = require('express');
const router = express.Router();
const refreshTokenConroller = require('../controllers/refreshTokenController');

router.get('/', refreshTokenConroller.handleRefreshToken);

module.exports = router;
