const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    // Add these four attributes to your schema: username, email, thoughts, friends
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'Username is Required',
    },
    email: {
        type: String,
        required: "Email is Required",
        unique: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;