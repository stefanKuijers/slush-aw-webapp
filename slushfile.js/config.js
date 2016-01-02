'use strict';


module.exports = function( gulp, plugins ) {
    return function( rootDir ) {
        var root = rootDir.replace('slushfile.js', '') + 'templates/default/';

        var config = {
            defaults: require('./defaults')( gulp, plugins )(),
            allSourceFilesGlob: root + '/**/*',
            gulpfiles: root + '/gulpfile.js/**/*',
            destinationGlob: './',
            error: {
                params: {
                    title:    'Gulp',
                    message:  '<%= error.message %>',
                    sound: false
                },
                handler: function(err) {
                    console.log( err );

                    if ( this.emit !== undefined ) this.emit('end');
                }
            }
        };

        return config;
    };
};