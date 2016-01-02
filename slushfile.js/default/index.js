'use strict';

module.exports = function( gulp, plugin, config ) {
    
    return function (done) {
        var generator = {};

        function scaffold( templateVars ) {

            // create bower and asset folder
            plugin.mkdirp('bower_components');
            plugin.mkdirp('src/asset/fonts');
            plugin.mkdirp('src/asset/image');

            // get all gulpfiles
            gulp.src( config.gulpfiles )
                .pipe( gulp.dest( config.destinationGlob + 'gulpfile.js/' ) );

            // // get all the templates from the templates/default/
            // // template them, rename hidden files
            // // once written we send the end event and after install all dependencies
            return gulp.src( [
                '!' + config.gulpfiles,
                config.allSourceFilesGlob
            ] )
                .pipe( plugin.template( templateVars ) )
                .pipe( plugin.rename( function (file) {
                    if (file.basename.substring(0,2) === '__') {
                        file.basename = '.' + file.basename.slice(2);
                    }
                } ) )
                .pipe( gulp.dest( config.destinationGlob ) )
                .on( 'end', function () {
                    console.log('\nReady with scaffolding. \nNow running $ npm install && bower install\nIf it fails run it manually.\n\n\n\n');
                    done();
                } )
                .pipe( plugin.install() )
            ;
        }

        function parseAnswers( answers ) {
            scaffold( {
                appNameSlug: plugin._.slugify(answers.appName),
                mainComponentName: answers.mainComponentName
            } );
        }
            
        // bootstrap init    
        return plugin.inquirer.prompt( [
                {
                    name: 'appName',
                    message: 'What is the name of the project?',
                    default: config.defaults.appName
                },
                {
                    name: 'mainComponentName',
                    message: 'What is the name of the main component?',
                    default: 'aw.webapp'
                }
            ],
            parseAnswers
        );
    };
};