const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerCommentSchema = new Schema({
    text: String
}, {
    timestamps: true
});

const partnerSchema = new Schema({
    orgName: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String
    },
    type: {
        type: String,
        enum: ['Peer', 'Customer', 'Technology', 'Collaborator/Contributor']
    },
    status: {
        type: String,
        enum: ['Wider Contact', 'Exploring Relationship', 'Working Together', 'EFL Leader', 'EFL Partner'],
        default: 'Wider Contact'
    },
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    leadTeamMember: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [partnerCommentSchema],
    enteredBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Partner', partnerSchema)