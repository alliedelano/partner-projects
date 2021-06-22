const express = require('express');
const router = express.Router();
const dashboardCtrl = require('../controllers/dashboard');
const passport = require('passport');

router.get('/', isLoggedIn, dashboardCtrl.index);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;