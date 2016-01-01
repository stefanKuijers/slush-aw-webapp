/*
    copy all other files to dist and src files over
*/
module.exports = function (gulp, plugin, config) {


    return function () {

    	// copy css file
    	gulp.src( config.client.path.css )
            .pipe( gulp.dest( config.client.dir.buildDist ) );

        // copy bower file
    	gulp.src( config.client.path.bower )
            .pipe( gulp.dest( config.client.dir.build ) );

        // copy dev index.html if not in production
        if ( !config.component.build.production ) {
            gulp.src( config.client.path.indexHtml )
                .pipe( gulp.dest( config.client.dir.build ) );
        }

        // copy src files
        return gulp.src( config.client.glob.src )
            .pipe( gulp.dest( config.client.dir.buildSrc ) );
       
    };
};