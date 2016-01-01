'use strict';

/*
    Build: Copy GitIgnore
*/
module.exports = function (gulp, plugins, config) {
    return function() {
        return gulp.src( config.dir.generatorSource + config.path.gitignore )
            .pipe( plugins.rename('__gitignore') )
            .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest ) )
        ;
    };
};