/*
    rename build files
*/
module.exports = function (gulp, plugin, config) {


    return function () {
        setTimeout( rename, 1000 );

        function rename() {
            console.log( 'rename' );
            setTimeout( function() {
                plugin.del( [
                   config.client.dir.buildDist + '/!('+ config.component.name +').*'
                ] );
            }, 300 );

            var explodedName;
            return gulp.src( config.client.glob.buildDist + '/*.{js,css}' )
                .pipe( plugin.rename( function( filepath ) {
                    if ( filepath.basename ) {
                        explodedName = filepath.basename.split('.');
                        explodedName.shift();
                        explodedName.unshift( config.component.name );
                        
                        filepath.basename = explodedName.join( '.' );
                    }
                } ) )
                .pipe( gulp.dest( config.client.dir.buildDist ) );
        }

       
    };
};