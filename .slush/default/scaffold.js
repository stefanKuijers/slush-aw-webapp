'use strict';

module.exports = function(  gulp, plugins, config ) {

    return function( generator, done ) {

       
        var globs = require('./getSourceGlob')( config, generator );
        console.log( globs.scaffold );
        console.log( globs.workingDir );
        
        // copy over the gulp files
        gulp.src( globs.gulp ).pipe( gulp.dest('./.gulp/') );

        // copy selected setup and create working dir from it
        gulp.src( globs.workingDir )
            .pipe( plugins.template( generator ) )
            .pipe( gulp.dest( config.dir.destSource ) )
        ;

        // get all the files from the templates/default/
        // template them, rename hidden files
        // check or we are overwriting any files and write them if we can
        // once written we send the end event and after install all dependencies
        return gulp.src( globs.scaffold )
            .pipe( plugins.template( generator ) )
            .pipe( plugins.rename( function (file) {
                if (file.basename.substring(0,2) === '__') {
                    file.basename = '.' + file.basename.slice(2);
                }
            } ) )
            .pipe( gulp.dest('./') )
            .on( 'end', function () {
                console.log('\nReady with scaffolding. \nNow running $ npm install && bower install\nIf it fails run it manually.\n\n\n\n');
                done();
            } )
            .pipe( plugins.install() )
        ;
    };
};