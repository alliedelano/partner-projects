const Partner = require('../models/partner');

module.exports = {
    create
}

function create(req, res) {
    Partner.findById(req.params.id, function(err, partner){
        partner.comments.push(req.body);
        partner.save(function(err){
            res.redirect(`/partners/${partner._id}`);
        })
    })
}