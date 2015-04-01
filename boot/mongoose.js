/**
 * Created by Константин on 01.04.2015.
 */
var mongoose = require('mongoose');
var config = require("nconf");

//mongoose.connect(config.get(mongoose));
mongoose.connect(config.get("mongoose:db"));