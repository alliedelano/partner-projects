const project = require('../models/project');
const Project = require('../models/project');

module.exports = {
    create,
    edit
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
            res.render(`projects/comments/edit`),
            project,
            commentSubdoc
        }
    })
}