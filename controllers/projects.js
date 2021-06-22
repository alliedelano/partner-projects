const Project = require('../models/project');
const Partner = require('../models/partner');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    index,
    show,
    create,
    edit,
    update,
    delete: deleteProject
}

function deleteProject(req, res){
    Project.findByIdAndRemove(req.params.id, (err, deleteProject) => {
        res.redirect('/projects')
    })
}

function index(req, res){
    Project.find({}, function(err, projects){
        Partner.find({}, function(err, partners){
            res.render('projects/index', {
                title: 'All Projects',
                projects,
                partners
            })
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
    Partner.find({}, function(err, partners){
        req.body.partner = req.partner._id
        User.find({}, function(err, users){
            req.body.userId = req.user._id;
            req.body.userName = req.user.name;
            const project = new Project(req.body, users, partners);
            project.save(function(err){
                res.redirect ('/projects');
            })
        })
    })
}