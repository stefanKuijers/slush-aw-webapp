'use strict';

/*
    Build: Build main sass file
*/
module.exports = function (gulp, plugins, config) {

    return function() {
        var inject = {
            foundation: {
                framework: '<% if (answers.framework === \'Foundation (ZURB)\') { %>' + 
                '@import \'../../../bower_components/foundation/scss/normalize.scss\';'  + 
                // '@import \'../../../bower_components/foundation/scss/foundation.scss\';\n'  + 
                '<% } %>',
                sassVars: '<% if (answers.framework === \'Foundation (ZURB)\') { %>' + 
                '@import \'foundation-customize\';\n'  + 
                '@import \'foundation-customize-advanced\';'  + 
                '<% } %>'
            },
            bootstrap:  {
                sassVars: '<% if (answers.framework === \'Bootstrap\') { %>' + 
                '@import \'bootstrap-customize\';\n'  + 
                '@import \'bootstrap-customize-advanced\';'  + 
                '<% } %>'
            }
        };

        return gulp.src( config.dir.generatorSource + config.path.mainSassFile )
            .pipe( plugins.injectString.before(
                '// bower:scss',
                inject.foundation.framework + config.eol
            ) )

            .pipe( plugins.injectString.after(
                '// generator:sassVars',
                config.eol + inject.bootstrap.sassVars
            ) )
            .pipe( plugins.injectString.after(
                '// generator:sassVars',
                config.eol + inject.foundation.sassVars
            ) )
            .pipe( plugins.replace(
                '// generator:sassVars',
                ''
            ) )
            .pipe( gulp.dest( config.dir.generatorDest + config.dir.defaultDest + config.dir.sass ) )
        ;
    };
};
