/*
    replacing old references
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // setTimeout( replace, 1200 );
        setTimeout( replace, 0 );

    	function replace() {
            console.log( 'replace' );

            // fix asset file paths
            gulp.src( [
                config.client.dir.build + '/**/*.{css,html}'
            ] )
                .pipe( plugin.replace(
                    '/asset/', '/dist/asset/'
                    // '/asset/', ( config.component.build.root || '' ) + 'dist/asset/'
                ) )
                .pipe( gulp.dest( config.client.dir.build + '/' ) )
            ;

            // if ( config.component.build.production ) {
    	       //  return gulp.src( config.client.dir.build + '/index.html' )
    	       //      .pipe( plugin.replace(
    	       //      	'component.min.', config.component.name + '.min.'
    	       //      ) )
    	       //      .pipe( gulp.dest( config.client.dir.build ) );
                
            // } else {
            //     gulp.src( config.client.dir.buildSrc + '/app/**/*.directive.js' )
            //         .pipe( plugin.replace(
            //             'templateUrl: \'app/', 'templateUrl: \'src/app/'
            //         ) )
            //         .pipe( gulp.dest( config.client.dir.buildSrc + '/app' ) );

            //      return gulp.src( config.client.dir.build + '/index.html' )
            //         .pipe( plugin.replace(
            //             'src="app/', 'src="src/app/'
            //         ) )
            //         .pipe( plugin.replace(
            //             'href="css/style', 'href="' + ( config.component.build.root || '' ) + 'dist/' + config.component.name + ''
            //         ) )
            //         .pipe( gulp.dest( config.client.dir.build ) );
            // }

    	}
    	
       
    };
};