const express = require('express');
const router = express.Router();
const projectCommentsCtrl = require('../controllers/projectComments');

router.post('/projects/:id/comments', projectCommentsCtrl.create);
router.get('/projects/:id/comments/:id/edit', projectCommentsCtrl.edit);
router.put('/projects/:id/comments/:id', projectCommentsCtrl.update);
router.delete('/projects/:id/comments/:id', projectCommentsCtrl.delete);

module.exports = router;