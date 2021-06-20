var router = require('express').Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.post('/', projectsCtrl.create);

module.exports = router;