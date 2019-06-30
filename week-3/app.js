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

// set up developmen server using the LISTEN method
// it creates a server, when it's run on local machine
// it sends request through a special URL called localhost
app.listen(port, () => console.log
("Server started on port 3000.."));