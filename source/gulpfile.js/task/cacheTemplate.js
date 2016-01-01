/*
    caching the templates
*/
module.exports = function (gulp, plugin, config) {


    return function () {
    	function getTemplateCache() {
	        return gulp.src( config.client.glob.template )
	            .pipe( plugin.cache( 'templates.js', {
			    	transformUrl: function(url) {
					    return 'app/' + url;
					}
			    } ) );
    	}

    	setTimeout( cacheTemplate, 1700 );

    	function cacheTemplate() {
    		console.log( 'template cache' );
	    	return gulp.src( config.client.dir.buildDist + '/' + config.component.name + '.min.js' )
	    		// add the templatecache to the stream
			    .pipe( plugin.stream.obj( getTemplateCache( ) ) )
			    // fix asset url
			    .pipe( plugin.replace(
                    'src=\\"/asset/', 'src=\\"' + ( config.component.build.root || '' ) + 'dist/asset/'
                ) )
			    // concatenate the whole thing
			    .pipe( plugin.concat( config.component.name + '.min.js' ) )
			    // write it to the build
			    .pipe( gulp.dest( config.client.dir.buildDist ) );
    	}
       
    };
};