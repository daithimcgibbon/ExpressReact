var express = require('express');
var router = express.Router();
var ldapAuth = require('ldapjs')

router.post('/', function(req, res, next) {

    console.log('username=' + req.body.username)
    console.log('password=' + req.body.password)

    if ((!req.body.username) || (!req.body.password)) {

    } else {
        var client = ldapAuth.createClient({
            url: 'LDAP://gldc-ad-gc-vip.igslb.allstate.com:3268'
        })
        client.bind(req.body.username, req.body.password, function(err) {
            if (err) {
                console.log('FAILURE: ' + err)
            } else {
                console.log('SUCCESS');
            }
        })
    }

});

module.exports = router;
