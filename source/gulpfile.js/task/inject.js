/*
    Injecting all files so we don't have to ref them
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        var sourcesSCSS = gulp.src( [ 
            config.client.glob.sass
        ], { read: false } ); 

        gulp.src( config.client.path.indexScss )
            .pipe( plugin.inject( 
                sourcesSCSS, {
                    ignorePath: 'src', 
                    addRootSlash: false
                } ) )
            .pipe( gulp.dest( config.client.dir.src ) )
        ;

        var sourcesJS = gulp.src( [
            './src/app/**/*.module.js',
            './src/app/**/*.!(module).js',
            './src/app/**/*.js'
        ], { read: false } ); 

        return gulp.src( config.client.path.indexHtml )
            .pipe( plugin.inject( 
                sourcesJS, {
                    ignorePath: 'src', 
                    addRootSlash: false
                } ) )
            .pipe( gulp.dest( config.client.dir.src ) )
        ;
    };
};