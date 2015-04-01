/**
 * Created by Константин on 01.04.2015.
 */
module.exports = function (app) {
    require("./express")(app);
    require("./passport");
    require("./mongoose");
};