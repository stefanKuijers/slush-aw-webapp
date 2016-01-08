

module.exports = function( gulp, plugin ) {
    var defaults = require('./config.defaults.json');
    var userConfig = require('../gulp.config.json');
    // var root       = './';
    // var clientSrc  = root + '/src';
    // var clientApp  = clientSrc + '/app';
    // var asset      = clientSrc + '/asset';

    console.log( userConfig.name || defaults.name );

    var component = {
        name: userConfig.name || defaults.name,
        build: {
            root: userConfig.build.root || defaults.build.root,
            production: userConfig.build.production || defaults.build.production
        }
    };


    function getTask( name ) {
        return require('./task/' + name + '.js')( gulp, plugin, config );
    }

    var config = {
        component: component,
        client: {
            dir: {
                src:       userConfig.dir.src || defaults.dir.src,
                app:       userConfig.dir.app || defaults.dir.app,
                tpm:       userConfig.dir.tmp || defaults.dir.tmp,
                css:       userConfig.dir.css || defaults.dir.css,
                data:      userConfig.dir.data || defaults.dir.data,
                asset:     userConfig.dir.asset || defaults.dir.asset,
                image:     userConfig.dir.image || defaults.dir.image,
                fonts:     userConfig.dir.fonts || defaults.dir.fonts,
                bower:     userConfig.dir.bower_components || defaults.dir.bower_components,
                build:     userConfig.dir.build.root || defaults.dir.build.root,
                buildDist: userConfig.dir.build.dist || defaults.dir.build.dist,
                buildSrc:  userConfig.dir.build.src || defaults.dir.build.src
            },
            path: {
                // can be deleted?
                css:        root + '.tmp/css/style.css',
                indexHtml:  userConfig.path.indexHtml || defaults.path.indexHtml,
                styleScss:  userConfig.path.styleScss || defaults.path.styleScss,
                vendorScss: userConfig.path.vendorScss || defaults.path.vendorScss,
                bower:      userConfig.path.bower || defaults.path.bower
            },
            glob: {
                buildDist: userConfig.glob.buildDist || defaults.glob.buildDist,
                asset:     userConfig.glob.asset || defaults.glob.asset,
                image:     userConfig.glob.image || defaults.glob.image,
                fonts:     userConfig.glob.fonts || defaults.glob.fonts,
                sass:      userConfig.glob.sass || defaults.glob.sass,
                js:        userConfig.glob.js || defaults.glob.js,
                html:      userConfig.glob.html || defaults.glob.html,
                template:  userConfig.glob.template || defaults.glob.template,
                src:       userConfig.glob.src || defaults.glob.src,
                css:       userConfig.glob.css || defaults.glob.css
            }
        },
        error: {
            params: {
                title:    'Gulp',
                message:  '<%= error.message %>',
                sound: false
            },
            handler: function(err) {
                plugin.notify.onError( config.error.params )(err);

                if ( this.emit !== undefined ) this.emit('end');
            }
        }
    };

    config.task = {
        cacheTemplate: getTask('cacheTemplate'),
        clean: getTask('clean'),
        copy: getTask('copy'),
        font: getTask('font'),
        html: getTask('html'),
        image: getTask('image'),
        inject: getTask('inject'),
        replace: getTask('replace'),
        sass: getTask('sass'),
        serve: getTask('serve'),
        serveBuild: getTask('serveBuild'),
        watch: getTask('watch'),
        wiredep: getTask('wiredep')
    };

    return config;
};