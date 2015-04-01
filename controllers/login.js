/**
 * Created by Константин on 01.04.2015.
 */
var passport = require('passport');
module.exports = function(req, res, next) {
    console.log(req.query, req.body);
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.end("Bad user"); }
        //if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            //return res.redirect('/users/' + user.username);
            return res.end("OK залогинился");
        });
    })(req, res, next);


}