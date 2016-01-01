/*
    copy all other files to dist and src files over
*/
module.exports = function (gulp, plugin, config) {


    return function () {

    	// copy css file
    	// gulp.src( config.client.path.css )
     //        .pipe( gulp.dest( config.client.dir.buildDist ) );

        // copy bower file
        gulp.src( config.client.path.bower )
            .pipe( gulp.dest( config.client.dir.build ) );

        // copy font files
        gulp.src( plugin.mainBowerFiles( {
            filter: '**/*.{eot,svg,ttf,woff,woff2}'
        } ).concat( config.client.glob.fonts ) )
            .pipe( plugin.plumber({ errorHandler: config.error.handler }) )
            .pipe( gulp.dest( config.client.dir.buildDist + '/asset/fonts' ) );

        // copy dev index.html if not in production
        // if ( !config.component.build.production ) {
        //     gulp.src( config.client.path.indexHtml )
        //         .pipe( gulp.dest( config.client.dir.build ) );
        // }

        // copy src files
        return gulp.src( config.client.glob.src )
            .pipe( gulp.dest( config.client.dir.buildSrc ) );
       
    };
};