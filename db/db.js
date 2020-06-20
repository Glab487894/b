const mongoose = require('mongoose');

const connectDB = () => mongoose
    .connect(process.env.URL_MONGO, {
        useNewUrlParser: true,
    })
    .then(() => console.log('MONGO DB HAS BEEN CONNECTED ! ! !'))
    .catch((err) => console.log(err));

module.exports = connectDB;
