/**
 * Created by Константин on 01.04.2015.
 */
var config = require("nconf");
//var bodyParser = require("body-parser")
var express = require('express');
var passport = require('passport');

module.exports = function (app) {
    app.set('port', config.get("express:port") || 3000);

    //json
    //
    //app.use(bodyParser());
    //app.use(bodyParser.urlencoded({ extended: false }));
    //app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded());

    //cokies
    //app.use(express.cookieParser());
    //app.use(express.session(config.get("session")));

    //passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(app.router);

}