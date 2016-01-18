'use strict';

module.exports = function( gulp, plugin, config ) {
    
    return function () {

        gulp.src( config.packageJson )
            .pipe( gulp.dest( config.destinationGlob ) );

        plugin.glob( config.destinationGlob + 'karma.conf.js' , {}, function( err, files ) {
            if ( files.length === 0 ) {
                gulp.src( config.sourceKarmaConfig )
                    .pipe( gulp.dest( config.destinationGlob ) );
            }
        } );
        
        return gulp.src( config.gulpfiles )
            .pipe( gulp.dest( config.destinationGlob + 'gulpfile.js/' ) )
            .on( 'end', function () {
                console.log('\nUpdate Ready. You might need to run:\n$ npm i && bower i\n\n\n');
            } );

    };
};