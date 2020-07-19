const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    name:{
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
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
        default: ''
    }
});

const UserInfo = mongoose.model('UserInfo', UserSchema);

module.exports = UserInfo;
