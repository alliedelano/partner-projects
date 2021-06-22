const project = require('../models/project');
const Project = require('../models/project');

module.exports = {
    create,
    edit,
    update,
    delete: deleteComment
}

function deleteComment(req, res){
    Project.findOne({'comments._id': req.params.id}, function (err, project){
        const commentSubdoc = project.comments.id(req.params.id);
        commentSubdoc.remove();
        project.save(function(err){
            res.redirect(`/projects/${project._id}`)
        })
    })
}

function update(req, res) {
    Project.findOne({'comments._id': req.params.id}, function (err, project){
        const commentSubdoc = project.comments.id(req.params.id);
        if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/projects/${project._id}`);
        commentSubdoc.text = req.body.text;
        project.save(function(err){
            res.redirect(`/projects/${project._id}`)
        })
    })
}

function create(req, res) {
    Project.findById(req.params.id, function(err, project){
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        project.comments.push(req.body);
        project.save(function(err){
            res.redirect(`/projects/${project._id}`)
        })
    })
}

function edit(req, res){
    Project.findOne({'comments._id': req.params.id}, function(err, project){
        const commentSubdoc = project.comments.id(req.params.id);
        if(err){
            res.send(err);
        } else {
            res.render(`projects/comments/edit`, {
            project,
            commentSubdoc
            })
        }
    })
}