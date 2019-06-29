// install Express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false}));

// Update your Express project to serve static files
app.use(express.static(__dirname + '/public', {
    extensions: ['html']
    // extensions allows accessing link without .html
  }));

const mainRoutes = require("./routes/index");
app.use(mainRoutes);
// links routes (index.js) to this file (app.js)

// paul's 
// const cookieRoutes = require("./routes/cookies");
// app.use(cookieRoutes);
// app.get('/cookies', function (req, res) {
//     res.send(JSON.stringify(req.cookies));
// });

// app.listen(port, function () {
//     console.log('cookie-parser demo is up on port: ' + port);
// });

/*
// treehouse cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/", function (req, res) {
    // Cookies that have not been signed
    console.log("Cookies: ", req.cookies);

    res.send(JSON.stringify(req.cookies));
  
    // Cookies that have been signed
    console.log("Signed Cookies: ", req.signedCookies);
  });
*/

// set up developmen server using the LISTEN method
// it creates a server, when it's run on local machine
// it sends request through a special URL called localhost
app.listen(port, () => console.log
("Server started on port 3000.."));