'use strict';

/*
    Build: build PackageJson
*/
module.exports = function (gulp, plugins, config) {
    return function() {
        return gulp.src( config.dir.generatorSource + config.path.packageJson )
            .pipe( plugins.replace('generator-source-files', '<%= appNameSlug %>') )
            .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest ) )
        ;
    };
};