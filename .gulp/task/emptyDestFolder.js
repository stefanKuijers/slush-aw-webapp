'use strict';

module.exports = function( gulp, plugins, config ) {
    
    return function () {
        return plugins.del( [ config.dir.generatorDest + config.dir.defaultDest + config.dir.setupDest ] );
    };
};