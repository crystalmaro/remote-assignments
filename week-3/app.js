// install Express
const express = require('express');
const bodyParser = require('body-parser');

// create Express application
// assign it to app, aka the central part of our application
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));

const mainRoutes = require('./routes/index');
// links routes (index.js) to this file (app.js)
app.use(mainRoutes);

// set up developmen server using the LISTEN method
// it creates a server, when it's run on local machine
// it sends request through a special URL called localhost
app.listen(port, () => console.log
("Server started on port 3000.."));