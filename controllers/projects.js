const Project = require('../models/project');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    index,
    create
}

function index(req, res){
    Project.find({}, function(err, projects){
        res.render('projects/index', {
            title: 'All Projects',
            projects
        })
    })
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