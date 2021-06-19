const Partner = require('../models/partner');

module.exports = {
    create,
    //edit,
    //update,
    delete: deleteComment
}

// function edit(req, res) {
//     Partner.findOne({'comments._id': req.params.id}, function(err, partner){
//         if(err){
//             res.send(err);
//         } else {
//             res.render(`/partners/${partner._id}/comments/${req.params.id}/edit`)
//         }
//     })
// }

function deleteComment(req, res){
    Partner.findOne({'comments._id': req.params.id}, function(err, partner){
        const commentSubdoc = partner.comments.id(req.params.id);
        //if(!commentSubdoc.enteredBy.equals(req.user._id)) return res.redirect(`/partners/${partner._id}`);
        commentSubdoc.remove();
        partner.save(function(err) {
            res.redirect(`/partners/${partner._id}`);
            })
        })
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