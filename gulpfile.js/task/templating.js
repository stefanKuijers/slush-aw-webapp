/*
    Replacing and clearing out stuff
*/
module.exports = function (gulp, plugin, config) {

    return function () {

        // get all the files from the src folder which we want to copy
        return gulp.src( config.source.glob.srcFiles )
            // clear out all the clears
            .pipe( plugin.replace( 
                /<!--clear-->[\S\s]+<!--clearEnd-->/, '' 
            ) )
            .pipe( plugin.replace( 
                /\/\/clear[\S\s]+\/\/clearEnd/, '' 
            ) )
            // clear out bowers
            .pipe( plugin.replace( 
                /<!-- bower:css -->((?!<!-- endbower -->)[\s\S])*<!-- endbower -->/, 
                '<!-- bower:css -->\n        <!-- endbower -->' 
            ) )
            .pipe( plugin.replace( 
                /<!-- bower:js -->((?!<!-- endbower -->)[\s\S])*<!-- endbower -->/, 
                '<!-- bower:js -->\n        <!-- endbower -->' 
            ) )
            .pipe( plugin.replace( 
                /\/\/ bower:scss((?!\/\/ endbower)[\s\S])*\/\/ endbower/, 
                '\/\/ bower:scss\n\/\/ endbower' 
            ) )
            // clear out injects
            .pipe( plugin.replace( 
                /<!-- inject:js -->((?!<!-- endinject -->)[\s\S])*<!-- endinject -->/, 
                '<!-- inject:js -->\n        <!-- endinject -->' 
            ) )
            .pipe( plugin.replace( 
                /\/\* inject:scss \*\/((?!\/\* endinject \*\/)[\s\S])*\/\* endinject \*\//, 
                '/* inject:scss */\n/* endinject */' 
            ) )

            // change component name

            // change class

            .pipe( gulp.dest( config.destination.dir.src ) );
    };
};