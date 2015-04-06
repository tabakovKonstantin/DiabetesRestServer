/**
 * Created by Константин on 01.04.2015.
 */
var request = require('sync-request');
var config = require("nconf");
var querystring = require('querystring');

module.exports = function(req, res, next) {
    console.log('Принято от клиента для расчета: ', req.query, req.body, req.isAuthenticated());
    var options = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    };
    var resn = request('POST', config.get("RApache:url"), options);
    console.log("принято от r "+ (resn.getBody()) + " sfgh " +JSON.stringify(req.body));
    res.end((resn.getBody()));

    /*setTimeout(function() {
        res.end(JSON.stringify(req.body()));
        }, 3);*/
}