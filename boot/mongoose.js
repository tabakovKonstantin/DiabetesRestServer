/**
 * Created by Константин on 01.04.2015.
 */
var mongoose = require('mongoose');
var config = require("nconf");
var requireTree    = require('require-tree');
var models         = requireTree('../models');

mongoose.connect(config.get("mongoose:db"));
//var UserSchema = new mongoose.Schema({
//    username: {
//        type: String,
//        unique: true,
//        required: true
//    },
//    password: {
//        type: String,
//        required: true
//    }
//});
//
//mongoose.model('user', UserSchema);