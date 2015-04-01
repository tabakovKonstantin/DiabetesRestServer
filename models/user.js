/**
 * Created by Константин on 01.04.2015.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('user', UserSchema);