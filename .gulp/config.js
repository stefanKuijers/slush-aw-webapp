'use strict';

module.exports = function( gulp, plugins ) {
    var setupDestFolder = '';
    var allowedSetups = ['barebone', 'minimal', 'sitebuild'];
    var allowedFrameworks = ['bootstrap', 'semanticUI', 'foundation', 'undefined'];
    if ( 
        plugins.args.setup && (allowedSetups.indexOf( plugins.args.setup ) === -1) ||
        plugins.args.framework && (allowedFrameworks.indexOf( plugins.args.framework ) === -1)
    ) {
        setupDestFolder = 'source/';
    } else {
        setupDestFolder = plugins.args.setup;
        if ( plugins.args.framework ) {
            setupDestFolder += '-' + plugins.args.framework;
        }
        setupDestFolder += '/';
    }

    var config = {
        dir: {
            gulpTasks: '.gulp/task/',
            gulpFiles: '.gulp/',
            generatorSource: './source/',
            generatorDest: './templates/',
            defaultDest: 'default/',
            source: 'source/',
            setupDest: setupDestFolder,
            template: setupDestFolder + 'template/',
            sass: setupDestFolder + 'asset/sass/',
            js: setupDestFolder + 'asset/js/'
        },

        path: {
            gulpFiles: '.gulp/**/*',
            gulpFile: 'Gulpfile.js',
            gitignore: '.gitignore',
            pageOpen: 'source/template/pageOpen.php',
            editorConfig: '.editorconfig',
            packageJson: 'package.json',
            php: 'source/**/*.php',
            sassComponents: 'source/asset/sass/**/_*.scss',
            mainSassFile: 'source/asset/sass/style.sitebuild.scss',
            js: 'source/asset/js/**/*.js'
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