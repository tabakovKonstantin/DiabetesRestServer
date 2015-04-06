/**
 * Created by Константин on 01.04.2015.
 */
var passport = require('passport');

module.exports = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        console.log('Принято от клиента для аутификации:' , req.query, req.body);
        if (err) { return next(err); }
        if (!user) {
            res.statusCode = 401;
            //return res.end("Bad user"); }
            return res.end("bad login"); }
        //if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) {
                return next(err); }
            //return res.redirect('/users/' + user.username);

            return res.end("Good login");
            //return res.statusCode = 401;
        });
    })(req, res, next);
    //passport.authenticate('local'),
    //    function(err, user, info) {
    //
    //        return err
    //            ? next(err)
    //            : user
    //            ? req.logIn(user, function(err) {
    //            return err
    //                ? next(err)
    //                : res.redirect('/private');
    //        })
    //            : res.redirect('/fail');
    //    }
    //)(req, res, next);


};