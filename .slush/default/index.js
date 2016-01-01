'use strict';

module.exports = function( gulp, plugins, config ) {
    
    return function (done) {
        var generator = {};

        function askSetup() {
            if ( generator.answers.framework === 'Bootstrap' ) { 
                generator.prompts.secondRound[0].message += 'Sitebuild - an example build of a very basic sitebuild project\n\n';
                generator.prompts.secondRound[0].choices.push( 'Sitebuild' );
            }

            plugins.inquirer.prompt(
                generator.prompts.secondRound,
                function( answers ) {
                    generator.setup = answers.setup;

                    generator.scaffold( generator, done );
                }
            );
        }

        function parseFirstRoundAnsers( answers ) {
            generator.answers = answers;
            generator.appNameSlug = plugins._.slugify(answers.appName);
            generator.bowerContent = generator.bowerContent( answers );

            if ( generator.answers.framework === 'No framework' ) {
                generator.scaffold( generator, done );
            } else {
                askSetup();
            }
        }

         // check or this directory is empty or not
        require('child_process').exec( 'ls', function ( err, stdout ) {

            // only run the scaffolding if the dir is empty or only contains node_modules
            if ( stdout.length === 0 || stdout.trim() === 'node_modules') {
                generator.prompts = require('./prompts')( config );
                generator.bowerContent = require('./bowerContent')();
                generator.scaffold = require('./scaffold')( gulp, plugins, config );
                generator.setup = 'barebone';
                
                return plugins.inquirer.prompt(
                    generator.prompts.firstRound,
                    parseFirstRoundAnsers
                );

            } else {
                console.log('\n\nDirectory not empty.\nThe generator can only be run in an empty directory or a dir that has an \'node_modules\' folder as only sub directory\n\n');
                done();
            }
        } );
    };
};