/*
    Sass
*/
module.exports = function (gulp, plugin, config) {
    return function () {

        // grab this file (as it holds the imports to all other .scss files 
        // we don't have to link to any other files)
        return gulp.src( config.client.path.indexScss )
            // .pipe(plugin.watch(config.client.glob.sass))
            // make sure that if we get error (invalid sass) that we don't break out of the server
            .pipe( plugin.plumber( { errorHandler: config.error.handler } ) )
            // compile it to css and set some settings for error handling
            .pipe( plugin.sass() )
            // rename the file to 'style'
            .pipe( plugin.rename( { basename: 'style' } ) )
            // write what you have in the following directory
            .pipe( gulp.dest( config.client.dir.css ) )
            // let browserSync stream this file content to all connected browsers
            .pipe( plugin.browserSync.stream() );
    };
};