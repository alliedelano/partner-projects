const express = require('express');
const router = express.Router();
const projectCommentsCtrl = require('../controllers/projectComments');

router.post('/projects/:id/comments', isLoggedIn, projectCommentsCtrl.create);
router.get('/projects/:id/comments/:id/edit', isLoggedIn, projectCommentsCtrl.edit);
router.put('/projects/:id/comments/:id', isLoggedIn, projectCommentsCtrl.update);
router.delete('/projects/:id/comments/:id', isLoggedIn, projectCommentsCtrl.delete);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;