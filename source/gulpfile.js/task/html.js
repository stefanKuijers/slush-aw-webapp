/*
    combine and minify assets linked in html
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        var stream = gulp.src( config.client.path.indexHtml )
            .pipe( plugin.useref() )
            .pipe( plugin.if( '*.js', plugin.annotate() ) )
            .pipe( plugin.if( '*.js', plugin.uglify() ) )
            .pipe( plugin.if( '*.css', plugin.minifyCss() ) );

        if ( config.component.build.production ) {
            stream.pipe( gulp.dest( config.client.dir.build ) );
        }

        // return stream;
    };
};