/*
    replacing old references
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // setTimeout( replace, 1200 );
        setTimeout( replace, 0 );

    	function replace() {

            if ( config.build.production ) {
                // fix asset file paths
                
                gulp.src( config.build.pathCorrection.assetPath.glob )
                    .pipe( plugin.replace(
                        config.build.pathCorrection.assetPath.search, 
                        config.build.pathCorrection.assetPath.replace
                        // if we are not serving from root
                        // '/asset/', ( config.component.build.root || '' ) + 'dist/asset/'
                    ) )
                    .pipe( gulp.dest( config.dir.build.root ) )
                ;
            }
    	}
    };
};