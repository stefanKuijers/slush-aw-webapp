/*
    caching the templates
*/
module.exports = function (gulp, plugin, config) {


    return function () {
    	function getTemplateCache() {
	        return gulp.src( config.glob.template )
	            .pipe( plugin.cache( config.templatecache.file, {
			    	transformUrl: function(url) {
					    return config.templatecache.pathCorrection + url;
					},
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
			    } ) );
    	}

    	setTimeout( cacheTemplate, 0 );

    	function cacheTemplate() {
            if ( config.component.build.production ) {
    	    	return gulp.src( config.dir.buildDist + '/' + config.component.name + '.min.js' )
    	    		// add the templatecache to the stream
    			    .pipe( plugin.stream.obj( getTemplateCache( ) ) )

                // Wait... Fixing it twice?    
    			    // fix asset url
    			    .pipe( plugin.replace(
                        'src=\\"/asset/', 'src=\\"' + ( config.component.build.root || '' ) + 'dist/asset/'
                    ) )
                    .pipe( plugin.replace(
                        'asset/image/', 'dist/asset/image/'
                    ) )
                // should figure this ^ out

    			    // concatenate the whole thing
    			    .pipe( plugin.concat( config.component.name + '.min.js' ) )
    			    // write it to the build
    			    .pipe( gulp.dest( config.dir.buildDist ) );
            } else {
                return true;
            }
    	}
    };
};