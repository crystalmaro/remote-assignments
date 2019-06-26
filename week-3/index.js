const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hey, crystal's server is depending on express!"))

app.listen(port, () => console.log("Server started on port 3000.."));