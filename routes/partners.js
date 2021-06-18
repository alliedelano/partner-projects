var router = require('express').Router();
var partnersCtrl = require('../controllers/partners');

router.get('/', partnersCtrl.index);
router.post('/', partnersCtrl.create)

module.exports = router;