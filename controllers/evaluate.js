/**
 * Created by Константин on 01.04.2015.
 */
module.exports = function(req, res, next) {
    console.log('Принято от клиента: ', req.query, req.body);
    //res.end();
    setTimeout(function() {
        res.end(JSON.stringify(req.body));
        }, 3);
}