

module.exports = function( gulp, plugin ) {
    var root = './';
    var clientSrc = root + '/src';
    var clientApp = clientSrc + '/app';

    var component = {
        name: 'userStatistics',
        build: {
            root: '/build/',
            production: false
        }
    };


    function getTask( name ) {
        return require('./task/' + name + '.js')( gulp, plugin, config );
    }

    var config = {
        component: component,
        client: {
            dir: {
                src:       clientSrc,
                app:       clientApp,
                tpm:       root + '.tmp',
                css:       root + '.tmp/css',
                data:      root + 'data',
                bower:     root + 'bower_components',
                build:     root + component.build.root,
                buildDist: root + component.build.root + '/dist',
                buildSrc:  root + component.build.root + '/src'
            },
            path: {
                css:        root + '.tmp/css/style.css',
                indexHtml:  clientSrc + '/index.html',
                styleScss:  clientSrc + '/index.style.scss',
                vendorScss: clientSrc + '/index.vendor.scss',
                bower:      root + 'bower.json'
            },
            glob: {
                buildDist: root + component.build.root + '/dist/**',
                image:     clientSrc + '/asset/**',
                sass:      clientApp + '/**/*.scss',
                js:        clientApp + '/**/*.js',
                html:      clientSrc + '/**/*.html',
                template:  clientApp + '/**/*.html',
                src:       clientSrc + '/**/*'
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
        inject: getTask('inject'),
        sass: getTask('sass'),
        serve: getTask('serve'),
        serveBuild: getTask('serveBuild'),
        watch: getTask('watch'),
        wiredep: getTask('wiredep'),
        html: getTask('html'),
        copy: getTask('copy'),
        rename: getTask('rename'),
        image: getTask('image'),
        replace: getTask('replace'),
        clean: getTask('clean'),
        cacheTemplate: getTask('cacheTemplate')
    };



    return config;
};