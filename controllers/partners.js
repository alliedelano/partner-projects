const Partner = require('../models/partner');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    index,
    show,
    create,
    edit,
    update,
    delete: deletePartner
};

async function update(req, res){
    try {
        const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect(`/partners/${req.params.id}`)
    } catch (err) {
        res.send(err)
    }
}

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
            {userName: user.name},
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
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
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
            res.render('partners/edit', {
                partner: partner
            })
        }
    });
}

function deletePartner(req, res){
    Partner.findByIdAndRemove(req.params.id, (err, deletePartner) => {
        res.redirect('/partners')
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