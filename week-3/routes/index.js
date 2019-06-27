const express = require('express')
const router = express.Router();

// === Assignment 1: Web Server
// '/' is the path, (req, res) is the callback
router.get('/', function(req, res){
    res.send("Hello! crystal's server on express");
});
// router.get('/', (req, res) => res.send("Hey, crystal's server is depending on express!")) 

// === Assignment 2
router.get('/getData', function(req, res){
    if (!req.query || !req.query.number) {
        //req.query is number in getData?number
        res.send("Lack of Parameter");
        return;
    }
    let number = Number(req.query.number);
    if (number) {
        let result = 0;
        for (let i = 1; i <= number; i++) {
            result += i;
        }
        res.send("" + result);
        // adding "" makes the result to string instead of number
        // otherwise the app recognizes result number as status code
    } else {
        res.send("Wrong Parameter");
    }
    console.log(req);
    console.log(req.query);
    console.log(req.query.number);
});




// // ======== reference treehouse for Assign #4
// router.get('/', (req, res) => {
//     const name = req.cookies.username;
//     if (name) {
//         res.render('index', { name });
//     } else {
//         res.redirect('/hello');
//     }
// });

// router.get('/hello', (req, res) => {
//     const name = req.cookies.username;
//     if (name) {
//         res.redirect('/');
//     } else {
//         res.render('hello');
//     }
// });

// router.post('/hello', (req, res) => {
//     res.cookie('username', req.body.username);
//     res.redirect('/');
// });
// // ======== 

// exports this so app.js can import
module.exports = router;