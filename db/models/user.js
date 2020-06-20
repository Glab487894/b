const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
});

const UserInfo = mongoose.model('UserInfo', UserSchema);

module.exports = UserInfo;
