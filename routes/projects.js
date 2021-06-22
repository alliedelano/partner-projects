var router = require('express').Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', isLoggedIn, projectsCtrl.index);
router.get('/:id', isLoggedIn, projectsCtrl.show);
router.get('/:id/edit', isLoggedIn, projectsCtrl.edit);
router.post('/', isLoggedIn, projectsCtrl.create);
router.put('/:id', isLoggedIn, projectsCtrl.update);
router.delete('/:id', isLoggedIn, projectsCtrl.delete);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;