const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://glab_16:qweasdzxc123456789@cluster0-949us.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    })
    .then(() => console.log('MONGO DB HAS BEEN CONNECTED ! ! !'))
    .catch((err) => console.log(err));


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

mongoose.model('InfoSchema', InfoSchema);

module.exports = mongoose.model('InfoSchema');