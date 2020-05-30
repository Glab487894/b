const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./rotes'));

app.listen(PORT, function() {
    console.log(`Node server listening on port ${PORT}`);
});