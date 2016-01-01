
/*
    gulp index
*/ 'use strict';

var gulp = require('gulp');

var plugin = {
    cache:       require('gulp-angular-templatecache'),
    browserSync: require('browser-sync').create(),
    exec:        require('child_process').exec,
    pngquant:    require('imagemin-pngquant'),
    annotate:    require('gulp-ng-annotate'),
    minifyCss:   require('gulp-minify-css'),
    sync:        require('gulp-sync')(gulp),
    wiredep:     require('wiredep').stream,
    imagemin:    require('gulp-imagemin'),
    plumber:     require('gulp-plumber'),
    replace:     require('gulp-replace'),
    useref:      require('gulp-useref'),
    uglify:      require('gulp-uglify'),
    notify:      require('gulp-notify'),
    rename:      require('gulp-rename'),
    inject:      require('gulp-inject'),
    concat:      require('gulp-concat'),
    stream:      require('add-stream'),
    watch:       require('gulp-watch'),
    sass:        require('gulp-sass'),
    if:          require('gulp-if'),
    path:        require('path'),
    del:         require('del')
};

var gulpsync = require('gulp-sync')(gulp);
var config = require('./config.js')( gulp, plugin );


gulp.task( 'inject',  config.task.inject  );
gulp.task( 'wiredep', config.task.wiredep );
gulp.task( 'sass',    config.task.sass    );

gulp.task( 'serve', ['inject', 'sass'], config.task.serve );
gulp.task( 'default', gulpsync.sync(['wiredep', 'serve']), config.task.watch );



gulp.task( 'html',           config.task.html );
gulp.task( 'copy',           config.task.copy );
gulp.task( 'serveBuild',     config.task.serveBuild );
gulp.task( 'rename',         config.task.rename );
gulp.task( 'replace',        config.task.replace );
gulp.task( 'image',          config.task.image );
gulp.task( 'cacheTemplate',  config.task.cacheTemplate );
gulp.task( 'clean',          config.task.clean );
gulp.task( 'prepareBuild',   ['clean','inject', 'sass'] );
gulp.task( 'setupBuild',     ['image', 'html', 'copy'] );
gulp.task( 'renameBuild',    ['rename', 'replace'] );

gulp.task( 'build', gulpsync.sync(['wiredep', 'prepareBuild', 'setupBuild', 'renameBuild', 'cacheTemplate', 'serveBuild']) );
