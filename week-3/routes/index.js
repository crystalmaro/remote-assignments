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
    let number = Number(req.query.number);
    if (Object.keys(req.query).length === 0) {
        //req.query is number in getData?number
        res.send("Lack of Parameter");
    } else if (!number) {
        res.send("Wrong Parameter");
    } else {
        let result = 0;
        for (let i = 1; i <= number; i++) {
            result += i;
        }
        res.send("" + result);
        // adding "" makes the result to string instead of number
        // otherwise the app recognizes result number as status code
    } 
});

// === Assignment 4
// ======== reference treehouse for Assign #4
// /trackName doesn't even load TT__TT
router.get("/trackName", (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render("index", { name });
    } else {
        res.redirect("/trackName");
    }
});

router.get("/trackName", (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect("/trackName");
    } else {
        res.render("hello");
    }
});

router.post("/trackName", (req, res) => {
    res.cookie("username", req.body.username);
    console.log(req.cookies.username);
    res.redirect("/trackName");
});
// ======== 

// exports this so app.js can import
module.exports = router;