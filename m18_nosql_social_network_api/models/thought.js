// THOUGHT MODEL


const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const { formatDate } = require('../utils/formatDate');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought is required',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: 'Username is required'
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
);

// get total count of reactions on retrieval
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;