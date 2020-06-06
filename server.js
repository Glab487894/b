const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./db/db");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//DB connection
connectDB();

//Create swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api', require('./rotes'));

app.listen(PORT, function() {
    console.log(`Node server listening on port ${PORT}`);
});
