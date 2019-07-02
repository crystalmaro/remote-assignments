const express = require("express")
const router = express.Router();
const path = require('path');

// === Assignment 1: Web Server
// '/' is the path, (req, res) is the callback
router.get("/", function(req, res){
    res.send("Hello! crystal's server on express");
});
// router.get('/', (req, res) => res.send("Hey, crystal's server is depending on express!")) 

// === Assignment 2
router.get("/getData", function(req, res){
    let number = parseInt(req.query.number);
    if (!req.query || req.query.number === undefined) {
        //req.query is number in getData?number
        res.send("Lack of Parameter");
    } else if (isNaN(number) || number <= 0) {
        res.send("Wrong Parameter");
    } else {
        let result = 0;
        for (let i = 1; i <= number; i++) {
            result += i;
        }
        res.send(result.toString());
    } 
});

/// === Assignment 4
router.get("/myName", (req, res) => {
    let name = req.cookies.name;
    if (name !== undefined && name !== "") {
        // console.log("sending name from myname")
        res.send("hello " + name);
    } else {
        // console.log("sending form from myname")
        res.sendFile(path.join(__dirname, "../public", "myname.html"));
    }
});

router.post("/trackName", (req, res) => {
    let name = req.query.name || req.body.name;
    res.cookie("name", name);
    res.redirect("/myName");
})
// trackName only works on POST method
// req.body because <form> wihtin myName.html is being read as "body"

// exports this so app.js can import
module.exports = router;