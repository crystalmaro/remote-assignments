// install Express
const express = require('express');
const bodyParser = require('body-parser');

// const cookieParser = require('cookie-parser');

// create Express application
// assign it to app, aka the central part of our application
const app = express();
const port = 3000;

// Update your Express project to serve static files
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());

// // ======== Pug start
// // setting app (view engine) to the parameter (Pug)
// // app.set defines different setting in Express
// // it tells Express which template engine to use
// app.set("view engine", "pug");
// // ======== Pug end

const mainRoutes = require('./routes/index');
// links routes (index.js) to this file (app.js)
app.use(mainRoutes);


// set up developmen server using the LISTEN method
// it creates a server, when it's run on local machine
// it sends request through a special URL called localhost
app.listen(port, () => console.log
("Server started on port 3000.."));