/**
 * Created by Константин on 01.04.2015.
 */
var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = function(req, res, next) {
    var user = new User({ username: req.body.email, password: req.body.password});
    console.log(req.body.email, req.body.password)
    //User.findOne({username: "testemail"}, function(err, test){
    //    console.log(test);
    //});
    user.save(function(err) {
        return err
            ? next(err)
            : req.login(user, function(err) {
            return err
                ? next(err)
                //: res.redirect('/private');
                : res.end("ОК зарегестрировался");
        });
    });

}