'use strict';

module.exports = function( gulp, plugins ) {
    var config = {
        dir: {
            task: './task/'
        },
        source: {
            glob: {
                gulpFiles: './source/gulpfile.js/**/*'
            },
            path: {
                package: './source/package.json',
                editorconfig: './source/.editorconfig',
                gitignore: './source/.gitignore',
                bower: './source/bower.json',
                readme: './source/README.md',
            }
        },
        destination: {
            dir: {
                gulpfile: './templates/default/gulpfile.js/',
                templates: './templates/default/'
            },
            glob: {
                templates: './templates/default/**/*',
                gulpFiles: './templates/default/gulpfile.js/**/*'
            }
        }
    };

    return config;
};