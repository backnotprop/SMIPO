/**
 * SMIPO
 *
 * @author Michael Ramos
 *
 *
 */

"use strict";
// BASE SETUP
// =============================================

// required packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// connect to our database
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/smipo');

// Require schemas
var Member = require('./app/models/member');

// configure body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 3000;

// FRONTEND ROUTE Stuff
app.use(express.static(__dirname + '/www'));


// ROUTES FOR API
// ==============================================
// the order of these parts are very important
// parts run in order of listing

// get instance of the express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
    //do logging
    console.log('Request happening');
    next(); // make sure we go to next routes and don't stop here
});


// Main Routes
// ==========================================

router.route('/member')

    // POST --------------------------
    // post (overwrite here) new info
    .post(function(req, res) {

        // create new instance of the Member model
        var mem = new Member();
        mem.fullname = req.body.fullname,
            mem.classyear = req.body.classyear,
            mem.email = req.body.email,
            mem.phone = req.body.phone,
            mem.city = req.body.city;

        // save member and check for errors
        mem.save(function(err){
            if(err) {
                console.log("ERROR writing new member: " + err);
                res.send("ERROR !");
            }
            // send back the written member info
            res.json(mem);
            console.log("new member POST written: " + mem);
        });
    })


    // GET --------------------------
    // get current info
    .get(function(req, res){
        // this function will return all the members
        Member.find(function(err,members) {
            if(err) {
                console.log("member GET read error: " + err);
                res.send(err);
            }
            res.json(users);
        });

    });

// REGISTER OUR ROUTES --------------------------
// all routes will be prefixed with /
app.use('/', router);



// START THE SERVER
// ===============================================
app.listen(port, function(){
    console.log('ready on port ' + port);
});


