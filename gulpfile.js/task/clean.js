/*
    clean out 
*/
module.exports = function (gulp, plugin, config) {

    return function () {
        return plugin.del( config.destination.glob.gulpFiles );
    };
};