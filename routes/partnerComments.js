const express = require('express');
const router = express.Router();
const partnerCommentsCtrl = require('../controllers/partnerComments');

router.post('/partners/:id/comments', partnerCommentsCtrl.create);

module.exports = router;