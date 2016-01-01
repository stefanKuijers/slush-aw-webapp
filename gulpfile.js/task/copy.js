/*
    copy all other files to dist and src files over
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // copy gulpfiles
        gulp.src( config.source.glob.gulpFiles )
            .pipe( gulp.dest( config.destination.dir.gulpfile ) );

        // get package.json
        gulp.src( config.source.path.package )
            .pipe( gulp.dest( config.destination.dir.templates ) );

        // gulp.src( config.source.glob.gulpFiles )
        //     .pipe( gulp.dest( config.destination.dir.gulpfile ) );
       
    };
};