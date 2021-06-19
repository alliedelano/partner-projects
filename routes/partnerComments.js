const express = require('express');
const router = express.Router();
const partnerCommentsCtrl = require('../controllers/partnerComments');

router.post('/partners/:id/comments', partnerCommentsCtrl.create);
//router.get('/partners/:id/comments/:id/edit', partnerCommentsCtrl.edit);
//router.post('/partners/:id/comments/:id', partnerCommentsCtrl.update);
router.delete('/partners/:id/comments/:id', partnerCommentsCtrl.delete)

module.exports = router;