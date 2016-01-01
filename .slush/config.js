'use strict';


module.exports = function( gulp, plugins ) {
    return function( rootDir ) {
        var root = rootDir + '/';
        var generatorRootFolder = root + 'templates/';
        var destination = './';


        var config = {
            defaults: require('./defaults')( gulp, plugins )(),
            dir: {
                root: root,
                tasks: destination + '.slush/',
                generatorRootFolder: generatorRootFolder,
                generatorDefault: generatorRootFolder + 'default/',
                generatorComponent: generatorRootFolder + 'component/',
                destination: destination,
                destSource: destination + 'source/',
                destTemplate: destination + 'source/template/',
                destJs: destination + 'source/asset/js/app/',
                destSass: destination + 'source/asset/sass/component/'
            },
            path: {
                destMainSassFile: destination + 'source/asset/sass/style.sitebuild.scss',
                scriptRefenrence: destination + 'source/template/_close.php'
            },
            error: {
                params: {
                    title:    'Gulp',
                    message:  '<%= error.message %>',
                    sound: false
                },
                handler: function(err) {
                    plugins.notify.onError( config.error.params )(err);

                    if ( this.emit !== undefined ) this.emit('end');
                }
            },
            eol: '\r\n'
        };

        return config;
    };
};