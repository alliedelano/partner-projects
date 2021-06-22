var router = require('express').Router();
var partnersCtrl = require('../controllers/partners');

router.get('/', isLoggedIn, partnersCtrl.index);
router.get('/:id', isLoggedIn, partnersCtrl.show);
router.get('/:id/edit', isLoggedIn, partnersCtrl.edit);
router.post('/', isLoggedIn, partnersCtrl.create);
router.put('/:id', isLoggedIn, partnersCtrl.update);
router.delete('/:id', isLoggedIn, partnersCtrl.delete);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;