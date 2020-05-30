const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
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
    info: {
        type: String,
        required: true
    }
});

const UserInfo = mongoose.model('UserInfo', InfoSchema);

module.exports = UserInfo;
