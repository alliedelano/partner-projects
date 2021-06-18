const Partner = require('../models/partner');
const User = require('../models/user')

module.exports = {
    index,
    create
};


function index(req, res){
    Partner.find({}, function(err, partners) {
        res.render('partners/index', {
            title: 'All Partners',
            partners
        })
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






// function index(req, res) {
//     let sortKey = req.query.sort || 'orgName';
//     Partner.find({}).sort(sortKey).exec(function(err, partners){
//         if (err) return next(err);
//         res.render('partners/index'), {
//             partners
//         }
//     })
// }