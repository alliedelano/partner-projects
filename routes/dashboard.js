const express = require('express');
const router = express.Router();
const dashboardCtrl = require('../controllers/dashboard');
const passport = require('passport');

router.get('/', dashboardCtrl.index);

module.exports = router;