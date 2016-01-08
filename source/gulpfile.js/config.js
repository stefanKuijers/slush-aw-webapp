

module.exports = function( gulp, plugin ) {
    var defaults = require('./config.defaults.json');
    var userConfig = require('../gulp.config.json');

    var _config = plugin.extend( true, defaults, userConfig );
    // var root       = './';
    // var clientSrc  = root + '/src';
    // var clientApp  = clientSrc + '/app';
    // var asset      = clientSrc + '/asset';

    console.log( _config );

    var component = {
        name: _config.name,
        build: {
            root: _config.build.root,
            production: _config.build.production
        }
    };


    function getTask( name ) {
        return require('./task/' + name + '.js')( gulp, plugin, config );
    }

    var config = {
        component: component,
        dir: {
            src:       _config.dir.src,
            app:       _config.dir.app,
            tpm:       _config.dir.tmp,
            css:       _config.dir.css,
            data:      _config.dir.data,
            asset:     _config.dir.asset,
            image:     _config.dir.image,
            fonts:     _config.dir.fonts,
            bower:     _config.dir.bower_components,
            build:     _config.dir.build.root,
            buildDist: _config.dir.build.dist,
            buildSrc:  _config.dir.build.src
        },
        path: {
            // can be deleted?
            css:                root + '.tmp/css/style.css',
            indexHtml:          _config.path.indexHtml,
            styleScss:          _config.path.styleScss,
            vendorScss:         _config.path.vendorScss,
            bower:              _config.path.bower
        },
        glob: {
            buildDist: _config.glob.buildDist,
            asset:     _config.glob.asset,
            image:     _config.glob.image,
            fonts:     _config.glob.fonts,
            sass:      _config.glob.sass,
            js:        _config.glob.js,
            html:      _config.glob.html,
            template:  _config.glob.template,
            src:       _config.glob.src,
            css:       _config.glob.css
            
        },
        templatecache: {
            file: _config.templatecache.file,
            pathCorrection: _config.templatecache.pathCorrection
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