var express = require('express');
var router = express.Router();
var ldapAuth = require('ldapjs')

router.post('/', function(req, res, next) {

    console.log('username=' + req.body.username)
    console.log('password=' + req.body.password)

    if ((!req.body.username) || (!req.body.password)) {

    } else {

    }

});

module.exports = router;
