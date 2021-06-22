var router = require('express').Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.get('/:id', projectsCtrl.show);
router.post('/', projectsCtrl.create);

module.exports = router;