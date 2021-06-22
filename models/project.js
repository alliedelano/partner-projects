const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectCommentSchema = new Schema({
    text: String,
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
    userName: {
        type: String
    }
}, {
    timestamps: true
});

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Blog', 'Case Study', 'Webinar', 'Training', 'Tool/Resource', 'Master Class', 'Online Course', 'Co-Developed Training', 'On-Site Visit', 'Other']
    },
    size: {
        type: String,
        enum: ['xs', 's', 'm', 'l', 'xl']
    },
    partner: [{type: Schema.Types.ObjectId, ref: 'Partner'}],
    leadTeamMember: {
        type: String,
        enum: ['Cherakee', 'Helen', 'Laura', 'Olly']
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    description: {
        type: String
    },
    contractNecessary: {
        type: Boolean
    },
    contractInPlace: {
        type: Boolean
    },
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
    userName: {
        type: String
    },
    comments: [projectCommentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);