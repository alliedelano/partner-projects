const Project = require('../models/project');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    index,
    show,
    create,
    edit,
    update
}

function index(req, res){
    Project.find({}, function(err, projects){
        res.render('projects/index', {
            title: 'All Projects',
            projects
        })
    })
}

function show(req, res){
    Project.findById(req.params.id, function(err, project){
        User.find(
            {userName: user.name},
            function(err, users){
                res.render('projects/show', {
                    title: 'Project Detail',
                    project: project,
                    users: users
                })
            }
        )
    })
}

function edit(req, res){
    Project.findById(req.params.id, function(err, project){
        if(err){
            res.send(err);
        } else {
            res.render('projects/edit', {
                project: project
            })
        }
    })
}

async function update(req, res){
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect(`/projects/${req.params.id}`)
    } catch (err) {
        res.send(err)
    }
}

function create(req, res){
    User.find({}, function(err, users){
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        const project = new Project(req.body, users);
        project.save(function(err){
            res.redirect ('/projects');
        })
    })
}