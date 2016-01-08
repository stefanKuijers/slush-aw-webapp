/*
    replacing old references
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // setTimeout( replace, 1200 );
        setTimeout( replace, 0 );

    	function replace() {

            if ( config.component.build.production ) {
                // fix asset file paths
                gulp.src( [
                    config.dir.build + '/**/*.{css,html}'
                ] )
                    .pipe( plugin.replace(
                        '/asset/', '/dist/asset/'
                        // '/asset/', ( config.component.build.root || '' ) + 'dist/asset/'
                    ) )
                    .pipe( gulp.dest( config.dir.build + '/' ) )
                ;
            }
    	}
    };
};