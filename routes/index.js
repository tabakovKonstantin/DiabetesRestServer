/**
 * Created by Константин on 01.04.2015.
 */
module.exports = function (app) {
    require("./evaluate")(app);
    require("./auth")(app);
};