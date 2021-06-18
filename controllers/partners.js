const Partner = require('../models/partner');
const user = require('../models/user');
const User = require('../models/user')

module.exports = {
    index,
    show,
    create,
    edit
};


function index(req, res){
    Partner.find({}, function(err, partners) {
        res.render('partners/index', {
            title: 'All Partners',
            partners
        })
    })
}

function show (req, res){
    Partner.findById(req.params.id, function (err, partner){
        User.find(
            {enteredBy: user.id},
            function(err, users){
                res.render('partners/show', {
                    title: 'Partner Detail',
                    partner: partner,
                    users: users
                })
            }
        )
    })
}

function create(req, res){
    User.find({}, function(err, users){
        req.body.enteredBy = req.user;
        const partner = new Partner(req.body, users);
        partner.save(function(err){
            res.redirect ('/partners');
        })
    })
}

function edit(req, res){
    Partner.findById(req.params.id, function(err, partner){
        if(err){
            res.send(err);
        } else {
            res.render('edit.ejs', {
                partner: partner
            })
        }
    });
}






// function index(req, res) {
//     let sortKey = req.query.sort || 'orgName';
//     Partner.find({}).sort(sortKey).exec(function(err, partners){
//         if (err) return next(err);
//         res.render('partners/index'), {
//             partners
//         }
//     })
// }