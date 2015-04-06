/**
 * Created by Константин on 01.04.2015.
 */

var requireTree = require('require-tree');
var controllers = requireTree('../controllers');

module.exports = function (app) {
    app.post('/login', controllers.login);
    app.post('/register', controllers.register);
    app.post('/logout', controllers.logout);
}