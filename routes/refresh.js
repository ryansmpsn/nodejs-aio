const express = require('express');
const router = express.Router();
const refreshTokenConroller = require('../controllers/refreshController');

router.get('/', refreshTokenConroller.handleRefreshToken);

module.exports = router;
