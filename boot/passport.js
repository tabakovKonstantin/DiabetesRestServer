/**
 * Created by Константин on 01.04.2015.
 */
var config = require("nconf");
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = function() {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'passwd'
        },
        function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                //if (!user.validPassword(password)) { //:TODO добавмит метод к схеме исвалид
                if (!(password === user.password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err,user){
            err
                ? done(err)
                : done(null,user);
        });
    });

};