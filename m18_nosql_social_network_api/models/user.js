// USER MODEL


const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is required',
            // From https://saturncloud.io/blog/whats-the-best-way-to-validate-an-email-address-in-javascript/
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid e-mail address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }   
);

// get total count of friends on retrieval
userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    }
);

const User = model('User', userSchema);

module.exports = User;