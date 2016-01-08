/*
    minify images and move them to dist
*/
module.exports = function (gulp, plugin, config) {

    return function () {

        if ( config.component.build.production ) {
            return gulp.src( config.glob.image )
            	.pipe( plugin.imagemin( {
    		            progressive: true,
    		            svgoPlugins: [ {removeViewBox: false} ],
    		            use: [ plugin.pngquant() ]
    		        } ) )
                .pipe( gulp.dest( config.dir.buildDist + '/asset/image' ) );
        } else {
            return true;
        }

    };
};