'use strict';

/*
	Dependencies
*/
var gulp 			= require('gulp');
var plugins 		= require('gulp-load-plugins')( { camelize: true } );

plugins._ 			= require('underscore.string');
plugins.inquirer 	= require('inquirer');
plugins.path 		= require('path');
plugins.fs			= require('fs');
plugins.del			= require('del');

var config 			= require('./.slush/config')( gulp, plugins )( __dirname );



/*
	Tasks
*/
function getGenerator( generator ) {
    return require( config.dir.tasks + generator + '/' )(gulp, plugins, config);
}

gulp.task('default', 	getGenerator('default') );
gulp.task('gulp', 		getGenerator('gulp') );
gulp.task('update', 	getGenerator('update') );
gulp.task('component', 	getGenerator('component') );