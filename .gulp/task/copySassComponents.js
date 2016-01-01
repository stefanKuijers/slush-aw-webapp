'use strict';

/*
    Build: Copy PHP
*/
module.exports = function (gulp, plugins, config) {
    return function() {
        // gulp.src( [
        //     config.dir.generatorSource + config.dir.sass + '_bootstrap-customize-advanced.scss.scss'
        // ] )
        //     .pipe( plugins.replace(
        //         '// generator:if(bootstrap)',
        //         '<% if (answers.framework === \'Bootstrap\') { %>'
        //     ) )
        //     .pipe( plugins.replace(
        //         '// generator:endif',
        //         '<% } %>'
        //     ) )
        //     .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest + config.dir.sass ) )
        // ;

        return gulp.src( config.dir.generatorSource + config.path.sassComponents )
            .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest + config.dir.sass ) )
        ;
    };
};