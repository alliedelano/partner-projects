const express = require('express');
const router = express.Router();
const partnerCommentsCtrl = require('../controllers/partnerComments');

router.post('/partners/:id/comments', isLoggedIn, partnerCommentsCtrl.create);
router.get('/partners/:id/comments/:id/edit', isLoggedIn, partnerCommentsCtrl.edit);
router.put('/partners/:id/comments/:id', isLoggedIn, partnerCommentsCtrl.update);
router.delete('/partners/:id/comments/:id', isLoggedIn, partnerCommentsCtrl.delete)

function isLoggedIn(req, res, next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;