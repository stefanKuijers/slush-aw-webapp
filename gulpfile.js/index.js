'use strict';

/*
    GulpFile
*//*
    Tasks to make the development of the generator more easy.

    $ gulp
    Puts the files in the generators directory and renames them when needed

    $ gulp publish --version <patch|minor|major>  
    Bumps the version and publishes to NPM

*/
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')({ camelize: true });
plugins.exec    = require('child_process').exec;
plugins.del     = require('del');

var config      = require('./config.js')(gulp, plugins);


/*
    Tasks
*/
function getTask(task) {
    console.log( config.dir.task + task );
    return require( config.dir.task + task )(gulp, plugins, config);
}

/* building tasks */
gulp.task('clean',         getTask('clean'));
gulp.task('copy',          getTask('copy'));
gulp.task('templating',    getTask('templating'));
// gulp.task('rename',        getTask('rename'));
// gulp.task('default',[
//     'clean',
//     'copy',
//     'rename'
// ]);


// gulp.task(
//     'publish', 
//     [ 'default' ], 
//     getTask('publish')
// );
