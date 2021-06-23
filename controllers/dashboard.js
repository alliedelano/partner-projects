const Partner = require("../models/partner")
const Project = require("../models/project")

module.exports = {
    index
}

function index(req, res){
    Partner.find({}, function(err, partners){
        Project.find({}, function(err, projects){
            res.render('dashboard/index', {
                title: 'Dashboard',
                partners,
                projects
            })
        })
    })
}