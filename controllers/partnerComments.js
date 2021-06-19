const partner = require('../models/partner');
const Partner = require('../models/partner');

module.exports = {
    create,
    //edit,
    //update,
    delete: deleteComment
}

// function update(req, res) {
//     console.log("i updated")
// }

// function edit(req, res) {
//     Partner.findOne({'comments._id': req.params.id}, function(err, partner){
//         if(err){
//             res.send(err);
//         } else {
//             res.render(`/partners/${partner._id}/comments/${comment._id}/edit`)
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
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        partner.comments.push(req.body);
        partner.save(function(err){
        res.redirect(`/partners/${partner._id}`);
        })
    })
}