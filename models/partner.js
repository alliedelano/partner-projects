const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerCommentSchema = new Schema({
    text: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {
        type: String
    },
    userAvatar: {
        type: String
    }
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
        enum: ['Wider Contact', 'Peer', 'Customer', 'Technology', 'Collaborator/Contributor']
    },
    status: {
        type: String,
        enum: ['Exploring Relationship', 'Working Together', 'EFL Leader', 'EFL Partner'],
        default: 'Exploring Relationship'
    },
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    leadTeamMember: {
        type: String,
        enum: ['Cherakee', 'Helen', 'Laura', 'Olly']
    },
    comments: [partnerCommentSchema],
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Partner', partnerSchema)