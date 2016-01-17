/*
    Create documention based on the code
*/
module.exports = function (gulp, plugin, config) {


    return function () {

        // gulp.src([
        //     '!./src/**/*.spec.js', 
        //     '!./src/**/*.module.js', 
        //     '!./src/**/*.route.js', 
        //     './src/**/*.js', 
        //     './README.md'
        // ], {base: '.'})
        //     .pipe(plugin.doxx({
        //         title: 'Generated Docs',
        //         urlPrefix: '/docs'
        //     }))
        //     .pipe(gulp.dest('./docs'));

        return gulp.src([
            '!./src/**/*.spec.js', 
            '!./src/**/*.module.js', 
            '!./src/**/*.route.js', 
            './src/**/*.js'
        ])
            .pipe(plugin.markdox())
            .pipe(plugin.concat('README.md'))
            .pipe(gulp.dest('./markdox'));

        // return plugin.browserSync.init( {
        //     notify: false,
        //     online: false,
        //     server: {
        //         baseDir: './',
        //         index: 'docs/index.html'
        //     }
        // } );
       
    };
};