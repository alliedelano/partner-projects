const Partner = require('../models/partner');

module.exports = {
    create,
    //delete: deleteComment
}

function create(req, res) {
    Partner.findById(req.params.id, function(err, partner){
        req.body.enteredBy = req.user
        partner.comments.push(req.body);
        partner.save(function(err){
            res.redirect(`/partners/${partner._id}`);
        })
    })
}

// function deleteComment(req, res){
//     Partner.findById(req.params.id, function(err, partner){
//         partner.comments.find(function(comment){
//             if (comment.id === req.params.comment_id)
//         })
//     })
// }