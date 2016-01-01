'use strict';

/*
    Build: Build js files
*/
module.exports = function (gulp, plugins, config) {

    return function() {
        return gulp.src( config.dir.generatorSource + config.path.js )
            // .pipe( plugins.replace(
            //     '/* generator:js if-jquery */',
            //     '<% if ( dependencies.framework !== \'Pure CSS\' && dependencies.framework !== \'No framework\' && !dependencies.jQuery ) { %>'
            // ) )
            // .pipe( plugins.replace(
            //     '\n/* generator:js end-if-jquery */',
            //     '<% } %>'
            // ) )
            .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest + config.dir.js ) )
        ;
    };
};
