var router = require('express').Router();
var partnersCtrl = require('../controllers/partners');

router.get('/', partnersCtrl.index);
router.get('/:id', partnersCtrl.show);
router.get('/:id', partnersCtrl.edit);
router.post('/', partnersCtrl.create);


module.exports = router;