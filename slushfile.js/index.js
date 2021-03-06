/* global require, __dirname */
'use strict';

/*
    Dependencies
*/
var gulp            = require('gulp');
var plugin          = require('gulp-load-plugins')( { camelize: true } );

plugin._            = require('underscore.string');
plugin.inquirer     = require('inquirer');
plugin.path         = require('path');
plugin.fs           = require('fs');
plugin.del          = require('del');
plugin.mkdirp       = require('mkdirp');
plugin.glob         = require('glob');

var config          = require('./config.js')( gulp, plugin )( __dirname );



/*
    Tasks
*/
gulp.task(
    'default',    
    require( './default' )(gulp, plugin, config) 
);

gulp.task(
    'update',    
    require( './update' )(gulp, plugin, config) 
);