var router = require('express').Router();
var partnersCtrl = require('../controllers/partners');

router.get('/', partnersCtrl.index);
router.get('/:id', partnersCtrl.show);
router.get('/:id/edit', partnersCtrl.edit);
router.post('/', partnersCtrl.create);
router.put('/:id', partnersCtrl.update);
router.delete('/:id', partnersCtrl.delete);


module.exports = router;