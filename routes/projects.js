var router = require('express').Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.get('/:id', projectsCtrl.show);
router.get('/:id/edit', projectsCtrl.edit);
router.post('/', projectsCtrl.create);
router.put('/:id', projectsCtrl.update);


module.exports = router;