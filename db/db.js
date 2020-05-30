const mongoose = require('mongoose');

const connectDB = () => mongoose
    .connect('mongodb+srv://glab_16:qweasdzxc123456789@cluster0-949us.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    })
    .then(() => console.log('MONGO DB HAS BEEN CONNECTED ! ! !'))
    .catch((err) => console.log(err));

module.exports = connectDB;
