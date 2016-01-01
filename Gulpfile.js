'use strict';

/*
    GulpFile
*//*
    Tasks to make the development of the generator easier.

    $ gulp build
    Puts the files in the generators directory and renames them when needed

    $ gulp publish --version <patch|minor|major>  
    Bumps the version and publishes to NPM

*/
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')({ camelize: true });
plugins.exec    = require('child_process').exec;
plugins.args    = require('yargs').argv;
plugins.del     = require('del');

var config      = require('./.gulp/config')(gulp, plugins);


/*
    Tasks
*/
function getTask(task) {
    return require( './' + config.dir.gulpTasks + task )(gulp, plugins, config);
}

/* building tasks */
gulp.task('emptyDestFolder',        getTask('emptyDestFolder'));
gulp.task('copyGulpFiles',          ['emptyDestFolder'], getTask('copyGulpFiles'));
gulp.task('copyGitIgnore',          ['emptyDestFolder'], getTask('copyGitIgnore'));
gulp.task('copyEditorConfig',       ['emptyDestFolder'], getTask('copyEditorConfig'));
gulp.task('buildPackageJson',       ['emptyDestFolder'], getTask('buildPackageJson'));
gulp.task('copyPhp',                ['emptyDestFolder'], getTask('copyPhp'));
gulp.task('buildPageOpen',          ['emptyDestFolder'], getTask('buildPageOpen'));
gulp.task('copySassComponents',     ['emptyDestFolder'], getTask('copySassComponents'));
gulp.task('buildMainSassFile',      ['emptyDestFolder'], getTask('buildMainSassFile'));
gulp.task('buildJs',                ['emptyDestFolder'], getTask('buildJs'));

// example: $ gulp build --setup minimal --framework bootstrap
gulp.task('build', [ 
    'emptyDestFolder',
    'copyPhp',
    'copyGulpFiles', 
    'copyGitIgnore',
    'copyEditorConfig',
    'copySassComponents',
    'buildPackageJson',
    'buildMainSassFile',
    'buildJs',
    'buildPageOpen'
] );

/* publishing tasks */
gulp.task('publish', getTask('publish'));



/* end Tasks */