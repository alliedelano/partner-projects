var router = require('express').Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);

module.exports = router;