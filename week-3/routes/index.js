const express = require("express")
const router = express.Router();

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
router.get("/trackName", (req, res) => {
    let name = (req.query.name);
    if (name !== "") {
        res.cookie("name", name);
        res.redirect("/myName");
        res.send(name);
    }
});

// exports this so app.js can import
module.exports = router;