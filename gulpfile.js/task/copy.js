/*
    copy all other files to dist and src files over
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // copy gulpfiles
        gulp.src( config.source.glob.gulpFiles )
            .pipe( gulp.dest( config.destination.dir.gulpfile ) );

        // get package.json and the readme
        gulp.src( [
            config.source.path.package,
            config.source.path.readme,
        ] )
            .pipe( gulp.dest( config.destination.dir.templates ) );

        // copy source/src files
        gulp.src( [
            config.source.path.karmaConfig
        ] )
            .pipe( gulp.dest( config.destination.dir.templates ) );
        
    };
};